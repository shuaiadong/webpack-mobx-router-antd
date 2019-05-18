import React, {Component} from 'react';
import {observer} from 'mobx-react';
import base from'./less/base.less';
import css from './less/base.css';
import axios from 'axios'
function fun() {
    debugger
    window.a = require.context('src', true, /index.js$/)
}
fun()
@observer
export default class App extends Component {
    
    componentDidMount() {
        console.log('11111')
        axios.get('/comments/hotflow?id=4372148896377528&mid=4372148896377528&max_id_type=0')
        axios.get('/success')
        axios.post('/user') // 请求的mock
    }

    render () {
        base.use()
        return <div >
        
        <p >
                </p>
        </div>
    }
}