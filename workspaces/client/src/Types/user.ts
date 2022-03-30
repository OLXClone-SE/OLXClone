import internal from "stream";

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