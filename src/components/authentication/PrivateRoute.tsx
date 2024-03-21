import React from 'react'
import { useAuthContext } from '../../context/AuthContext'
import { Navigate } from 'react-router-dom'

const PrivateRoute = ({ children }: any) => {
    const { user } = useAuthContext()
    if (!user) {
        return <Navigate to="/login" />
    }
    return children
}

export default PrivateRoute
