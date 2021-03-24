import { Link } from "react-router-dom";

import styled from "styled-components";

import { RouteComponentProps } from "react-router";

const PageNotFoundPage = (props: RouteComponentProps) => {
  return (
    <Container>
      <StyledTitle>Page Not Found</StyledTitle>

      <StyledMessage>
        Sorry, but the page you requested was not found.
      </StyledMessage>

      <StyledLink to="/">Home</StyledLink>
    </Container>
  );
};

export default PageNotFoundPage;

const Container = styled.div`
  display: grid;

  grid-gap: 1rem;
`;

const StyledTitle = styled.div`
  font-size: 2rem;
`;

const StyledMessage = styled.div``;

const StyledLink = styled(Link)`
  padding: 5px;

  color: #3c7ade;

  text-decoration: none;

  &:hover {
    color: #ffffff;

    background: #3c7ade;
  }
`;
