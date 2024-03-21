import React from 'react'
import { auth } from '../../Firebaseauth'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { Link, useNavigate } from 'react-router-dom'

const Login = () => {
    const navigate = useNavigate()
    const handleSubmit = (e: any) => {
        e.preventDefault()
        const { email, password } = e.target.elements
        signInWithEmailAndPassword(auth, email.value, password.value)
            .then(() => {
                navigate('/')
            })
            .catch((error) => {
                console.log(error.code)
                console.log(error.message)
            })
    }

    return (
        <div>
            <h2>ログイン</h2>
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
                    <button>ログイン</button>
                </div>
                <div>
                    ユーザー登録は<Link to={'/signup'}>こちら</Link>から
                </div>
            </form>
        </div>
    )
}

export default Login
