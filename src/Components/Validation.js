const Validation=(values) =>{
    let errors= {}

    if(!values.email){
        errors.name = "Esse campo é obrigatório"
    }

    else if (values.email.lenght <5) {
            errors.name="Esse campo é obrigatório"
    }

    if(!values.password){
        errors.password = "Esse campo é obrigatório"
    }

    else if (values.password.lenght <5) {
            errors.password="Esse campo é obrigatório"
    }

    return errors;
}

export default Validation;