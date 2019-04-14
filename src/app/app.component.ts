import { Component } from '@angular/core';
import { EstatisticasService } from './estatisticas.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  /* VARIÁVEIS */
  
  nome = null;
  sexo = null;
  idade = null;
  cidade = null;
  
  /* MÉTODOS */

  constructor(public estatistica: EstatisticasService){

  }
  
  salvar(forms){
    this.estatistica.salvar(this.nome,this.sexo,this.idade,this.cidade)
    forms.reset()
  }
}
