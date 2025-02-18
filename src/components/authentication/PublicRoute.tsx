import React from 'react'
import { useAuthContext } from '../../context/AuthContext'
import { Navigate, Outlet } from 'react-router-dom'

const PublicRoute = ({ children }: any) => {
    const { user } = useAuthContext()
    if (user) {
        return <Navigate to="/" />
    }
    return <Outlet />
}

export default PublicRoute
