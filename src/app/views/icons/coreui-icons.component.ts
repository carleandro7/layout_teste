import { Component, NgModule, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { IconDirective, IconSetService } from '@coreui/icons-angular';
import { brandSet, flagSet, freeSet } from '@coreui/icons';
import { ButtonModule, CardBodyComponent, CardComponent, CardHeaderComponent, ColComponent, FormModule, RowComponent } from '@coreui/angular';
import { DocsLinkComponent } from '@docs-components/public-api';
import { FormsModule, NgModel } from '@angular/forms';

@Component({
  templateUrl: 'coreui-icons.component.html',
  providers: [IconSetService],
  standalone: true,
  imports: [
    CardComponent,
    CardHeaderComponent,
    CardBodyComponent,
    ColComponent,
    DocsLinkComponent,
    IconDirective,
    RowComponent,
    FormModule,
    FormsModule,
    ButtonModule
  ]
})
export class CoreUIIconsComponent {

  dataInicio: string = '';
  dataFim: string = '';
  tipoRelatorio: string = 'financeiro';
  relatorioGerado: boolean = false;
  conteudoRelatorio: string = '';

  gerarRelatorio() {
    // Simulação de geração de relatório. Aqui você pode adicionar lógica para gerar e obter o relatório real.
    this.relatorioGerado = true;
    this.conteudoRelatorio = `Relatório ${this.tipoRelatorio.toUpperCase()} gerado com sucesso para o período de ${this.dataInicio} a ${this.dataFim}.`;
  }
}
