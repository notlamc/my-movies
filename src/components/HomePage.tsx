import { Link } from "react-router-dom";

import { useSelector } from "react-redux";

import { RootState } from "../redux/rootReducer";

import styled from "styled-components";

const HomePage = () => {
  const movies = useSelector((state: RootState) => state.moviesReducer.movies);

  return (
    <Container>
      <Title>Welcome</Title>

      <Message>Select an option from the list below.</Message>

      <Link to="/manage-movies">Manage Movies</Link>

      <Link to="/list-movies">List Movies ({movies.length})</Link>
    </Container>
  );
};

export default HomePage;

const Container = styled.div`
  display: grid;

  grid-gap: 1rem;
`;

const Title = styled.div`
  font-size: 2rem;
`;

const Message = styled.div``;
