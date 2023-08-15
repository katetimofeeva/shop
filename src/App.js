import { Routes, Route } from 'react-router-dom'

import Home from './pages/Home/Home'
import Navigation from './pages/Navigation/Navigation'
import Authentication from './pages/Authentication/Authentication'
// import SignUpForm from './components/SignUpForm/SignUpForm';

function App() {
    return (
        <Routes>
            <Route path="/" element={<Navigation />}>
                <Route index element={<Home />} />
                <Route path="auth" element={<Authentication />} />
                {/* <Route path = 'signUp' element={<SignUpForm/>}/> */}
            </Route>
        </Routes>
    )
}

export default App
