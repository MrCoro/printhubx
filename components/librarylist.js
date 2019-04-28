import React, { Component } from 'react';
import { connect } from 'react-redux';

class LibraryList extends Component{
        //console.log(this.props);
        return;            
    }      


const mapStateToProps = state => {
    return { libraries: state.libraries }
};

export default connect(mapStateToProps)(LibraryList);