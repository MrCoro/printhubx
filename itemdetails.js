import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Container, Header, Content, Text, Left, Right, Body, Title, Icon, Button, Item, Picker, Form, Card, CardItem, Label, Input} from "native-base";


export default class ItemSpecs extends Component {

 constructor(props) {
    super(props);
    this.state = {
      selected: "key0"
    };
  }


  
  
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
							selectedValue={this.state.selected}
							onValueChange={this.onValueChange.bind(this)}
							>
								<Picker.Item label="Berwarna" value="key0" />
								<Picker.Item label="Hitam Putih" value="key1" />
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
							selectedValue={this.state.selected}
							onValueChange={this.onValueChange.bind(this)}
							>
								<Picker.Item label="Kertas HVS" value="key0" />
								<Picker.Item label="Kertas Foto" value="key1" />
								<Picker.Item label="Art Carton" value="key2" />
								<Picker.Item label="Art Paper" value="key3" />
								<Picker.Item label="Brief Card" value="key4" />
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
							selectedValue={this.state.selected}
							onValueChange={this.onValueChange.bind(this)}
							>
								<Picker.Item label="A5" value="size0" />
								<Picker.Item label="B5" value="size1" />
								<Picker.Item label="A4" value="size2" />
								<Picker.Item label="Q4(kwarto)" value="size3" />
								<Picker.Item label="F4(folio)" value="size4" />
								<Picker.Item label="A3" value="size5" />
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
						<Button block style={styles.buttons}>
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
