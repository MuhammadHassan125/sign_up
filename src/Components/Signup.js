import React, { useState } from 'react';
import "./signup.css";
import { Link } from 'react-router-dom';

export default function Signup() {
  const [email, setEmail] = useState("");
  const [againEmail, setAgainEmail] = useState("");
  const [password, setPassword] = useState("");
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [formError, setFormError] = useState("");

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (!email) {
      setFormError("Esse campo é obrigatório");
    } else if (email !== againEmail) {
      setFormError("(Esse campo é obrigatório)");
    } else if (!password) {
      setFormError("Esse campo é obrigatório");
    } else if (!acceptedTerms) {
      setFormError("(Esse campo é obrigatório)");
    } else {
      // Submit the form
      console.log("Form submitted");
    }
  };

  return (
    <>
      <section className='section'>
        <div className='container'>
          <div className='logo'>
            <img src="/images/logo.png" alt='logo'></img>
          </div>

          <div className='text_under-logo'>
            <h1>Criar nova conta</h1>
            <p>Ou <Link to='/Login'><span>entrar na sua conta existente</span></Link></p>
          </div>

          <div className='field'>
            <form onSubmit={handleFormSubmit}>
              {/* {formError && <div className="form-error">{formError}</div>} */}
              <div className='field-inner'>
                <div className='center-div'>
                  <label>Email</label>
                  <input type='text' name='email' value={email} onChange={(event) => setEmail(event.target.value)}></input>
                  {!email && <div className="form-error">(O e-mail deve ser válido)</div>}

                  <label>Repetir e-mail</label>
                  <input type='text' name='again_email' value={againEmail} onChange={(event) => setAgainEmail(event.target.value)}></input>
                  {email && againEmail && email !== againEmail && <div className="form-error">(Os dois e-mails devem ser iguais.Esse campo é obrigatório)</div>}

                  <label>Senha</label>
                  <input type='password' name='password' value={password} onChange={(event) => setPassword(event.target.value)}></input>
                  {!password && <div className="form-error">(Esse campo é obrigatório)</div>}
                </div>

                <div className='agreement'>
                  <div className='checkbox'>
                    <input type='checkbox' value='yes' checked={acceptedTerms} onChange={() => setAcceptedTerms(!acceptedTerms)} />
                    
                  </div>
                  <div className='txt'>
                    <p>Eu li e aceito os <Link to='https://kiwify.com.br/termos-de-uso' target={'_blank'}>termos de uso,</Link> <Link to='https://kiwify.com.br/termos-de-uso' target={'_blank'}>termos de licença de uso de software,</Link> <Link to='https://kiwify.com.br/termos-de-uso' target={'_blank'}>política de conteúdo da Kiwify</Link></p>
                  </div>
                  {formError && <div className="form-error">{formError}</div>}

                  <div className='btn-reset'>
                    <button type='submit'>Criar conta</button>
                  </div>

                </div>
              </div>
            </form>
          </div>
        </div>

      </section>
    </>
  );
}