import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Container, Header, Content, Form, Text, Left, Right, Body, Title, Icon, Button, Card, Item, Label, Input} from "native-base";

export default class SignUp extends Component {
	state={
		userEmail:'',
		userPassword:'',
		error: '',
		loading: false
	}

	onSignUpPress(){
    const { userEmail, userPassword } = this.state;
    this.setState({error: '', loading: true});
    firebase.auth().createUserWithEmailAndPassword(userEmail, userPassword)
        .then(this.onLoginSuccess.bind(this));
	
		this.setState({
			userEmail: '',
			userPassword: '',
			});
		}
	
  render() {
    return (
      <Container>
        <Header style={styles.header}>
			<Left>
			  <Button transparent>
				  <Icon name='arrow-back' />
				</Button>
			</Left>
			  <Body>
				<Title>PrintHub</Title>
			  </Body>
			  <Right>
				<Button transparent>
				  <Icon name='menu' />
				</Button>
			</Right>
		</Header>
		<Text style={styles.text}> Daftar</Text>
		<Content>
			<Card>            
				<Form>
					<Item floatingLabel>
						<Label>Email</Label>
						<Input value={this.state.userEmail} onChangeText={userEmail => this.setState({ userEmail: userEmail})}/>
					</Item>
					<Item floatingLabel> 
						<Label>Password</Label>
						<Input secureTextEntry={true} onChangeText={userPassword => this.setState({userPassword})}/>
					</Item>
				</Form>
			</Card>
        </Content>
				<Content>
						<Form>
								<Button block style={styles.buttons} onPress={() => {this.onSignUpPress.bind(this)}}>
									<Text>Daftar</Text>
								</Button>
								<Button  block style={styles.buttons} onPress={() => {firebase.auth().signOut()}} > 
        					<Text>Back</Text>
        				</Button>
						</Form>	
				</Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    fontSize: 20,
    textAlign: 'center',
    backgroundColor: '#fea048'

  }, text: {
    fontSize: 35,
    textAlign: 'center',
    color: '#fea048'
  }, buttons: {
	alignSelf: 'center',
	justifyContent: "center",
	 backgroundColor: '#fea048',
	width : 150
  }, error: {
      fontSize: 20,
      alignSelf: 'center',
      color: 'red'
  } 
});
