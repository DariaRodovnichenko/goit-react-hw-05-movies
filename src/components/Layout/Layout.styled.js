import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const LayoutContainer = styled.div`
  margin: 0;
  padding: 0;
`;

export const Header = styled.header`
  background-color: steelblue;
  color: white;
  padding: 40px;
  display: flex;
  justify-content: space-between;
`;

export const Logo = styled(NavLink)`
  font-size: 28px;
  font-weight: bold;
  margin: 0;
`;

export const Navigation = styled.nav`
  display: flex;
  gap: 32px;
  justify-content: space-between;
  align-items: center;
  font-size: 20px;
`;

export const Footer = styled.footer`
  background-color: steelblue;
  color: white;
  padding: 16px;
  text-align: center;
`;
