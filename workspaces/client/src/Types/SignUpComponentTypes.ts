export interface SignupData {
    mailid: FormDataEntryValue | null,
    password: FormDataEntryValue | null,
    fname: FormDataEntryValue | null,
    lname: FormDataEntryValue | null,
    phone: FormDataEntryValue | null,
    otp?: number
}