// useFirebaseData.ts
import { useEffect, useState } from 'react'
import { collection, getDocs, query, where } from 'firebase/firestore'
import db from './Firebase'

type Status = '未着手' | '進行中' | '完了'

type FirebaseData = {
    id: string
    title: string
    status: Status
    detail: string
}

export const useFilterFirebaseData = (statusFilter: Status) => {
    const [filterdata, setFilterData] = useState<FirebaseData[]>([])

    useEffect(() => {
        const fetchData = async () => {
            const q = query(
                collection(db, 'todo'),
                where('status', '==', statusFilter)
            )
            const todoData = await getDocs(q)
            const docsData = todoData.docs.map((doc) => {
                const docData = doc.data()
                return {
                    id: doc.id,
                    title: docData.title,
                    status: docData.status,
                    detail: docData.detail,
                }
            })
            setFilterData(docsData)
        }
        fetchData()
    }, [statusFilter])
    return filterdata
}
