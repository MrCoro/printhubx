import React, { Component } from 'react';
import {StyleSheet, View} from 'react-native';
import { Container, Header, Content, Button, Footer, Text, Left, Body, Right, Title } from 'native-base';


export default class ContentExample extends Component {
  render() {
    return (
      <Container>
        <Header style={styles.header}>
          <Left/>
          <Body>
            <Title>PrintHub</Title>
          </Body>
          <Right />
        </Header>

		<Content style={styles.contentPos}>
          <Button style={styles.addFile}>
            <Text>Tambahkan File</Text>
          </Button>
        </Content>
		<Content style={styles.contentPos}>
		 <Button style={styles.lanjut}>
            <Text>Lanjut</Text>
          </Button>
		</Content>

      </Container>
    );
  }
}


const styles = StyleSheet.create({
  header:	{
	fontSize: 20,
    textAlign: 'center',
    backgroundColor: '#fea048'
	},
	contentPos:	{
	bottom: -120
	},
  addFile:	{
	
	alignSelf:'center',
	backgroundColor: '#fea048',

  }, 
  lanjut:	{
	
	alignSelf:'center',
	backgroundColor: '#fea048',
  }
});