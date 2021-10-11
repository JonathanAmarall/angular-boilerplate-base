import { Component, OnInit, Injector } from '@angular/core';
import { AppComponentBase } from '../shared/components/app-component-base.component';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent extends AppComponentBase implements OnInit {
  constructor(injector: Injector) {
    super(injector);
  }

  ngOnInit(): void {
    this._messageService
      .confirm('Atenção!', 'Seja bem-vindo!')
      .afterClosed()
      .subscribe((res) => console.log(res));
  }
}
