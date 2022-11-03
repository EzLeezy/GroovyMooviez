import bg from "./mega-creator.svg";
import Header from "./Header";
import Footer from "./Footer";
import styled from "styled-components";
import { LandingLink } from "./FilmView";

const NFBG = styled.div`
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 40%;
    margin: 0;
  }
`;

const TextHolder = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  margin-top: 2rem;

  h1 {
    font-family: "Silkscreen", cursive;
  }
`;

const LinkHolder = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  font-family: "Silkscreen", cursive;
  margin: 2rem;
`;

function NotFound() {
  return (
    <>
      <Header />

      <TextHolder>
        <h1> Nothing Found...</h1>
      </TextHolder>

      <NFBG>
        <img src={bg} alt="404" />
      </NFBG>
      <LinkHolder>
        <LandingLink to="/"> Back </LandingLink>
      </LinkHolder>

      <Footer />
    </>
  );
}

export default NotFound;
