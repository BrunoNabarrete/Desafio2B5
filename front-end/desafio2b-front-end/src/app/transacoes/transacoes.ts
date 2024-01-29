export class Transacoes {
  id?: number|undefined;
  categoria?: string;
  data?: string;
  valor?: number;

  constructor(id?: number|undefined, categoria?: string, data?: string, valor?: number) {
    this.id = id;
    this.categoria = categoria;
    this.data = data;
    this.valor = valor;
  }
}