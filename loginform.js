import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Container, Header, Text, Form, Item, Input, Label, Button, Left, Body, Right, Title, Card } from 'native-base';
// unused component    

export default class FloatingLabel extends Component {
  constructor(props){
    super(props)
    this.state={
      userEmail:'',
      userPassword:''
    }
  }
  // userRegister=()=>{
  //   const {userEmail} = this.state;
  //   const {userPassword} = this.state;
  // }
  render() {
    return (
        <Container>
        <Header style={styles.header}>
          <Left/>
          <Body>
            <Title>PrintHub</Title>
          </Body>
          <Right />
        </Header>
        <Card>  
          
          <Form>
            <Item floatingLabel>
              <Label>Email</Label>
              <Input  value={this.state.userEmail} onChangeText={userEmail => this.setState({ userEmail: userEmail})}/>
            </Item>
            <Item floatingLabel last> 
              <Label>Password</Label>
              <Input  onChangeText={userPassword => this.setState({userPassword})}/>
            </Item>
            <Item style={styles.buttons}>
            <Button transparent warning><Text>SIGN IN</Text></Button>
            <Button transparent warning><Text>DAFTAR</Text></Button>
            </Item>
        </Form>

        </Card>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    fontSize: 20,
    textAlign: 'center',
    backgroundColor: '#F4D03F'

  }, buttons: {
    margin: 10,
    alignContent: 'center'
  }, label : {
    
  }
});