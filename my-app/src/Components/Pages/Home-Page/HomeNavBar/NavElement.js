import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #3173C8;
  color: #fff;
  // height: 80px;
  padding: 10px 15px;

  &>.mobileContainer{
   display: flex;
   align-items: center;
   justify-content: space-between;

   &>.logo{
    display: inherit;
    align-items: center;

    &>p{
      margin: 0px;
    }
   }


   &>.hamburger{
     display: none;

    @media ((min-width: 320px) and (max-width: 480px)) { 
      // background: #000;
      padding: 0px 10px;
      display: block;
  
  }
   }
  }



  // & > div> img   {
  //   color: #023;
  //   margin-bottom: 0px;
  //   display: none;
  // }

  @media ((min-width: 320px) and (max-width: 480px)) { 
      // background: #000;
      padding: 0px ;
      display: block;
  
  }
`;

export const NavLink = styled(Link)`
  text-decoration: none;
  color: #fff;
  padding: 0 0.5rem;
  cursor: pointer;
  &.active {
    color: #023;
  }
  &:hover {
    color: #023;
  }

  @media ((min-width: 320px) and (max-width: 480px)) { 
    padding: 0rem;
  
  }


`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: 24px;
  text-wrap: wrap;
  // white-space: nowrap;

  @media ((min-width: 320px) and (max-width: 480px)) { 
    display: none;
  
  }
`;

