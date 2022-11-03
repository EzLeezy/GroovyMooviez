import styled from "styled-components";

const HeaderContainer = styled.div`
  display: flex;
  margin-bottom: 3rem;
  justify-content: center;
  text-align: center;
  font-size: 1.25rem;
  top: 0;
  height: 4vw;
  align-items: center;
  background-color: #a27b5c;
  h1 {
    font-family: "Silkscreen", cursive;
    color: #dcd7c9;
  }
`;

function Header() {
  return (
    <HeaderContainer>
      <h1> Groovy Moovyz </h1>
    </HeaderContainer>
  );
}

export default Header;
