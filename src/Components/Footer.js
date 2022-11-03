import styled from "styled-components";

function Footer() {
  return (
    <FooterContainer>
      <h2>
        © Made by
        <a href="https://github.com/EzLeezy"> EzLeezy 📽 </a>
      </h2>
    </FooterContainer>
  );
}

const FooterContainer = styled.div`
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: #a27b5c;
  display: flex;
  justify-content: center;
  text-align: center;
  font-size: 0.7rem;
  padding: 1rem 0;
  flex: 0;
  position: fixed;
  align-items: center;
  height: 3vw;

  h2 {
    font-family: "Silkscreen", cursive;
    color: #dcd7c9;
  }

  a {
    color: #dcd7c9;
    text-decoration: none;
    transition: color 0.2s ease-in-out;

    &:hover {
      color: #363062;
    }
  }
`;

export default Footer;
