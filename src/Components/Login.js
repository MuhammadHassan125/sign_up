import React, { useState } from 'react';
import "./signup.css"
import { Link } from 'react-router-dom'


export default function Login() {
    const [email, setEmail] = useState("");
    const [againEmail, setAgainEmail] = useState("");
    const [password, setPassword] = useState("");
    const [acceptedTerms, setAcceptedTerms] = useState(false);
    const [formError, setFormError] = useState("");
    
    const handleFormSubmit = (event) => {
        event.preventDefault();
        if (!email) {
          setFormError("Esse campo é obrigatório");
        } else if (!password) {
          setFormError("Esse campo é obrigatório");
        } else {
          // Submit the form
          console.log("Form submitted");
        }
      };

  return (
    <>
      <section className='section'>
        <div className='container'>
          <form onSubmit={handleFormSubmit}>
            <div className='logo'>
              <img src="/images/logo.png" alt='logo'></img>
            </div>

            <div className='txt-login_under-logo'>
              <h1>Entrar na sua conta</h1>
              <p> Ou <Link to='/Signup'><span>fazer cadastro</span></Link></p>
            </div>

            <div className='field'>
              <div className='field-inner'>
                <label>Email</label>
                <input type='email' name='email' required value={email} onChange={(event) => setEmail(event.target.value)}></input>
                {!email && <div className="form-error">(Esse campo é obrigatório)</div>}
                <label>Senha</label>
                <input type='password' name='password' required minLength='8' value={password} onChange={(event) => setPassword(event.target.value)}></input>
                {!password && <div className="form-error">(Esse campo é obrigatório)</div>}
              </div>
                            
              <div className='agreement'>
                <div className='forget-password'>
                  <Link to='/Reset'>Esqueceu a senha?</Link>
                </div>
                <div className='btn'>
                  <button type='submit'>Entrar</button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </section>
    </>
  )
}
