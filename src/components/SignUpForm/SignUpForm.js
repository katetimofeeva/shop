import { useState } from 'react'

import {
    createUserDoc,
    createAuthUserWithEmailAndPassword,
} from '../../utils/firebase/Firebase'
import FormInput from '../FormInput/FormInput'
import Button from '../Button/Button'

import './SignUpForm.scss'

const defaultFormValue = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
}
const SignUpForm = () => {
    const [formValue, setFormValue] = useState(defaultFormValue)

    const handleChange = (event) => {
        const { name, value } = event.target

        setFormValue({ ...formValue, [name]: value })
    }

    const cleanFormFields = () => {
        setFormValue(defaultFormValue)
    }
    const handleSubmit = async (e) => {
        e.preventDefault()

        if (formValue.password !== formValue.confirmPassword) {
            alert('password do not match')
            return
        }
        try {
            const { user } = await createAuthUserWithEmailAndPassword(
                formValue.email,
                formValue.password
            )

            await createUserDoc(user, { displayName: formValue.displayName })
            cleanFormFields()
        } catch (err) {
            console.log('error', err)
        }
    }

    return (
        <div className="sign-up-container">
            <h2> Don't have an account?</h2>
            <span>Sign up with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput
                    label="Display name"
                    type="text"
                    value={formValue.displayName}
                    onChange={handleChange}
                    name="displayName"
                    required
                />

                <FormInput
                    label="Email"
                    type="email"
                    value={formValue.email}
                    onChange={handleChange}
                    name="email"
                    required
                />

                <FormInput
                    label="Password"
                    type="password"
                    value={formValue.password}
                    onChange={handleChange}
                    name="password"
                    required
                />
                <FormInput
                    label="Confirm password"
                    type="password"
                    value={formValue.confirmPassword}
                    onChange={handleChange}
                    name="confirmPassword"
                    required
                />
                <Button type="submit">Sign up</Button>
            </form>
        </div>
    )
}

export default SignUpForm
