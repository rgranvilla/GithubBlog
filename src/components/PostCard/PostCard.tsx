import { formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

import { IssuesDTO } from '../../contexts/GithubBlogContext';
import { PostCardContainer } from './PostCard.styles';

interface PostCardProps {
  post: IssuesDTO;
}

function PostCard({ post }: PostCardProps) {
  const { title, created_at, body } = post;

  const previewContent = body.slice(0, 187);
  return (
    <PostCardContainer>
      <header>
        <h2>{title}</h2>
        <span>
          {formatDistanceToNow(new Date(created_at), {
            addSuffix: true,
            locale: ptBR,
          })}
        </span>
      </header>

      <main>
        <p className="previewContent">{previewContent}...</p>
      </main>
    </PostCardContainer>
  );
}

export { PostCard };
