import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Container, Header, Content, Form, Text, Left, Right, Body, Title, Icon, Button, Accordion, Item} from "native-base";

const dataArray = [
  { title: "Inkjet Printing", content: "Printer berjenis inkjet ini adalah jenis printer yang menggunakan tinta untuk mencetak dan hasilnya pun dapat dibilang lumayan bagus." },
  { title: "Laserjet Printing", content: "Pencetak laser atau printer laser adalah pencetak untuk komputer yang menggunakan teknologi diode cahaya untuk mendapatkan partikel-partikel kecil toner dari cartridge ke kertas. Laserjet lebih ekonomis dibanding pencetak tinta." }
];

export default class PickerEx extends Component {
  
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
        </Header>
		<Text>Metode Print:</Text>
		<Content>
          <Accordion dataArray={dataArray} expanded={0}/>
        </Content>
        <Content>
          <Form>
		  <Text>Pilih Metode Print</Text>
			<Item >
			<Button  rounded light style={styles.buttons}>
            <Text style={{color:"#FFFFFF"}}>Inkjet</Text>
          </Button>
		  <Button  rounded light style={styles.buttons}>
            <Text style={{color:"#FFFFFF"}}>Laserjet</Text>
          </Button>
		  </Item>
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
