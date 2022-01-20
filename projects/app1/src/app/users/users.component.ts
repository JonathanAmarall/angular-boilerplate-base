import { Component, OnInit, Injector, ViewChild } from '@angular/core';
import { TitleComponent } from './title/title.component';
import { AppComponentBase } from '../shared/components/app-component-base.component';
import { Subject } from 'rxjs';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent extends AppComponentBase implements OnInit {
  @ViewChild('appTitle') appTitle: TitleComponent;

  constructor(injector: Injector) {
    super(injector);
  }

  title: string = 'Usuários';

  ngOnInit(): void {
    this._notifyService.success({
      msg: 'Seja bem vindo',
    });
  }

  recebiEvento(e) {
    console.log(e);
  }
}
