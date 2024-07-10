import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IconDirective } from '@coreui/icons-angular';
import { BaseService, DocsExampleComponent, TabelaComponent } from '@docs-components/public-api';
import {
  ButtonDirective,
  CardBodyComponent,
  CardComponent,
  CardHeaderComponent,
  ColComponent,
  RowComponent,
  TextColorDirective
} from '@coreui/angular';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  standalone: true,
  imports: [JsonPipe,TabelaComponent, RowComponent, ColComponent, TextColorDirective, CardComponent, CardHeaderComponent, CardBodyComponent, DocsExampleComponent, ButtonDirective, IconDirective, RouterLink],
})
export class ButtonsComponent {
  constructor(protected BaseService: BaseService){}

}
