"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreatePoligono = void 0;
class CreatePoligono {
    execute(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const corpo = req.body;
            if (Object.keys(corpo).length != 2) {
                const response = {
                    status: '400',
                    message: 'Formato da requisição inválido!'
                };
                return res.status(200).json(response);
            }
            if (corpo.email == 'autenticando@spotsat.com.br' && corpo.senha == 'Autentica123') {
                const response = {
                    status: '200',
                    message: 'Autenticado com sucesso!'
                };
                return res.status(200).json(response);
            }
            else {
                const response = {
                    status: '401',
                    message: 'Falha ao autenticar!'
                };
                return res.status(401).json(response);
            }
            return;
        });
    }
}
exports.CreatePoligono = CreatePoligono;
