import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ListView } from 'react-native';
import { orderFetch } from '../src/action/index';
import _ from 'lodash';
import { ListItem } from 'native-base';

class Listing extends Component{
    componentWillMount(){
        this.props.orderFetch();
    
        this.createDataSource(this.props);
    }

    componentWillReceiveProps(nextProps){
        //nextProps is the next set of props that this component
        //will be rendered with
        //this.props is still the old set of props
        this.createDataSource(nextProps);
    }

    createDataSource({ order }){
        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        }); 
    
        this.dataSource = ds.cloneWithRows(this.props.order);
    }

    renderRow(order) {
        return <ListItem 
            order={order}
        />
    }

    render (){
        //console.log(this.props);
        return(
            <ListView 
                enableEmptySections
                dataSource={this.dataSource}
                renderRow={this.renderRow}
            />
        );
    }
}

const mapStateToProps = state => {
    const order = _.map(state.order, (val, uid) => {
        return { ...val,uid };
    }); 
    return { order }; 
};

export default connect(mapStateToProps, { orderFetch })(Listing);