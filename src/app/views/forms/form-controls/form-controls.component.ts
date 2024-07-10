import { Component } from '@angular/core';
import { NgStyle } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { DocsExampleComponent } from '@docs-components/public-api';
import { RowComponent, ColComponent, TextColorDirective, CardComponent, CardHeaderComponent, CardBodyComponent, FormDirective, FormLabelDirective, FormControlDirective, ButtonDirective } from '@coreui/angular';
import { Candidato } from 'src/app/novos/base.service';

@Component({
    selector: 'app-form-controls',
    templateUrl: './form-controls.component.html',
    styleUrls: ['./form-controls.component.scss'],
    standalone: true,
    imports: [RowComponent, ColComponent, TextColorDirective, CardComponent, CardHeaderComponent, CardBodyComponent, DocsExampleComponent, ReactiveFormsModule, FormsModule, FormDirective, FormLabelDirective, FormControlDirective, ButtonDirective, NgStyle]
})
export class FormControlsComponent {

  public favoriteColor = '#26ab3c';

  constructor() { }

  candidato: Candidato = {
    nome: '',
    idade: '',
    email: '',
    telefone: '',
    endereco: {
      rua: '',
      numero: 0,
      cidade: '',
      estado: '',
      cep: ''
    },
    curso: '',
    status: 'Inscrito'
  };

  onSubmit() {
    window.alert('Cadastrado:\n'+ JSON.stringify(this.candidato));
  }

}
