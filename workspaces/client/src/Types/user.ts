export interface verifyUser {
    mailid: FormDataEntryValue | null,
    action: string
}

export interface UserProfile {
    mailid: string,
    fname: string,
    lname: string,
    phone: string
}
export interface userMail {
    mailid: FormDataEntryValue | null,
}

export interface UserProduct {
    phone: string,
    mailid: string,
    productname: string,
    category: string,
    price: number,
    path: string,
    description: string,
    approved: boolean,
}