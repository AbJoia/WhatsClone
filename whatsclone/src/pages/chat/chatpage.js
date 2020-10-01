import React from 'react';
import {Text} from 'react-native';
import Header from '../../components/headers/Header';
import CardChat from '../../components/cardChat/cardChat';

const ChatPage = () =>{
    return(
        <>            
            <Header/>
            <CardChat />             
        </>
    );        
}

export default ChatPage;