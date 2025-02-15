import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TransactionsRoutingModule } from './transactions-routing.module';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { TransactionAddComponent } from './pages/transaction-add/transaction-add.component';

@NgModule({
  declarations: [HomePageComponent, TransactionAddComponent],
  imports: [CommonModule, TransactionsRoutingModule],
})
export class TransactionsModule {}
