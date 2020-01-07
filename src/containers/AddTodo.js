import React, {Component} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import styled from 'styled-components';
import Icon from 'react-native-vector-icons/Ionicons';

class AddTodo extends Component {
  render() {
    return (
      <Container>
        <InputBox placeholder="Add Your Todo" />
        <TouchableOpacity>
          <AddButton>
            <Icon name="ios-add" size={30} />
          </AddButton>
        </TouchableOpacity>
      </Container>
    );
  }
}

export default AddTodo;

const Container = styled.View`
  flex-direction: row;
  align-items: center;
`;

const InputBox = styled.TextInput`
  border: 1px solid black;
  background-color: #eaeaea;
  height: 50;
  padding: 5px;
  flex: 1;
`;

const AddButton = styled.View`
  height: 50;
  padding: 10px;
  background-color: #eaeaea;
  justify-content: center;
  align-items: center;
`;
