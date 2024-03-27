export function isEmail(value){
    const sample=/^([^\s@]+@[^\s@]+\.[^\s@]{1,2})/
    return sample.test(value);
}

export function isValidPassword(value){
    const sample=/^(?=.*[a-zA-Z0-9])(?=.{8,})/
    return sample.test(value)
}

export function isPasswordConfirmed(password, confirmedPassowrd){
    return password===confirmedPassowrd
}

export function isValidUsername(value){
    const sample=/^[A-Z][a-zA-Z0-9]{4,13}/
    return sample.test(value)
}