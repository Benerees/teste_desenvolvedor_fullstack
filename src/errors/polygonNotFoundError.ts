export class PolygonNotFoundError extends Error{
    public name = 'PolygonNotFoundError'
    public statusCode:number
    constructor(){
        super("Polygon not found")
        this.statusCode = 404
    }
}