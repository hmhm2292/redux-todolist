import React, {Component} from 'react';
import {SafeAreaView, Text} from 'react-native';
import styled from 'styled-components';
import AddTodo from './containers/AddTodo';

class TodoApp extends Component {
  state = {
    todos: [],
    visibilityFilter: 'SHOW_ALL',
  };
  render() {
    return (
      <Container>
        <AddTodo />
      </Container>
    );
  }
}

export default TodoApp;

const Container = styled.SafeAreaView`
  height: 100%;
`;
