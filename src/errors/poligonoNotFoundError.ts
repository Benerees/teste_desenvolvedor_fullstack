export class PoligonoNotFoundError extends Error{
    public name = 'PoligonoNotFoundError'
    public statusCode:number
    constructor(){
        super("Poligono not found")
        this.statusCode = 404
    }
}