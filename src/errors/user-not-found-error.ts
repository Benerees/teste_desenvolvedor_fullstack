export class userNotFoundError extends Error{
    public name = 'UserNotFoundError'
    public statusCode: number
    constructor(){
        super('User not found')
        this.statusCode = 404
    }
}