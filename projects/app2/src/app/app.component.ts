import { NotifyService } from './../../../app1/src/app/shared/services/notify.service';
import { AppComponentBase } from './../../../app1/src/app/shared/components/app-component-base.component';
import { Component, Injector, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent extends AppComponentBase implements OnInit {
  title = 'app2';
  /**
   *
   */
  constructor(injector: Injector) {
    super(injector);
  }

  ngOnInit(): void {
    this._notifyService.alert({
      msg: 'Olaaaaaaa',
      horizontalPosition: 'start',
      verticalPosition: 'bottom',
    });
  }
}
