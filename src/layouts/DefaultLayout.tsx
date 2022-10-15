import { Outlet } from 'react-router-dom';
import { Header } from '../components/Header';
import { Profile } from '../components/Profile';
import { ContentWrapper, LayoutContainer } from './styles';

function DefaultLayout() {
  return (
    <LayoutContainer>
      <Header />
      <ContentWrapper>
        <Profile />
        <Outlet />
      </ContentWrapper>
    </LayoutContainer>
  );
}

export { DefaultLayout };
