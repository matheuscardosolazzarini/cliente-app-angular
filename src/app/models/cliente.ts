import { Pedido } from "./pedido";


export interface Cliente {
    id: number;
    nome: string;
    email: string;
    telefone?: string;
    cpf: string;
    dataNascimento?: Date;
    pedidos: Pedido[]
}