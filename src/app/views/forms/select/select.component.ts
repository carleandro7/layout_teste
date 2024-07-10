import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BaseService, DocsExampleComponent, TabelaComponent } from '@docs-components/public-api';
import { RowComponent, ColComponent, TextColorDirective, CardComponent, CardHeaderComponent, CardBodyComponent, FormSelectDirective } from '@coreui/angular';

@Component({
    selector: 'app-select',
    templateUrl: './select.component.html',
    styleUrls: ['./select.component.scss'],
    standalone: true,
    imports: [TabelaComponent,RowComponent, ColComponent, TextColorDirective, CardComponent, CardHeaderComponent, CardBodyComponent, DocsExampleComponent, FormSelectDirective, ReactiveFormsModule]
})
export class SelectComponent {

  constructor(protected BaseService: BaseService) { }

}
