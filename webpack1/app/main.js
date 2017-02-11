/**
 * Created by zyy on 2017/2/7.
 */
//main.js
// var greeter = require('./../Greeter.js');
// document.getElementById('root').appendChild(greeter());


// import React from 'react'
// import {render} from 'react-dom';
// import Greeter from '../Greeter';
// render (<Greeter />,document.getElementById('root'));

import React from 'react'
import ReactDom from 'react-dom'
import Component1 from './components/Component1.jsx'
ReactDom.render(
    <Component1/>,
    document.getElementById('roots')
)