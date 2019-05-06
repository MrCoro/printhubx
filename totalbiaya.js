import React, { Component } from 'react';
import { Alert, StyleSheet } from 'react-native';
import { Container, Header, Content, Form, Text, Left, Right, Body, Title, Icon, Button} from "native-base";
import { Actions } from 'react-native-router-flux';



export default class TotalPay extends Component {
  
  _onPressButton() {
    Alert.alert(
  'Pesanan anda berhasil!',
  'Harap menunggu, kami sedang mengerjakannya!',
  [
    {text: 'OK', onPress: () => Actions.desc()}
  ],
  {cancelable: false},
);
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
		<Text style={styles.text}> Total Biaya</Text>
		<Content style={styles.contentPos1}>
				<Text style={styles.textChapter}> Rincian Pesanan
				</Text>
        </Content>
		<Content style={styles.contentPos1}>
				<Text style={styles.textChapter}> Subtotal produk
				</Text>
        </Content>
		<Content style={styles.contentPos1}>
				<Text style={styles.textChapter}> Subtotal pengiriman
				</Text>
        </Content>
		<Content style={styles.contentPos1}>
				<Text style={styles.textChapter}> Total pembayaran
				</Text>
        </Content>
		<Content style={styles.contentPos2}>
				<Text style={styles.textEnd}> Harap bayar dengan uang pas
				</Text>
        </Content>
		<Content style={styles.contentPos3}>
				<Form>
						<Button 
							block style={styles.buttons}
							onPress={this._onPressButton}>
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
    backgroundColor: '#F4D03F'

  }, text: {
      fontSize: 35,
      textAlign: 'center',
      color: '#fea048'
  }, buttons: {
	  alignSelf: 'center',
	  flexDirection: "row", 
	  justifyContent: "center",
	  backgroundColor: '#F4D03F',
	  width : 150
  }, error: {
      fontSize: 20,
      alignSelf: 'center',
      color: 'red'
  }, textChapter: {
	  fontSize: 20,
      color: 'black'
  }, textEnd: {
	  fontSize: 16,
	  textAlign: 'center',
      color: 'black'
  }, contentPos1:	{
	  bottom: -20
  }, contentPos2:  {
	  bottom: -42
  },
});