import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import axios from "axios";

const FilmView = () => {
  const [data, setData] = useState({
    Poster: "",
    Title: "",
    Director: "",
    Actors: "",
    Genre: "",
    Plot: "",
    Metascore: "",
    imdbRating: "",
    Runtime: "",
    Released: "",
    Awards: "",
    BoxOffice: "",
  });

  const { id } = useParams();

  useEffect(() => {
    const options = {
      method: "GET",
      url: "https://movie-database-alternative.p.rapidapi.com/",
      params: { r: "json", i: `${id}` },
      headers: {
        "X-RapidAPI-Key": "9d9cfe1897msh741bd79fb799e65p10e075jsn75713fa5c441",
        "X-RapidAPI-Host": "movie-database-alternative.p.rapidapi.com",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
        setData({
          Poster: response.data.Poster,
          Title: response.data.Title,
          Director: response.data.Director,
          Actors: response.data.Actors,
          Genre: response.data.Genre,
          Plot: response.data.Plot,
          Metascore: response.data.Metascore,
          imdbRating: response.data.imdbRating,
          Runtime: response.data.Runtime,
          Released: response.data.Released,
          Awards: response.data.Awards,
          BoxOffice: response.data.BoxOffice,
        });
      })
      .catch(function (error) {
        console.error(error);
      });
  }, [id]);

  return (
    <>
      <Header />
      <Wrapper>
        <ViewImage alt={data.Title} src={data.Poster} />
        <LandingLink to="/search">Back</LandingLink>
        <ContentWrapper>
          {data.Title ? <h1> Title : {data.Title}</h1> : null}
        </ContentWrapper>

        <ContentWrapper>
          {data.Director ? (
            <>
              <h3> Director : </h3> <p> {data.Director} </p>
            </>
          ) : null}

          {data.Actors ? (
            <>
              <h3>Actors : </h3>
              <p>{data.Actors}</p>
            </>
          ) : null}

          {data.Genre ? (
            <>
              <h3>Genre : </h3> <p>{data.Genre} </p>
            </>
          ) : null}

          {data.Plot ? (
            <>
              <h3>Plot : </h3>
              <p>{data.Plot}</p>
            </>
          ) : null}

          {data.Metascore ? (
            <>
              <h3>Metascore : </h3> <p>{data.Metascore}</p>
            </>
          ) : null}

          {data.imdbRating ? (
            <>
              <h3>IMDB Rating :</h3>
              <p>{data.imdbRating}</p>
            </>
          ) : null}

          {data.Runtime ? (
            <>
              <h3> Runtime : </h3> <p>{data.Runtime}</p>
            </>
          ) : null}

          {data.Released ? (
            <>
              <h3> Released : </h3> <p> {data.Released} </p>
            </>
          ) : null}

          {data.Awards ? (
            <>
              <h3>Awards :</h3>
              <p> {data.Awards} </p>
            </>
          ) : null}

          {data.BoxOffice ? (
            <>
              <h3>BoxOffice : </h3> <p> {data.BoxOffice}</p>
            </>
          ) : null}
        </ContentWrapper>
      </Wrapper>
      <Footer />
    </>
  );
};

const Wrapper = styled.div`
  margin-top: 2rem;
  display: flex;
  width: 100vw;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  font-family: "Silkscreen", cursive;
  margin-bottom: 10rem;

  h1 {
    letter-spacing: 0.1rem;
    font-size: 2rem;
    line-height: 5rem;
    padding: 2rem;
  }

  p {
    width: 50%;
    font-size: 1.3rem;
    line-height: 1.3rem;
    margin-top: 1rem;
    letter-spacing: 0.1rem;
    padding-bottom: 2rem;
  }

  h3 {
    width: 50%;
    font-size: 1.5rem;
    line-height: 1.3rem;
    margin-top: 1rem;
    letter-spacing: 0.1rem;
    padding-bottom: 2rem;
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  justify-content: center;
  justify-content: center;
  flex-wrap: wrap;
  border: 3px solid black;
  padding: 2rem;
  width: 45%;
  flex-direction: row;
  align-items: center;
  align-content: center;
`;

const ViewImage = styled.img`
  max-width: 30rem;
  border-bottom-left-radius: 0.2rem;
  border-top-left-radius: 0.2rem;
  margin: 2rem;
  &:hover {
    transform: scale(1.1);
    box-shadow: 5px 5px 5px 5px;
  }
`;

export const LandingLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 500;
  font-size: 1.4rem;
  border-radius: 4rem;
  height: 3rem;
  text-decoration: none;
  background-color: white;
  color: black;
  width: 22rem;
  flex-direction: right;
  margin-bottom: 2rem;
  transition: 0.2s all ease-in-out;
  &:hover {
    background-color: #a27b5c;
    width: 25%;
  }
`;
export default FilmView;
