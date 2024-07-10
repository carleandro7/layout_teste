import { Component, Input } from '@angular/core';
import { ButtonModule, TableModule } from '@coreui/angular';
import { IconModule } from '@coreui/icons-angular';

@Component({
  selector: 'app-tabela',
  standalone: true,
  imports: [TableModule, ButtonModule, IconModule],
  templateUrl: './tabela.component.html',
  styleUrl: './tabela.component.scss',
  providers:[]
})
export class TabelaComponent {

  @Input() dados: any[] = [];
  @Input() colunas: string[] = [];

  editar(item){
    window.alert('Editar:\n' + JSON.stringify(item))
  }

  excluir(item){
    window.alert('Excluir:\n' + JSON.stringify(item))
  }

}
