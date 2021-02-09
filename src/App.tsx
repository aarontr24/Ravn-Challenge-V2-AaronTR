import {
  ApolloClient,
  ApolloProvider,
  HttpLink
} from '@apollo/client'
import {cache} from './cache'
import { useReducer} from 'react';

import { AppInfo } from './components/AppInfo';
import { Sidebar } from './components/Sidebar';
import { InfoContext } from './infoContext/infoContext'
import { infoReducer } from './infoContext/infoReducer';

const client = new ApolloClient({
  cache,
  link: new HttpLink({
    uri: 'https://swapi-graphql.netlify.app/.netlify/functions/index'
  })
})


function App() {
  const [info, dispatch] = useReducer(infoReducer, {idPerson: ''})

  return (
    <ApolloProvider client={client}>
      <InfoContext.Provider value={{info, dispatch}}>
        <div className="app__main-content">
          <header className="app__header">
            <h4>Ravn Star Wars Registry</h4>
          </header>
          <main>
            <Sidebar />
            <AppInfo />
          </main>
        </div>
      </InfoContext.Provider>
    </ApolloProvider>
  );
}

export default App;
