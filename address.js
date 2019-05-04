import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Container, Header, Content, Form, Text, Left, Right, Body, Title, Icon, Button, ListItem,Radio} from "native-base";



export default class Loc extends Component {
  
  constructor() {
  super();
  this.state = {
   itemSelected: 'itemOne',
		}
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
			<Text style={styles.text}>Alamat Pengiriman</Text>
				<Content>
					<ListItem>
						<Left>
						<Text>Alamat 1</Text>
						</Left>
							<Right>
								<Radio onPress={() => this.setState({ itemSelected: 'itemOne' })}
									selected={this.state.itemSelected == 'itemOne'}
									/>
							</Right>
					</ListItem>
					<ListItem>
						<Left>
							<Text>Alamat 2</Text>
						</Left>
							<Right>
								<Radio onPress={() => this.setState({ itemSelected: 'itemTwo' })}
								selected={this.state.itemSelected == 'itemTwo' }
								/>
							</Right>
					</ListItem>
        </Content>
				<Content>
						<Form>
							<Button block style={styles.buttons}>
							<Text>Tambah Alamat Pengiriman</Text>
							</Button>
								<Button block 
								style={
									{width: 100, margin: 15,
									flexDirection: "column", 
									alignSelf: 'center',
									justifyContent: "center", 
									backgroundColor: '#fea048'}}
								>
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
    backgroundColor: '#fea048'

  }, text: {
    fontSize: 35,
    textAlign: 'center',
    color: '#fea048'
  }, buttons: {
	margin: 18,
	flexDirection: "column", 
    alignSelf: 'center',
	justifyContent: "center",
	 backgroundColor: '#fea048'
  }, error: {
      fontSize: 20,
      alignSelf: 'center',
      color: 'red'
  } 
});
