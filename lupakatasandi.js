import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Container, Header, Content, Form, Text, Left, Right, Body, Title, Icon, Button, Card, Item, Label, Input} from "native-base";



export default class Forgot extends Component {
  
  onValueChange(value: string) {
    this.setState({
      selected: value
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
		<Text style={styles.text}>Ubah Sandi</Text>
		<Content>
			<Card>            
				<Form>
					<Item floatingLabel>
						<Label>Email</Label>
						<Input />
					</Item>
					<Item floatingLabel> 
						<Label>New Password</Label>
						<Input />
					
					</Item>
					<Item floatingLabel last> 
						<Label>Confirm New Password</Label>
						<Input />
					</Item>
				</Form>
			</Card>
        </Content>
		<Content>
				<Form>
						<Button block style={styles.buttons}>
							<Text>OK</Text>
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
    backgroundColor: '#F4D03F'

  }, text: {
    fontSize: 35,
    textAlign: 'center',
    color: '#F4D03F'
  }, buttons: {
    margin: 10,
	flexDirection: "row", 
	justifyContent: "center",
	 backgroundColor: '#F4D03F',
	width : 150
  }, error: {
      fontSize: 20,
      alignSelf: 'center',
      color: 'red'
  } 
});
