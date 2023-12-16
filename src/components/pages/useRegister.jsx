import { useState } from "react"
import { useNavigate } from "react-router-dom"

const useRegister = () => {
    const navigate = useNavigate()

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [error, setError] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
    })

    const validateEmail = (email) => {
        return /\S+@\S+\.\S+/.test(email)
    }

    const validatePassword = (password) => {
        return password.length >= 6
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        let formValid = true;

        const updateError = {
            firstName: firstName ? '' : 'First name is required',
            lastName: lastName ? '' : 'Last name is required',
            email: validateEmail(email) ? '' : 'Invalid email',
            password: validatePassword(password) ? '' : 'Kamida 6ta son',
            confirmPassword: password === confirmPassword ? '' : 'Parol mos kelmadi'

        };




        Object.keys(updateError).forEach((key) =>{
            if(updateError[key]) {
                formValid = false;
            }
        });

        if(!formValid) {
            setError(updateError)
            return;
        };

                

        localStorage.setItem('email', email)
        localStorage.setItem('password', password)

        navigate('/home')

        console.log('Submitted');

    }



  return {
    firstName, lastName, email, password, confirmPassword, error, handleFirstNameChange:(event) => {
        setFirstName(event.target.value);
        setError({ ...error, firstName: ''})
    },

    handleLastNameChange: (event) => {
        setLastName(event.target.value);
        setError({ ...error, lastName: ''});
    },

    handleEmailChange: (event) => {
        setEmail(event.target.value);
        setError({ ...error, email: ''});
    },

    handlePasswordChange: (event) => {
        setPassword(event.target.value);
        setError({ ...error, password: ''});
    },

    handleConfirmPasswordChange: (event) => {
        setConfirmPassword(event.target.value);
        setError({ ...error, confirmPassword: ''});
    },

    handleSubmit,

    
    

  }
}

export default useRegister