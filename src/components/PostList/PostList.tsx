import { PostCard } from '../PostCard';
import { PostLink, PostListContainer } from './PostList.styles';

function PostList() {
  return (
    <PostListContainer>
      <PostLink href="#1">
        <PostCard />
      </PostLink>

      <PostLink href="#2">
        <PostCard />
      </PostLink>

      <PostLink href="#3">
        <PostCard />
      </PostLink>

      <PostLink href="#4">
        <PostCard />
      </PostLink>

      <PostLink href="#5">
        <PostCard />
      </PostLink>

      <PostLink href="#6">
        <PostCard />
      </PostLink>
    </PostListContainer>
  );
}

export { PostList };
