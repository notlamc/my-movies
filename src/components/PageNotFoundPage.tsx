import { Link } from "react-router-dom";

import styled from "styled-components";

import { RouteComponentProps } from "react-router";

const PageNotFoundPage = (props: RouteComponentProps) => {
  return (
    <Container>
      <Title>Page Not Found</Title>

      <Message>Sorry, but the page you requested was not found.</Message>

      <Link to="/">Home</Link>
    </Container>
  );
};

export default PageNotFoundPage;

const Container = styled.div`
  display: grid;

  grid-gap: 1rem;
`;

const Title = styled.div`
  font-size: 2rem;
`;

const Message = styled.div``;
