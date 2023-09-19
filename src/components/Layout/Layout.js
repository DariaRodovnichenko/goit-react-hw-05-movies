import { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { Loader } from 'components/Loader/Loader';
import { Footer, Header, LayoutContainer, Logo, Navigation } from './Layout.styled';

export const Layout = () => {
  return (
    <LayoutContainer>
      <Header>
        <Logo>TMDB</Logo>
        <Navigation>
          <NavLink to="/" end>
            Home
          </NavLink>
          <NavLink to="/movies" >Search</NavLink>
        </Navigation>
      </Header>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
      <Footer>
        <p>&copy; {new Date().getFullYear()} Movie Search</p>
      </Footer>
    </LayoutContainer>
  );
};
