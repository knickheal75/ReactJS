import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header';
import Navigation from './components/Navigation';

ReactDOM.render(<Header />, document.getElementById('header'));
ReactDOM.render(<Navigation />, document.getElementById('nav'));