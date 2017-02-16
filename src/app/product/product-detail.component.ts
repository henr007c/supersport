import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { IProduct } from './product';
import { DataService } from '../shared/services/data.service';

@Component({
	selector: 'product-detail',
	moduleId: module.id,
	templateUrl: 'product-detail.component.html'
})

export class ProductDetailComponent {

	productid: number;
	product: IProduct;

	constructor(private _route: ActivatedRoute, private _router: Router, private _dataService: DataService) {

	}

	ngOnInit() {
		this.productid = +this._route.snapshot.params['id'];
		this.product = this._dataService.getDataById(this.productid);
	}

	ngAfterViewInit() {
		jQuery('ul.tabs').tabs();
	}

}