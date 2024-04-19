//import React from 'react'
import ChatList from "./src/components/list/chatList/ChatList"
import "./list.css"
import Userinfo from "./userinfo/Userinfo"

const List = () => 
{
    return 
    (
        <div className='list'>
            <Userinfo/>
            <ChatList/>
        </div>
    );
}

export default List