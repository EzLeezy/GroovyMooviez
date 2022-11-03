import "./SearchBar.css";
import styled from "styled-components";

const SearchBarContainer = styled.form`
  margin: 5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const InputWrapper = styled.div`
  width: 50%;
  height: 3.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 1rem 0 1rem;
  border-radius: 0.8rem;
  background: #A27B5C;
  box-sizing: border-box;

  @media (max-width: 768px) {
    .input-wrap {
      width: 96%;
    }
`;

const Input = styled.input`
  font-family: "Silkscreen", cursive;
  font-size: 1.5rem;
  color: white;
  width: 100%;
  height: 100%;
  padding: 0 0 0 1rem;
  background: #a27b5c;
  border: none;
  outline: none;

  ::placeholder {
    color: white;
    opacity: 0.7;
  }
`;

const Button = styled.button`
  font-size: 1.5rem;
  background-color: #a27b5c;
  border: none;
`;

function SearchBar({ onChange, onClick }) {
  return (
    <div>
      <SearchBarContainer onSubmit={(e) => onClick(e)} method="get">
        <InputWrapper>
          <label htmlFor="movie-search">
            <span className="visually-hidden"></span>
          </label>
          <Input
            onChange={(e) => onChange(e)}
            type="text"
            placeholder="Search a Groovy Moovy..."
          />
          <Button type="submit" className="fas fa-search"></Button>
        </InputWrapper>
      </SearchBarContainer>
    </div>
  );
}

export default SearchBar;
