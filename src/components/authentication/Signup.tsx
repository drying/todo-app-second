import React from 'react'
import { auth } from '../../Firebaseauth'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { useAuthContext } from '../../context/AuthContext'

const Signup = () => {
    const { user } = useAuthContext() ?? { user: null }
    const handleSubmit = (e: any) => {
        e.preventDefault()
        const { email, password } = e.target.elements
        createUserWithEmailAndPassword(auth, email.value, password.value)
    }

    return (
        <div>
            <h2>ユーザー登録 {user}</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="email">メールアドレス</label>
                    <input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="email"
                    />
                </div>
                <div>
                    <label htmlFor="password">パスワード</label>
                    <input
                        id="password"
                        name="password"
                        type="password"
                        placeholder="password"
                    />
                </div>
                <div>
                    <button>登録</button>
                </div>
            </form>
        </div>
    )
}

export default Signup
