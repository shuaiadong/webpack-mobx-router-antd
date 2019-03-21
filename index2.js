import React, {Component} from 'react';
import {render} from 'react-dom';
import SubpageA from './subpageA'; 
import SubpageB from './subpageB'; 
console.log(SubpageA());
console.log(SubpageB());
render(
    React.createElement('div', {}, 'react= 11'),
    document.getElementById('root')
)

