import { useState } from 'react';
import '../../assets/auth.css'
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const [enteredValues, setEnteredValues] = useState({
    email:'',
    password:'',
  });

  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();
    const authData = enteredValues;

    const response = fetch ('http://localhost:3000/login', {
      method: 'POST',
      headers: {
        'Content-Type' : 'application/json',
      },
      body: JSON.stringify(authData),
    })
    .then((response) => {
    if(response.ok) {
    console.log('Response is OK:', response.ok);
    return response.json();
    } else {
    console.error('Response is not OK', response.status, response.statusText);
    throw new Error('Failed to authenticate');
    }
    })
    .then ((data) => {
    console.log(data);
    localStorage.setItem('token', data.token);
    localStorage.setItem('role', data.role);
    
    navigate('/');
    }).then(() => {
      navigate('/');
    });
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
