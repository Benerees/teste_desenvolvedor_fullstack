export class userInvalidCredentials extends Error{
    public name = 'UserInvalidCredentials'
    public statusCode: number
    constructor(){
        super("Invalid Credentials")
        this.statusCode = 401
    }
}