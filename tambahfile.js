import React, { Component } from 'react';
import {StyleSheet} from 'react-native';
import { Container, Header, Content, Button,  Text, Left, Body, Right, Title } from 'native-base';
//,View ,Footer
import firebase from "firebase";
import FileUploader from "react-firebase-file-uploader";
import { Actions } from 'react-native-router-flux';


export default class ContentExample extends Component {
  state = {
    username: "",
    avatar: "",
    isUploading: false,
    progress: 0,
    avatarURL: ""
  };
  
  handleUploadStart = () => this.setState({ isUploading: true, progress: 0 });
  handleProgress = progress => this.setState({ progress });
  handleUploadError = error => {
    this.setState({ isUploading: false });
    console.error(error);
  };
  handleUploadSuccess = filename => {
    this.setState({ avatar: filename, progress: 100, isUploading: false });
    firebase.storage().ref("images").child(filename).getDownloadURL().then(url => this.setState({ avatarURL: url }));
  };

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
          <Button style={styles.lanjut} onPress={() => Actions.totalpay()}>
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