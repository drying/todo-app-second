import React from 'react'
import { useForm } from 'react-hook-form'
import db from '../../Firebase'
import { addDoc, collection, doc, updateDoc } from 'firebase/firestore'

type Status = '未着手' | '進行中' | '完了'

type FirebaseData = {
    id?: string
    title: string
    status: Status
    detail: string
}

export default function Todoinput() {
    const { register, handleSubmit, reset } = useForm<FirebaseData>()
    const onSubmit = async (data: FirebaseData) => {
        if (data.id) {
            const docRef = doc(db, 'todo', data.id)
            const { id, ...updateData } = data
            await updateDoc(docRef, updateData)
            console.log(data.id)
            reset()
        } else {
            const docRef = await addDoc(collection(db, 'todo'), data)
            reset()
            console.log(docRef.id)
        }
    }

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                gap: '10px',
            }}
        >
            <div style={{ display: 'flex', gap: '10px' }}>
                <input
                    type="text"
                    placeholder="ID（編集時必須）"
                    {...register('id')}
                />
                <input
                    type="text"
                    placeholder="タイトル"
                    {...register('title', { required: true })}
                />
                <input
                    type="text"
                    placeholder="詳細"
                    {...register('detail', { required: true })}
                />
                <select {...register('status', { required: true })}>
                    <option value="未着手">未着手</option>
                    <option value="進行中">進行中</option>
                    <option value="完了">完了</option>
                </select>
            </div>

            <input type="submit" />
        </form>
    )
}
