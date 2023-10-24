export interface IUser{
  "fullName": string,
  "projects": string[],
  "id": string,
  "userName": string,
  "normalizedUserName": string,
  "email": string,
  "normalizedEmail": string,
  "emailConfirmed": true,
  "passwordHash": string,
  "securityStamp": string,
  "concurrencyStamp": string,
  "phoneNumber": number,
  "phoneNumberConfirmed": boolean,
  "twoFactorEnabled": boolean,
  "lockoutEnd": string,
  "lockoutEnabled": boolean,
  "accessFailedCount": number
}
export interface IUserLogin{
  user:IUser,
  token:string
}
export interface IDecodedData{
  Permission: string,
  Roles: string,
  aud: string,
  exp: string,
  jti: string,
  sub: string,
}
