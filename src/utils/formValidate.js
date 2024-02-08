
export const formValidate = (email,password) =>{

    let emailValidate = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
    let passwordValidate = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

    if(!emailValidate){
        return "Email not valid"
    }
    if(!passwordValidate){
        return "8+ chars, 1 lowercase, 1 uppercase, 1 number, 1 special char required."
    }
    return null;
}


