import React from 'react'
import { AuthProvider } from './context/AuthContext'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Signup from './components/authentication/Signup'
import Sidebar from './components/sidebar/Sidebar'
import Login from './components/authentication/Login'
import PrivateRoute from './components/authentication/PrivateRoute'
import PublicRoute from './components/authentication/PublicRoute'

function App() {
    return (
        <AuthProvider>
            <div className="app">
                <BrowserRouter>
                    <Routes>
                        <Route
                            path="/"
                            element={
                                <PrivateRoute>
                                    <Sidebar />
                                </PrivateRoute>
                            }
                        />
                        <Route element={<PublicRoute />}>
                            <Route path="/signup" element={<Signup />} />
                            <Route path="/login" element={<Login />} />
                        </Route>
                    </Routes>
                </BrowserRouter>
            </div>
        </AuthProvider>
    )
}

export default App
