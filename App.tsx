import React from 'react';
import {Router} from '~/routes';
import {Provider} from 'react-redux';
import {store} from '~/store';
import 'react-native-gesture-handler';

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  );
}

export default App;
