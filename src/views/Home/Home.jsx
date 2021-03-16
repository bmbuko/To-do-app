import React from "react";
import styled from "styled-components";

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
const Content = styled.main``;
const Footer = styled.footer`
  background: #AAAAAA;
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
  display:flex;
  width:100%;
  padding:0;
  margin:0;
  text-transform:uppercase;
  user-select:none
`;
const Link = styled.a`
font-weight:bold;
display:block;
padding:1rem;
text-transform:uppercase
user-select:none
cursor:pointer;


&:hover{
  background:rgba(0, 0 ,0 ,0.2)
}
&:active{
  background:rgba(0, 0 ,0 ,0.4)
}
`
const LinkWrap = styled.li`
width:50%
`

const Home = () => {
  return (
    <>
      <Header>
        <Title>To Do App</Title>
      </Header>
      <Content>nfdgkjfdghj</Content>
      <Footer>
        <nav>
          <List>
            < LinkWrap>
              <Link>Home</Link>
            </ LinkWrap>

            < LinkWrap>
              <Link>Add</Link>
            </ LinkWrap>
          </List>
        </nav>
      </Footer>
    </>
  );
};
export default Home;
