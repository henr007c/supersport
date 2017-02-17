import { Component, OnInit, AfterViewInit } from '@angular/core';
import { IProduct } from './product';
import { DataService } from '../shared/services/data.service';

@Component({
	selector: 'product-list',
	moduleId: module.id,
	templateUrl: 'product-list.component.html'
})

export class ProductListComponent implements OnInit {

	products: IProduct[];
	pageTitle: string = "POPULAR PRODUCTS";

	constructor(private _dataService: DataService) {

	}

	ngAfterViewInit() {
		jQuery('.slider').slider({
	  		height: 650
	  	});
	  	
	  	// Pause slider
		jQuery('.slider').slider('pause');
		// Start slider
		jQuery('.slider').slider('start');
		// Next slide
		jQuery('.slider').slider('next');
		// Previous slide
		jQuery('.slider').slider('prev');	
	}

	ngOnInit() {
		this.products = this._dataService.getData();
	}

	likesCounter(product:IProduct): void {
		product.likes++;
	}

}