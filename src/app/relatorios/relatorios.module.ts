import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from 'primeng/components/common/shared';
import { RelatoriosRoutingModule } from './relatorios-routing.module';
import { RelatorioLancamentosComponent } from './relatorio-lancamentos/relatorio-lancamentos.component';

@NgModule({
  imports: [
    CommonModule,

    SharedModule,
    RelatoriosRoutingModule
  ],
  declarations: [RelatorioLancamentosComponent]
})
export class RelatoriosModule { }
