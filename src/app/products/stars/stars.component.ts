import { Component, Input, Output, EventEmitter, OnChanges } from "@angular/core";
@Component({
  selector: 'pm-star',
  templateUrl: './starts.component.html',
  styleUrls:['./starts.component.css']
})
export class StartsComponent implements OnChanges{
  
    @Input() rating: number;
    starWidth: number;
    @Output() ratingClicked: EventEmitter<string> =
            new EventEmitter<string>();

    ngOnChanges(): void {
        this.starWidth = this.rating * 86 / 5;
    }

    onClick(): void {
        this.ratingClicked.emit(`The rating ${this.rating} was clicked!`);
    }
}