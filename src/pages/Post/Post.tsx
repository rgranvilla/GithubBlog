import { useContext } from 'react';
import ReactMarkdown from 'react-markdown';
import { PostInfo } from '../../components/PostInfo';
import { GithubBlogContext } from '../../contexts/GithubBlogContext';
import { Container } from './Post.styles';
import rehypeRaw from 'rehype-raw';

function Post() {
  const { activedPost } = useContext(GithubBlogContext);
  return (
    <Container>
      <PostInfo />
      <div className="content">
        <ReactMarkdown rehypePlugins={[rehypeRaw]}>{activedPost.body}</ReactMarkdown>
      </div>
    </Container>
  );
}

export { Post };
