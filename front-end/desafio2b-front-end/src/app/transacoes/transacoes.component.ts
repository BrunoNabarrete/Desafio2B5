import { Component, OnInit } from '@angular/core';
import { TransacoesService } from './transacoes.service';
import { Transacoes } from './transacoes';

@Component({
  selector: 'app-transacoes',
  templateUrl: './transacoes.component.html',
  styleUrl: './transacoes.component.scss'
})
export class TransacoesComponent implements OnInit{
  
    constructor( private transacoesService: TransacoesService) { }
  
    ngOnInit(): void {
      this.consultarTransacoes();
      console.log(this.transacaoSelecionada)
      this.transacao.data = new Date().toISOString().slice(0, 10);
    }

    listaTransacoes: Transacoes[] = [];
    transacaoSelecionada: Transacoes = new Transacoes();
    transacao: Transacoes = new Transacoes();
    categoriaSelecionada: string = "";
    totalPorCategoria: number = 0;
    listaDeTransacoes: string = "";

    consultarTransacoes(): void {

      this.transacoesService.recuperarTransacoes().subscribe(
        (response) => {
          console.log(response[0].categoria);
          this.listaTransacoes = response;
          console.log(this.listaTransacoes);
        },
        (error) => {
          console.log(error);
        }
      );
    }

    deletarTransacao(id: number|undefined): void {
      this.transacoesService.deletarTransacao(id!).subscribe(
        (response) => {
          console.log(response);
          this.consultarTransacoes();
        },
        (error) => {
          console.log(error);
        }
      );
    }

    editarTransacao(transacao: Transacoes): void {
      this.transacoesService.editarTransacao(transacao).subscribe(
        (response) => {
          console.log(response);
          this.consultarTransacoes();
          this.transacaoSelecionada = new Transacoes();
        },
        (error) => {
          console.log(error);
        }
      );
    }

    selecionarTransacao(transacao: Transacoes): void {
      this.transacaoSelecionada = transacao;
      console.log(this.transacaoSelecionada)
    }

    adicionarTransacao(transacao: Transacoes): void {
      this.transacoesService.adicionarTransacao(transacao).subscribe(
        (response) => {
          console.log(response);
          this.consultarTransacoes();
          this.transacao = new Transacoes();

        },
        (error) => {
          console.log(error);
        }
      );
    }

    somarPorCategoria(categoria: string): number {
      let soma: number = 0;
      this.categoriaSelecionada = categoria;
      for(let transacao of this.listaTransacoes){
        if(transacao.categoria == categoria){
          soma += transacao.valor!;
        }
      }
      console.log(soma);
      return this.totalPorCategoria = soma;
    }

    adicionarTransacoesEmLote(dados: string): void {
      const transacoesIndividuais = dados.split(',');
      for (let i = 0; i < transacoesIndividuais.length; i += 3) {
        const data = transacoesIndividuais[i];
        const valor = parseFloat(transacoesIndividuais[i + 1]);
        const categoria = transacoesIndividuais[i + 2];
        const novaTransacao: Transacoes = {
          data: data,
          valor: valor,
          categoria: categoria
        };
        this.transacoesService.adicionarTransacao(novaTransacao).subscribe(
          (response) => {
            this.consultarTransacoes();
            this.listaDeTransacoes = "";
            console.log(response);
          },
          (error) => {
            console.log(error);
          }
        );
      }
    }
    
    filtrarPorData(data: string): void {
      this.listaTransacoes = this.listaTransacoes.filter((transacao) => {
        return transacao.data == data;
      });
    }

    limparFiltro(): void {
      this.consultarTransacoes();
    }



}
