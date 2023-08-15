
import './Authentication.scss'
import SignUpForm from '../../components/SignUpForm/SignUpForm'
import SignInForm from '../../components/SignInForm/SignInForm'


const Authentication = () => {
    

    return (
        <div className='auth-container'>
            <SignInForm/>
            <SignUpForm/>
        </div>
    )
}

export default Authentication
