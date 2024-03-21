import React, { useState } from 'react'
import Searchbar from './Searchbar'
import Todolist from './Todolist'
import './Sidebar.css'
import Todoinput from './Todoinput'
import { useFilterFirebaseData } from '../../useFilterFirebaseDaata'
import { useNavigate } from 'react-router-dom'
import { auth } from '../../Firebaseauth'
import { signOut } from 'firebase/auth'

type Status = '未着手' | '進行中' | '完了'

function Sidebar() {
    const [statusFilter, setStatusFilter] = useState<Status>('未着手')
    const filterdata = useFilterFirebaseData(statusFilter)

    const navigate = useNavigate()
    const handleLogout = () => {
        signOut(auth)
        navigate('/login')
    }

    return (
        <div className="sidebar">
            <h2>ToDoリスト</h2>
            <button onClick={handleLogout}>ログアウト</button>
            <Searchbar setStatusFilter={setStatusFilter} />
            <Todoinput />
            <Todolist filterdata={filterdata} />
        </div>
    )
}

export default Sidebar
