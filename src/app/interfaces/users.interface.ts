
export interface IAddress {
    city: String,
    zipCode: Number,
    country: String
}

export interface IUsers {
    firstName: String,
    lastName: String,
    age: Number,
    email: String,
    number: Number,
    password: String,
    role: 'USER' | 'ADMIN' | 'SUPERADMIN',
    address: IAddress
}