export interface IUsers {
    firstName: String,
    lastName: String,
    email: String,
    number: Number,
    password: String,
    role: 'user' | 'admin'
}