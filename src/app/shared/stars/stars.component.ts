import { Component, Input, Output, OnChanges, EventEmitter } from '@angular/core';

@Component({
	selector: 'stars',
	moduleId: module.id,
	templateUrl: 'stars.component.html',
	styles: [`
	.star-rating {
            font-size: 0;
            white-space: nowrap;
            display: inline-block;
            width: 150px;
            height: 30px;
            overflow: hidden;
            position: relative;
            background: url('data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IiB3aWR0aD0iMjBweCIgaGVpZ2h0PSIyMHB4IiB2aWV3Qm94PSIwIDAgMjAgMjAiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDIwIDIwIiB4bWw6c3BhY2U9InByZXNlcnZlIj48cG9seWdvbiBmaWxsPSIjREREREREIiBwb2ludHM9IjEwLDAgMTMuMDksNi41ODMgMjAsNy42MzkgMTUsMTIuNzY0IDE2LjE4LDIwIDEwLDE2LjU4MyAzLjgyLDIwIDUsMTIuNzY0IDAsNy42MzkgNi45MSw2LjU4MyAiLz48L3N2Zz4=');
            background-size: contain;
        }
        .crop { overflow: hidden; }
        div { cursor: pointer;}
    `]
})

export class StarsComponent implements OnChanges {

	@Input() rating: number;
	starWidth: number;

	@Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>();

	onClick() :void {
		this.ratingClicked.emit(`test ${this.rating}`);
	}

	ngOnChanges(): void {
		this.starWidth = 30 * this.rating;
	}

}