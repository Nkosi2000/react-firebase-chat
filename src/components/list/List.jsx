//import React from 'react';
import ChatList from './chatList/ChatList';
import './list.css';
import UserInfo from './userInfo/UserInfo';

const List = () => {
    return (
        <div className='list'>
            <Userinfo />
            <ChatList />
        </div>
    );
}

export default List;
