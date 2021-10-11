import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.scss'],
})
export class ConfirmDialogComponent {
  confirmResult: Subject<boolean>;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<ConfirmDialogComponent>
  ) {}

  clickYes(): void {
    this.confirmResult.next(true);
  }

  clickNo(): void {
    this.confirmResult.next(false);
  }
}
