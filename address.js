import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Container, Header, Content, Form, Text, Left, Right, Body, Title, Icon, Button, ListItem,Radio, Item, Label, Input} from "native-base";
import { Actions } from 'react-native-router-flux';



export default class Loc extends Component {
 
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
			<Text style={styles.text}>Alamat Pengiriman</Text>
				<Content>
					<Form>
					<Item floatingLabel>
						<Label>Masukkan Alamat</Label>
						<Input />
					</Item>
				</Form>	
        </Content>
				<Content>
						<Form>
								<Button block style={styles.buttons} onPress={() => Actions.totalpay()}>
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
	margin: 18,
	flexDirection: "column", 
    alignSelf: 'center',
	justifyContent: "center",
	 backgroundColor: '#F4D03F'
  }, error: {
      fontSize: 20,
      alignSelf: 'center',
      color: 'red'
  } 
});
