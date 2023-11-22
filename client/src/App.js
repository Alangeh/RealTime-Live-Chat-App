import React, { Component } from 'react';
import Header from './components/Header/Header';
import ChatHistory from './components/ChatHistory/ChatHistory';
import ChatInput from './components/ChatInput/ChatInput';
import '/App.css';
import { connect, sendMsg } from './api';

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            ChatHistory: []
        }
    }

    componentDidMount(){
        connect
    }
}
