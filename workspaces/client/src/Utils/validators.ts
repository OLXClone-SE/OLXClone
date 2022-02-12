import ValidationRegex from "./ValidationRegex";

export const validateEmail = (email: any) => {
    return ValidationRegex.emailRegex.test(email);
}

export const validatePhoneNumber = (phone: any) => {
    return ValidationRegex.phoneRegex.test(phone.toLowerCase());
}

export const validatePassword = (password: any) => {
    return ValidationRegex.passwordRegex.test(password)
}