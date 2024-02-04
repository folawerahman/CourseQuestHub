import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #3173C8;
  color: #fff;
  height: 80px;
  padding: 10px 15px;
  & > * {
    display: flex;
    align-items: center;
  }
`;

export const NavLink = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #fff;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  &.active {
    color: #023;
  }
  &:hover {
    color: #023;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: 24px;
  white-space: nowrap;
`;
