import React from 'react';
import styled from 'styled-components';

import TodoList from './components/TodoList';

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

function App() {
  return (
    <AppContainer>
      <TodoList />
    </AppContainer>
  );
}

export default App;
