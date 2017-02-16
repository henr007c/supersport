import { Component, Input, Output, OnChanges, EventEmitter } from '@angular/core';

@Component({
	selector: 'likes',
	moduleId: module.id,
	templateUrl: 'likes.component.html',
	
})

export class LikesComponent implements OnChanges {

	@Input() likes: number;
	
	onClick() :void {
		
	}

	ngOnChanges(): void {
		
	}

}