import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<app-sidenav>
    <router-outlet></router-outlet>
  </app-sidenav>`,
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Frontend';
}
