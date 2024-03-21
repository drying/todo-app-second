import React from 'react'
import Todo from './Todo'
import { useFirebaseData } from '../../useFirebaseData'

type Status = '未着手' | '進行中' | '完了'

type FirebaseData = {
    id: string
    title: string
    status: Status
    detail: string
}

interface TodolistProps {
    filterdata?: FirebaseData[]
}

const Todolist: React.FC<TodolistProps> = ({ filterdata }) => {
    const firebasedata = useFirebaseData()

    const filter =
        filterdata && filterdata.length > 0 ? filterdata : firebasedata

    return (
        <div className="todolist">
            {filter.map((todo) => (
                <Todo
                    key={todo.id}
                    id={todo.id}
                    title={todo.title}
                    status={todo.status}
                    detail={todo.detail}
                />
            ))}
        </div>
    )
}

export default Todolist
