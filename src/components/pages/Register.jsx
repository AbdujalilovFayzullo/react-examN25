import useRegister from "./useRegister"
import './register.scss'


const register = () => {
    const { firstName, lastName, email, password, confirmPassword, error, handleSubmit, handleFirstNameChange, handleLastNameChange, handleEmailChange, handlePasswordChange,handleConfirmPasswordChange } = useRegister();


  return (
    <div className="container">
          <form onSubmit={handleSubmit}>
        <input className="inputtt" type="text" onChange={handleFirstNameChange} value={firstName} placeholder="FirstName" />
        {error.firstName && <p>{error.firstName}</p>}

        <input className="inputtt" type="text" onChange={handleLastNameChange} value={lastName} placeholder="LastName" />
        {error.lastName && <p>{error.lastName}</p>}

        <input className="inputtt" type="email" onChange={handleEmailChange} value={email} placeholder="Email" />
        {error.email && <p>{error.email}</p>}

        <input className="inputtt" type="password" onChange={handlePasswordChange} value={password} placeholder="Password" />
        {error.password && <p>{error.password}</p>}

        <input className="inputtt" type="password" onChange={handleConfirmPasswordChange} value={confirmPassword} placeholder="ConfirmPassword" />
        {error.confirmPassword && <p>{error.confirmPassword}</p>}

        <button className="buttonn" type="submit">Register</button>

        
    </form>
    </div>      

  )
}

export default register