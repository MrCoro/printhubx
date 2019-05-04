import React, { Component } from 'react';
import { connect } from 'react-redux';
import { emailChanged, passwordChanged, loginUser } from '../src/action';
import { Card, CardSection, Input, Button, View, Text } from 'native-base';
import { Spinner } from './spinner';

class LoginForm extends Component{
    onEmailChange(text){
        this.props.emailChanged(text);
    }

    onPasswordChange(text){
        this.props.passwordChanged(text);
    }

    onButtonPress(){
        const { email, password } = this.props;
        this.props.loginUser({ email, password });
    }

    renderError() {
        if(this.props.error){
          return(
            <View style={{ backgroundColor: 'white' }}>
                <Text style={style.errorTextStyle}>
                {this.props.error}
                </Text>
            </View>
          ); 
        }
    }

    renderButton(){
        if(this.props.loading){
            return <Spinner />;
        } 
        return (
          <Button onPress={this.onButtonPress.bind(this)}> 
             login
          </Button>
        );
    }

    render(){
      return (
        <Card>
            <CardSection> 
                <Input label="Email" placeholder="email@gmail.com" onChangeText={this.onEmailChange.bind(this)} value={this.props.email} />
            </CardSection>  
            <CardSection>
                <Input secureTextEntry label="Password" placeholder="password" onChangeText={this.onPasswordChange.bind(this)} value={this.props.password}/>
            </CardSection>

            {this.renderError()}

            <CardSection>
                {this.renderButton()}
            </CardSection>
        </Card>
      );
    }
}

const style = {
    errorTextStyle: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'red'
    }
}

const mapStateToProps = state => {
    const { email, password, error, loading } = state; 
    return {
        email,
        password,
        error,
        loading
    };
};

export default connect(mapStateToProps, { emailChanged, passwordChanged, loginUser }) (LoginForm);