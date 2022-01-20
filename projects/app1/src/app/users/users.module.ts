import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';
import { UsersRoutingModule } from './users-routing.module';
import { TitleComponent } from './title/title.component';

@NgModule({
  declarations: [UsersComponent, TitleComponent],
  imports: [CommonModule, UsersRoutingModule],
  exports: [TitleComponent],
})
export class UsersModule {}
