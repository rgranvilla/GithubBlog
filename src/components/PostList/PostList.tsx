import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { GithubBlogContext } from '../../contexts/GithubBlogContext';
import { PostCard } from '../PostCard';
import { PostListContainer } from './PostList.styles';

function PostList() {
  const { posts } = useContext(GithubBlogContext);

  return (
    <PostListContainer>
      {posts.map((post) => (
        <Link to={`/post/${post.number}`} key={post.number}>
          <PostCard post={post} />
        </Link>
      ))}
    </PostListContainer>
  );
}

export { PostList };
