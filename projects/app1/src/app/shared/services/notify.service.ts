import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NotifyComponent } from '../components/notify/notify.component';

interface Notify {
  msg: string;
  horizontalPosition?: 'start' | 'center' | 'end' | 'left' | 'right';
  verticalPosition?: 'top' | 'bottom';
}

@Injectable({
  providedIn: 'root',
})
export class NotifyService {
  constructor(private _snackBar: MatSnackBar) {}
  private title: string;
  private body: string;

  success({
    msg,
    horizontalPosition = 'right',
    verticalPosition = 'bottom',
  }: Notify) {
    this._snackBar.openFromComponent(NotifyComponent, {
      duration: 5000,
      data: msg,
      panelClass: ['bg-success'],
      horizontalPosition: horizontalPosition,
      verticalPosition: verticalPosition,
    });
  }

  alert(notify: Notify) {
    this._snackBar.openFromComponent(NotifyComponent, {
      duration: 3000,
      data: notify.msg,
      panelClass: ['bg-danger'],
      horizontalPosition: notify.horizontalPosition,
      verticalPosition: notify.verticalPosition,
    });
  }

  info(notify: Notify) {
    this._snackBar.openFromComponent(NotifyComponent, {
      duration: 3000,
      data: notify.msg,
      panelClass: ['bg-info'],
      horizontalPosition: notify.horizontalPosition,
      verticalPosition: notify.verticalPosition,
    });
  }

  warn(notify: Notify) {
    this._snackBar.openFromComponent(NotifyComponent, {
      duration: 3000,
      data: notify.msg,
      panelClass: ['bg-warning'],
      horizontalPosition: notify.horizontalPosition,
      verticalPosition: notify.verticalPosition,
    });
  }
}
