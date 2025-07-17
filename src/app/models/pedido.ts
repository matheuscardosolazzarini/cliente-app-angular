export interface Pedido{
    id: number;
    clienteId: number;
    dataPedido: Date;
    descricao: string;
    valor: number;
}