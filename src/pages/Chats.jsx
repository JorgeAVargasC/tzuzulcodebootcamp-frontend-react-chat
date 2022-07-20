import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { api } from '../api/query'
export default function Chats() {
    const {data:chats} = api.useGetChatsQuery()
    const {id} = useSelector(state=>state.auth.user)
    return (
        <div className='w-11/12 bg-green-800 min-h-screen mt-32'>
            <h2>Chats</h2>
            {chats?.map(chat=><article key={chat._id}>
                <Link to={"/chats/"+chat._id}>
                    {chat.idUserOne===id?
                        <p>UserTwo: {chat.idUserTwo}</p>:
                        <p>UserOne: {chat.idUserOne}</p>
                    }
                </Link>
                
            </article>)}
        </div>
    )
}
