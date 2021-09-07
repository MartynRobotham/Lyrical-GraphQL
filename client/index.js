import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient from "apollo-client"; // The communication layer between the client and the server
import { ApolloProvider } from "react-apollo"; // Knows how to communicate between the client and React (the glue between the two)
import SongList from "./components/song-list";
import { Router, Route, hashHistory, IndexRoute } from "react-router";
import App from "./components/app";
import AddSong from "./components/add-song";
const client = new ApolloClient({});

const Root = () => {
  return (
      <ApolloProvider client={client}>
        <Router history={hashHistory}>
          <Route path='/' component={App} >
            <IndexRoute component={SongList} />
          </Route>
          <Route path='song/new' component={AddSong} />
        </Router>
      </ApolloProvider>
  )
};

ReactDOM.render(
  <Root />,
  document.querySelector('#root')
);
