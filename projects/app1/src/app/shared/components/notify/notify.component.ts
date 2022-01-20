import { Component, Inject, OnInit } from '@angular/core';
import { MAT_SNACK_BAR_DATA } from '@angular/material/snack-bar';
@Component({
  selector: 'app-notify',
  template: `<span class="notify-bar md-light" style="font-size: 18px">
    <div class="text-center">
      {{ data }}
    </div>
  </span>`,
  styleUrls: ['./notify.component.scss'],
})
export class NotifyComponent implements OnInit {
  constructor(@Inject(MAT_SNACK_BAR_DATA) public data: string) {}

  ngOnInit(): void {}
}
