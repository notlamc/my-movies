import styled from "styled-components";

const HeaderSection = () => {
  return (
    <Container>
      <StyledTitle>My Movies</StyledTitle>
    </Container>
  );
};

export default HeaderSection;

const Container = styled.div`
  padding: 1rem;

  background-color: #3c7ade;
`;

const StyledTitle = styled.div`
  color: #ffffff;

  font-size: 2.5rem;

  text-transform: uppercase;
`;
