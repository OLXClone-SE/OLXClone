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