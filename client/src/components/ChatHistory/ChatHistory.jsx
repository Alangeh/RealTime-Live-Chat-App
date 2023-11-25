import React, { Component } from 'react';
import './ChatHistory.css';
import Message from '../Message/Message';

class ChatHistory extends Component{
    render(){
        console.log(this.props.ChatHistory);
        this.props.ChatHistory?.map(msg => <Message key={msg.timeStamp} message={msg.data} />);

        return (
            <div className='ChatHistory'>
                <h2>Chat History</h2>
                {Message}
            </div>
        );
    };
}

export default ChatHistory;