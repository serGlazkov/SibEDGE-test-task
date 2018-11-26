import React from 'react';
import styled from 'styled-components';
import { UserForm, UserTable } from 'features/Users';

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 100%;
  padding: 10px;

  @media (min-width: 1024px) {
    grid-template-columns: 50% 50%;
  }
`;

const Column = styled.div`
  padding: 10px;
`;

export function App() {
  return (
    <Wrapper>
      <Column>
        <UserForm />
      </Column>
      <Column>
        <UserTable />
      </Column>
    </Wrapper>
  );
}
