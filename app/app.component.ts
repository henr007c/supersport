import { Component,AfterViewInit } from '@angular/core';

@Component({
  	selector: 'my-app',
  	template: `
  		<header></header>
  		<router-outlet></router-outlet>
  		<footer></footer>
  	`,
})

export class AppComponent  { 

	name = 'Henrik'; 

	ngAfterViewInit() {
		jQuery(".button-collapse").sideNav();
	}
	

}