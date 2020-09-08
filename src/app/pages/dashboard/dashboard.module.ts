import { NgModule } from '@angular/core';
import { NbCardModule, NbIconModule } from '@nebular/theme';
import { RouterModule } from '@angular/router';
import { DataTablesModule } from 'angular-datatables';

import { ThemeModule } from '../../@theme/theme.module';
import { DashboardComponent } from './dashboard.component';

@NgModule({
  imports: [
    NbCardModule,
    ThemeModule,
    NbIconModule,
    RouterModule,
    DataTablesModule
  ],
  declarations: [
    DashboardComponent,
  ],
})
export class DashboardModule { }
