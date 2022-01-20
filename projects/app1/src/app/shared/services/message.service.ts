import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { AlertDialogComponent } from '../components/message/alert-dialog/alert-dialog.component';
import { ConfirmDialogComponent } from '../components/message/confirm-dialog/confirm-dialog.component';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  constructor(private _dialog: MatDialog) {}

  confirm(
    title: string,
    body: string,
    labelConfirm: string = 'Confirmar',
    labelCancell: string = 'Cancelar'
  ): MatDialogRef<any> {
    return this._dialog.open(ConfirmDialogComponent, {
      data: {
        title: title,
        body: body,
        labelConfirm: labelConfirm,
        labelCancell: labelCancell,
      },
      height: '800',
      width: '600',
    });
  }

  alert(title: string, body: string): MatDialogRef<any> {
    return this._dialog.open(AlertDialogComponent, {
      data: {
        title: title,
        body: body,
      },
    });
  }
}
