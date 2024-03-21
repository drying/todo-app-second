// useFirebaseData.ts
import { useEffect, useState } from 'react'
import db from './Firebase'
import { collection, onSnapshot } from 'firebase/firestore'

type Status = '未着手' | '進行中' | '完了'

type FirebaseData = {
    id: string
    title: string
    status: Status
    detail: string
}

export const useFirebaseData = () => {
    const [data, setData] = useState<FirebaseData[]>([])

    useEffect(() => {
        const todoData = collection(db, 'todo')
        onSnapshot(todoData, (snapshot) => {
            const docsData = snapshot.docs.map((doc) => {
                const docData = doc.data()
                return {
                    id: doc.id,
                    title: docData.title,
                    status: docData.status,
                    detail: docData.detail,
                }
            })
            setData(docsData)
        })
    }, [])
    return data
}
