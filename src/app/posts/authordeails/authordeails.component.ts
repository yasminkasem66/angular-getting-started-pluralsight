import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-authordeails',
  templateUrl: './authordeails.component.html',
  styleUrls: ['./authordeails.component.scss'],
})
export class AuthordeailsComponent implements OnInit {
  @Input() author!: string;
  @Output() outputEvent2 = new EventEmitter<string>();
  constructor() {}

  ngOnInit(): void {}

  emitVariable() {    
    this.outputEvent2.emit('jasmin')
  }
}
