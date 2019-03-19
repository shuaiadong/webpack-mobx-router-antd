import React, {Component} from 'react';
import {observer, inject} from 'mobx-react';

@inject('layout')
@observer
export default class Layout extends Component {
    
    
    render () {
        console.log(this, 'this')
        return <div>Layout</div>
    }

}