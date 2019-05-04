import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Container, Header, Content, Form, Text, Left, Right, Body, Title, Icon, Button} from "native-base";



export default class Desc extends Component {
  
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
		<Text style={styles.text}> Deskripsi Aplikasi</Text>
		<Content style={styles.contentPos1}>
				<Text style={styles.textDescription}> PrintHub merupakan sebuah aplikasi berbasis android yang berfungsi untuk memudahkan warga IPB dalam kegiatan cetak-mencetak, hanya dengan beberapa klik,
				dokumen yang kalian perlukan akan dicetak oleh mitra kami dan segera diantar ke lokasi yang diinginkan.
				</Text>
        </Content>
		<Content style={styles.contentPos2}>
				<Form>
						<Button block style={styles.buttons}>
							<Text>Cetak Sekarang</Text>
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
	  flexDirection: "row", 
	  justifyContent: "center",
	  backgroundColor: '#fea048',
	  width : 150
  }, error: {
      fontSize: 20,
      alignSelf: 'center',
      color: 'red'
  }, textDescription: {
	  fontSize: 18,
	  textAlign: 'center',
      color: 'black'
  }, contentPos1:	{
	bottom: -55
  },
  contentPos2:	{
	bottom: -65
  },


	

});