import styled from "styled-components";
import Ticket from "./Ticket";
import Footer from "./Footer";
import Header from "./Header";
import { useNavigate } from "react-router-dom";

const Wrapper = styled.div`
  display: flex;
  font-family: "Silkscreen", cursive;
  width: 100vw;

  align-content: center;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const ContentContainer = styled.div`
  display: flex;
  margin: 2rem;
  width: 70%;

  h1 {
    font-size: 4rem;
    line-height: 5rem;
  }

  p {
    font-size: 2rem;
  }
`;

const TicketWrapper = styled.div`
  display: flex;
  margin: 1rem;
`;

function Welcome() {
  const navigate = useNavigate();

  const navigateSearch = () => {
    // 👇️ navigate to /
    navigate("/search");
  };

  return (
    <>
      <Header />
      <Wrapper>
        <ContentContainer>
          <h1>Welcome To Groovy Moovyz! </h1>
        </ContentContainer>

        <ContentContainer>
          <p>
            {" "}
            &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; Click the Ticket
            Below To Get Started! <br /> <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
            dolores tenetur quas, tempora suscipit optio minus cupiditate sit
            animi consequatur nesciunt consectetur neque nulla illum ipsam
            labore similique officiis ratione.
          </p>
        </ContentContainer>

        <TicketWrapper>
          <Ticket onClick={navigateSearch} />
        </TicketWrapper>
      </Wrapper>
      <Footer />
    </>
  );
}

export default Welcome;
