import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent }  from './app.component';
import { HeaderComponent } from './header/header.component';
import { ProductListComponent } from './product/product-list.component';
import { ProductDetailComponent } from './product/product-detail.component';
import { ContactComponent } from './contact/contact.component';
import { LikesComponent } from './shared/likes/likes.component';
import { StarsComponent} from './shared/stars/stars.component';
import { FooterComponent } from './footer/footer.component';

import { DataService } from './shared/services/data.service';

@NgModule({
  	imports: [ 
  		BrowserModule, 
  		RouterModule.forRoot([
			{ path: 'home', component: ProductListComponent },
			{ path: 'contact', component: ContactComponent },
			{ path: 'product/:id', component: ProductDetailComponent },
			{ path: '', redirectTo: 'home', pathMatch: 'full' },
			{ path: '**', redirectTo: 'home', pathMatch: 'full' }
  		]),
  		FormsModule
  	],
  	declarations: [ 
  		AppComponent, 
		HeaderComponent, 
		ProductListComponent,
		ProductDetailComponent,
		ContactComponent,
		LikesComponent,
		StarsComponent, 
		FooterComponent 
	],
	providers: [ DataService ],
  	bootstrap: [ AppComponent ]
})

export class AppModule { }
