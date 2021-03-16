import React from "react";
import styled from "styled-components";
import Link from "../Link/Link"

const Header = styled.header`
  background: #17c3b2;
  color: white;
  text-align: center;
  font-family: Arial, sans-serif;
  letter-spacing: -1px;
  padding: 0.25rem;
`;
const Title = styled.h1`
  font-family: Arial, sans-serif;
  letter-spacing: -1px;
`;

const Footer = styled.footer`
  background: #aaaaaa;
  position: fixed;
  color: white;
  bottom: 0;
  left: 0;
  width: 100%;
  text-align: center;
`;
const List = styled.ul`
  list-style: none;
  font-family: Arial, sans-serif;
  display: flex;
  width: 100%;
  padding: 0;
  margin: 0;
  text-transform: uppercase;
  user-select: none;
`;

const LinkWrap = styled.li`
  width: 50%;
`;

const Layout = (props) => {
  const { children, ActivePage = 'home'} = props;
  return (
    <>
      <Header>
        <Title>To Do App</Title>
      </Header>
      

      {children}

      <Footer>
        <nav>
          <List>
            <LinkWrap>
              <Link>Home</Link>
            </LinkWrap>

            <LinkWrap>
              <Link>Add</Link>
            </LinkWrap>
          </List>
        </nav>
      </Footer>
    </>
  );
};
export default Layout;
