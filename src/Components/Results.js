import SearchBar from "./SearchBar";
import { useState } from "react";
import axios from "axios";
import Card from "./Card";
import styled from "styled-components";
import Header from "./Header";
import Footer from "./Footer";
import NotFound from "./NotFound";

const ResultsContainer = styled.div`
  display: flex;
  width: 100%;
  align-content: center;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;

  margin: 1rem;
  padding-bottom: 5rem;
`;

function Results() {
  const [query, setQuery] = useState();
  const [data, setData] = useState([]);

  const handleParams = (e) => {
    let param = e.target.value;
    setQuery(`${param}`);
    console.log(query);
  };

  const handleSearch = (e) => {
    if (e && e.preventDefault) {
      e.preventDefault();
    }

    const options = {
      method: "GET",
      url: "https://movie-database-alternative.p.rapidapi.com/",
      params: { s: `${query}`, r: "json", page: "1" },
      headers: {
        "X-RapidAPI-Key": "9d9cfe1897msh741bd79fb799e65p10e075jsn75713fa5c441",
        "X-RapidAPI-Host": "movie-database-alternative.p.rapidapi.com",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        setData(response.data.Search);
        console.log(data);
        console.log(response.data.Search);
        console.log(data[0]);
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  if (data) {
    return (
      <div>
        <Header />
        <SearchBar onChange={handleParams} onClick={handleSearch} />

        <ResultsContainer>
          {data?.map(({ imdbID, Poster, Title, Year }) =>
            Poster !== "N/A" ? (
              <Card
                key={imdbID}
                id={imdbID}
                title={Title}
                year={Year}
                poster={Poster}
              />
            ) : null
          )}
        </ResultsContainer>
        <Footer />
      </div>
    );
  } else {
    return (
      <div>
        <NotFound />
      </div>
    );
  }
}

export default Results;
