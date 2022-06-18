import React, { useState,useEffect } from 'react';

import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';

const Login = (props) => {
  const [enteredEmail, setEnteredEmail] = useState('');
  const [emailIsValid, setEmailIsValid] = useState();
  const [enteredPassword, setEnteredPassword] = useState('');
  const [passwordIsValid, setPasswordIsValid] = useState();
  const [enteredclg, setEnteredClg] = useState('')
  const [colgIsValid, setcolgIsValid] =  useState()
  
  const [formIsValid, setFormIsValid] = useState(false);

  useEffect(() => {
    
    setFormIsValid(
      enteredEmail.includes('@') && enteredPassword.trim().length > 6 && enteredclg.trim().length > 4
    );
    
  }, [enteredEmail,enteredPassword,enteredclg])
  
  const emailChangeHandler = (event) => {
    setEnteredEmail(event.target.value);

   
  };

  const passwordChangeHandler = (event) => {
    setEnteredPassword(event.target.value);

 
  };
const colgChangeHandler = (event ) =>{
  setEnteredClg(event.target.value)
}
  const validateEmailHandler = () => {
    setEmailIsValid(enteredEmail.includes('@'));
  };

  const validatePasswordHandler = () => {
    setPasswordIsValid(enteredPassword.trim().length > 6);
  };
const validateColgHandler  =  () =>{
  setcolgIsValid(enteredclg.trim().length>4)
}
  const submitHandler = (event) => {
    event.preventDefault();
    props.onLogin(enteredEmail, enteredPassword,enteredclg);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <div
          className={`${classes.control} ${
            emailIsValid === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            value={enteredEmail}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
          </div>
          <div className={`${classes.control} ${
            colgIsValid === false ? classes.invalid : ''
          }`}
          >
          <label htmlFor="clg">College</label>
          <input
            type="clg"
            id="clg"
            value={enteredclg}
            onChange={colgChangeHandler}
            onBlur={validateColgHandler}
          />
        </div>
        <div
          className={`${classes.control} ${
            passwordIsValid === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={enteredPassword}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          />
        </div>
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
