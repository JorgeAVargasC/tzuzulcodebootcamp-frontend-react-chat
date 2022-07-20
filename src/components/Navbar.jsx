import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { logout } from '../features/auth/extraReducers'

export default function Navbar() {
    // const {user,logged} = useSelector((state)=>{
    //     return state.auth
    // })
    const {logged,user} = useSelector(state=>state.auth) // funcion que nos permite leer del estado global
    const dispatch = useDispatch()

    const handleLogout = ()=>{
        dispatch(logout())
    }
    return (
        <nav className='fixed bg-gray-800 w-full flex flex-col items-center'>
            <ul className='flex justify-between items-center w-11/12 h-10'>
                <li><h2>AppChat</h2></li>
                <li><input className='bg-gray-800 border border-gray-600 rounded h-8 outline-none px-2' placeholder='Search...' type="text" /></li>
                <li><h2>Usuario</h2></li>
            </ul>
            <ul className='flex w-full h-10'> 
                <li className='w-full'><Link className='h-full border-b-2 flex justify-center items-center w-full' to="/">Home</Link></li>
                <li className='w-full'><Link className='h-full flex justify-center items-center w-full' to="/login">Login</Link></li>
                {logged&&<>
                    <li onClick={handleLogout}>{user.name}</li>
                    <li><Link to="/users">Users</Link></li>
                    <li><Link to="/chats">Chats</Link></li>
                </>}
            </ul>
        </nav>
    )
}
