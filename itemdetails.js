import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Container, Header, Content, Text, Left, Right, Body, Title, Icon, Button, Item, Picker, Form, Card, CardItem, Label, Input} from "native-base";
import { Actions } from 'react-native-router-flux';
import firebase from 'firebase';


export default class ItemSpecs extends Component {

 constructor(props) {
	super(props);
    this.state = {
      pickerValueA: "key0",
	  pickerValueB: "type0",
	  pickerValueC: "size0",
    }
  }
  
  onValueChange(value) {
    this.setState({
      selected: value
    });
  }

  writeUserData(pickerValueA,pickerValueB,pickerValueC){
    firebase.database().ref('order/').set({
        ordernum: pickerValueA,
		papertype: pickerValueB,
		size: pickerValueC
    }).then((data)=>{
        //success callback
        console.log('data ' , data)
    }).catch((error)=>{
        //error callback
        console.log('error ' , error)
    })
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
			  <Text style={styles.text}> Spesifikasi </Text>
		<Content>
			  <Item >
					<Left>
						<Text>Berwarna/Hitam Putih</Text>
					</Left>
					<Right>
						<Form>
							<Picker
								note
								mode="dropdown"
								style={styles.picker}
								selectedValue={this.state.pickerValueA}
								onValueChange={(value)=>{
									this.setState({pickerValueA: value});
								}}
								>
									<Picker.Item label="(Pilih)" value="key0" />
									<Picker.Item label="Berwarna" value="Warna" />
									<Picker.Item label="Hitam Putih" value="HitamPutih" />
							</Picker>
						</Form>
					</Right>
			  </Item>
		</Content>
		<Content>
			  <Item >
					<Left>
						<Text>Jenis Kertas</Text>
					</Left>
					<Right>
						<Form>
							<Picker
								note
								mode="dropdown"
								style={styles.picker}
								selectedValue={this.state.pickerValueB}
								onValueChange={(value)=>{
									this.setState({pickerValueB: value});
								}}
								>
									<Picker.Item label="(Pilih)" value="type0" />
									<Picker.Item label="Kertas HVS" value="HVS" />
									<Picker.Item label="Kertas Foto" value="Foto" />
									<Picker.Item label="Art Carton" value="AC" />
									<Picker.Item label="Art Paper" value="ArtPaper" />
									<Picker.Item label="Brief Card" value="BC" />
							</Picker>
						</Form>
					</Right>
			  </Item>
		</Content>
		<Content>
			  <Item >
					<Left>
						<Text>Ukuran Kertas</Text>
					</Left>
					<Right>
						<Form>
							<Picker
								note
								mode="dropdown"
								style={styles.picker}
								selectedValue={this.state.pickerValueC}
								onValueChange={(value)=>{
									this.setState({pickerValueC: value});
								}}
								>
									<Picker.Item label="(Pilih)" value="size0" />
									<Picker.Item label="A5" value="A5" />
									<Picker.Item label="B5" value="B5" />
									<Picker.Item label="A4" value="A4" />
									<Picker.Item label="Q4(kwarto)" value="Q4" />
									<Picker.Item label="F4(folio)" value="F4" />
									<Picker.Item label="A3" value="A3" />
							</Picker>
						</Form>
					</Right>
			  </Item>
		</Content>
		<Content>
				<Form>
					<Item floatingLabel>
						<Label>Jumlah Salinan</Label>
						<Input />
					</Item>
				</Form>	
		</Content>
		<Content>
				<Form>
						<Button block style={styles.buttons} onPress={() => Actions.pickerex()}>
							<Text>Lanjut</Text>
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
  }, picker: {
	margin : 25,
	width : 150
  }, error: {
      fontSize: 20,
      alignSelf: 'center',
      color: 'red'
  } 
});
