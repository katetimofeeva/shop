import { useState} from 'react'

import {
    signInWithGooglePopup,
    createUserDoc,
    signInAuthUserWithEmailAndPassword,
} from '../../utils/firebase/Firebase'
import Button from '../Button/Button'
import FormInput from '../FormInput/FormInput'

import './SignInForm.scss'

const defaultFormValue = {
    email: '',
    password: '',
}
const SignInForm = () => {
    const [formValue, setFormValue] = useState(defaultFormValue)
    const { email, password } = formValue


    const logWithGoogleUser = async () => {
        await signInWithGooglePopup()
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        try {
            await signInAuthUserWithEmailAndPassword(
                email,
                password
            )
            cleanFormFields()
        } catch (err) {
            if (err.code === 'auth/wrong-password') {
                alert('Write correct password')
            } else if (err.code === 'auth/user-not-found') {
                alert('Write correct email')
            }
            console.log(err)
        }
    }
    const handleChange = (event) => {
        const { name, value } = event.target

        setFormValue({ ...formValue, [name]: value })
    }
    const cleanFormFields = () => {
        setFormValue(defaultFormValue)
    }
    return (
        <div className="sign-up-container">
            <h2> I already have an account</h2>
            <span> Sing in with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput
                    label="email"
                    type="email"
                    value={email}
                    name="email"
                    onChange={handleChange}
                />
                <FormInput
                    label="password"
                    type="password"
                    value={password}
                    name="password"
                    onChange={handleChange}
                />
                <div className="df">
                    <Button type="submit">Sign in</Button>
                    <Button
                        type="button"
                        buttonType="google"
                        onClick={logWithGoogleUser}
                    >
                        Google sign in
                    </Button>
                </div>
            </form>
        </div>
    )
}

export default SignInForm
