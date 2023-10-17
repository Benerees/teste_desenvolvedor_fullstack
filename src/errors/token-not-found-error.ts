export class tokenNotFoundError extends Error{
    public name = 'tokenNotFoundError'
    public statusCode: number
    constructor(){
        super('Token not found')
        this.statusCode = 404
    }
    
}