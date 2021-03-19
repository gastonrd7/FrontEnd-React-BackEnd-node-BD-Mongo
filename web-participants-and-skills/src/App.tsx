import React from 'react';
import { Provider } from 'react-redux';
import { ParticipantsContainer } from './containers/Participants';
import { store } from './store';

export const App: React.FC = () => (
  <Provider store={store}>
     <ParticipantsContainer />
  </Provider>
);
