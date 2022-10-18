import { PostList } from '../../components/PostList';
import { Profile } from '../../components/Profile';
import { Search } from '../../components/Search';
import { Container } from './Home.styles';

function Home() {
  return (
    <Container>
      <Profile />
      <Search />
      <PostList />
    </Container>
  );
}

export { Home };
