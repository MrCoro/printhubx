import React, { Component } from 'react';
import { Picker, StyleSheet, Text } from 'react-native';
import { connect } from 'react-redux';
import { orderUpdate, createOrder } from '../src/action/index';
import { Card, CardSection, Input, Button } from 'react-native';

class CreateOrder extends Component{
    onButtonPress(){
      const { name, phone, jenis } = this.props;
      
      this.props.createOrder({ name, phone, jenis: jenis || 'a4' });
    }

    render(){
        return(
            <Card>
                <CardSection>
                    <Input label="Nama" placeholder="Nama Anda" value={this.props.name} onChangeText={ text => this.props.orderUpdate({ prop: "name", value: text }) }/>
                </CardSection>
                <CardSection>
                    <Input label="NoHp" placeholder="08********" value={this.props.phone} onChangeText={ text => this.props.orderUpdate({ prop: "phone", value: text }) }/>
                </CardSection>
                <CardSection style={{ flexDirection: 'column' }}>
                    <Text style={styles.pickerTextStyle}>Pilih kertas</Text>
                    <Picker selectedValue={this.props.jenis} onValueChange={jenis => this.props.orderUpdate({ prop: 'jenis' , value: jenis })} style={{flex: 1}}>
                        <Picker.Item label="A4" value="a4" />
                        <Picker.Item label="Legal" value="Legal" />
                    </Picker>
                </CardSection>
                <CardSection>
                    <Button onPress={this.onButtonPress.bind(this)}>
                        Create
                    </Button>
                </CardSection>
            </Card>
        );
    }
}

const styles = StyleSheet.create({
    pickerTextStyle: {
      fontSize: 18,
      paddingLeft: 20   
    }
});

const mapStateToProps = (state) => {
    const { name, phone, jenis } = state.orderForm;

    return { name, phone, jenis };
};

export default connect(mapStateToProps, {orderUpdate, createOrder})(CreateOrder);