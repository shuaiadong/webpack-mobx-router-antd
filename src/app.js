import React, {Component} from 'react';
import {observer} from 'mobx-react';
import base from'./less/base.less';
import css from './less/base.css';

@observer
export default class App extends Component {
    
    
    render () {
        return <div className={base.locals.comp}>
        
        <p className="a">
        app1
                </p>
        </div>
    }
}