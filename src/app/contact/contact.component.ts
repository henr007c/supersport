import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

class Contact {
	name: string;
	email: string;
	message: string;
}

@Component({
	selector: 'contact',
	moduleId: module.id,
	templateUrl: 'contact.component.html'
})

export class ContactComponent implements OnInit {

	model:Contact = new Contact();

	ngOnInit() {
		
	}

	register(form:NgForm, event:Event) {
		event.preventDefault();

		alert('All ok');
	}

}