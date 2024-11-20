import { useState } from 'react';
import '../../assets/auth.css'

export default function Login() {
  const [enteredValues, setEnteredValues] = useState({
    email:'',
    password:'',
  });

  function handleSubmit(event){
    event.preventDefault();
    console.log(enteredValues);
  }


  function handleInputChange(identifier, value){
    setEnteredValues((prevValues) => (
      {
        ...prevValues,
        [identifier]:value
      }
    ));
  }


  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>
      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input onChange={ (event) =>        
            handleInputChange('email', event.target.value)} id="email" type="email" name="email"
            value={enteredValues.email}
          />
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input onChange={ (event) =>        
            handleInputChange('password', event.target.value)}  
            id="password" type="password" name="password" 
            value={enteredValues.password}  
        />
        </div>
      </div>

      <p className="form-actions">
        <button className="button" type='submit'>Login</button>
      </p>
    </form>
  );
}
