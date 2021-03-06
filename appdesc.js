import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Container, Header, Content, Form, Text, Left, Right, Body, Title, Icon, Button} from "native-base";
import { Actions } from 'react-native-router-flux';
import firebase from 'firebase';

export default class Desc extends Component {

  onValueChange(value) {
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
		<Text style={styles.text}> Deskripsi Aplikasi</Text>
				<Content>
					<Text> PrintHub merupakan sebuah aplikasi berbasis android yang berfungsi untuk memudahkan warga IPB dalam kegiatan cetak-mencetak, hanya dengan beberapa klik,
					dokumen yang kalian perlukan akan dicetak oleh mitra kami dan segera diantar ke lokasi yang diinginkan.
					</Text>
				</Content>
				<Content>
					<Form>
						<Button block style={styles.buttons} onPress={() => Actions.itemspecs()}>
							<Text>Cetak Sekarang</Text>
						</Button>
						<Button  style={styles.buttons} onPress={() => {firebase.auth().signOut()}} > 
        			<Text>LogOut</Text>
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
