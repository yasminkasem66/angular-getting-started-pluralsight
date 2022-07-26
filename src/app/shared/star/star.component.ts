import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.scss']
})
export class StarComponent implements OnChanges  {

  @Input() rating = 0;
  cropWidth = 100;
  @Output() ratingClicked: EventEmitter<string> =
    new EventEmitter<string>();

  ngOnChanges(): void {
    this.cropWidth = this.rating * 100/ 5;
  }

  onClick(): void {
    this.ratingClicked.emit(`The rating ${this.rating} was clicked!`);
  }
}
