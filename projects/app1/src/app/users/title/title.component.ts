import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss'],
})
export class TitleComponent implements OnInit {
  constructor() {}

  @Input() title: string;
  @Output() emitirEvento = new EventEmitter();

  ngOnInit(): void {
    console.log(this.title);
  }

  chamarEvento() {
    this.emitirEvento.emit('Fui clicado!');
  }
}
