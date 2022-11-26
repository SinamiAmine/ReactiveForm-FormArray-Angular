import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ContactsComponent } from './contacts/contacts.component';
import { UsersRoutingModule } from './users-routing.module';

@NgModule({
  declarations: [ContactsComponent],
  imports: [CommonModule, UsersRoutingModule, FormsModule, ReactiveFormsModule],
  exports: [ContactsComponent],
})
export class UsersModule {}
