import { Component, Input, Output } from '@angular/core';
import { TransacoesService } from '../transacoes.service';
import { Transacoes } from '../transacoes';

@Component({
  selector: 'app-form-transacoes',
  templateUrl: './form-transacoes.component.html',
  styleUrl: './form-transacoes.component.scss'
})
export class FormTransacoesComponent {

  constructor(private transacoesService: TransacoesService) { }

  @Output()
  categoria: string = '';

  @Input()
  transacao:Transacoes = new Transacoes();
  
}
