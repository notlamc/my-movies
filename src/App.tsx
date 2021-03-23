import { Provider } from "react-redux";

import store from "./redux/store";

import styled from "styled-components";

import HomePage from "./components/HomePage";

import ManageMoviesPage from "./components/ManageMoviesPage";

import ListMoviesPage from "./components/ListMoviesPage";

import PageNotFoundPage from "./components/PageNotFoundPage";

import { BrowserRouter, Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Container>
          <Switch>
            <Route
              exact
              path="/manage-movies"
              render={(props) => <ManageMoviesPage {...props} />}
            />

            <Route
              exact
              path="/list-movies"
              render={(props) => <ListMoviesPage {...props} />}
            />

            <Route exact path="/" render={() => <HomePage />} />

            <Route exact render={(props) => <PageNotFoundPage {...props} />} />
          </Switch>
        </Container>
      </BrowserRouter>
    </Provider>
  );
};

export default App;

const Container = styled.div``;
