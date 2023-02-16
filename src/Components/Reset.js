import React from 'react'
import "./signup.css"

export default function Signup() {
  
   
    return (
        <>
            <section className='section'>
            <div className='container'>
                <div className='logo'>
                    <img src="/images/logo.png" alt='logo'></img>
                </div>

                <div className='reset-password'>
                   <div className='Redefinir'> <h1>Redefinir a senha</h1></div> 
                    <div className='reset-ps'><p> Você receberá um e-mail com instruções para redefinir a senha</p></div>
                </div>

                        <div className='field'>
                        <form >

                            <div className='field-inner'>
                            <label>Email</label>
                            <input type='text' name='email'></input>
                            

                          
                            </div>
                            
                            <div className='agreement'>
                                  
                                <div className='btn-new'>
                                    <button type='submit'>Redefinir senha </button>
                                </div>

                            </div>
                            </form>
                        </div>
                         </div>

                         </section>
                        </>
                         )
}
