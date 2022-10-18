import { PostInfo } from '../../components/PostInfo';
import { Container } from './Post.styles';

function Post() {
  return (
    <Container>
      <PostInfo />
      <div>Post</div>
    </Container>
  );
}

export { Post };
