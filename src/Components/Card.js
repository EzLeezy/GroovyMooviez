import styled from "styled-components";
import { Link } from "react-router-dom";

const CardContainer = styled.div`
  justify-content: center;
  width: 18rem;
  display: flex;
  height: 35rem;
  flex-direction: column;
  border-radius: 0.2rem;
  box-shadow: 0px 0px 15px 0px;
  transition: 0.3s;
  animation: ease-in;
  font-family: "Silkscreen", cursive;
  margin: 3rem 1.5rem;
  background-color: whitesmoke;

  overflow: hidden;
  white-space: nowrap; /* Don't forget this one */
  text-overflow: ellipsis;

  &:hover {
    transform: scale(1.1);
    box-shadow: 0px 0px 15px 0px;
  }
`;

const ImageContainer = styled.div`
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const CardContent = styled.div`
  margin: 1rem;
  margin-top: 0.3rem;

  h3,
  p {
    margin-bottom: 0.5rem;
    text-align: center;
    font-size: 1rem;
  }
`;

const View = styled(Link)`
  display: flex;
  margin: auto;
  margin-bottom: 1rem;
  padding: 0.2rem 0.8rem;
  align-items: center;
  text-decoration: none;
  background-color: #dcd7c9;
  width: fit-content;
  height: 1rem;
  cursor: pointer;
  color: black;
  transition: all 0.2s ease-in-out;
  &:hover {
    background-color: #a27b5c;
  }
`;

function Card({ id, poster, title, year }) {
  return (
    <CardContainer>
      <ImageContainer>
        <img src={poster} alt="movie-card" />
      </ImageContainer>

      <CardContent>
        <h3> {title} </h3>
        <p>{year}</p>
        <View to={`/view/${id}`}>Click to see more.. </View>
      </CardContent>
    </CardContainer>
  );
}

export default Card;
