export class tokenInvalidError extends Error{
    public name = 'TokenInvalidError'
    public statusCode: number
    constructor(){
        super('Invalid Token')
        this.statusCode = 401
    }
    
}