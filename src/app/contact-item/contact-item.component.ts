import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Contact } from '../models/contact';

@Component({
  selector: 'app-contact-item',
  templateUrl: './contact-item.component.html',
  styleUrls: ['./contact-item.component.css']
})
export class ContactItemComponent {
  @Input() contact: Contact = {
    id: 1,
    
    firstName: '',
    lastName: '',
    email: '',
    type: 'Friend',
    description: '',
    phone: ''
  };
  @Input() index: number = 0;

  // Declare the deleteEvent as an EventEmitter
  @Output() deleteEvent = new EventEmitter<number>();


  deleteContact(): void {
    let reponse = confirm('Voulez-vous supprimer le contact');
    if (reponse) {
      this.deleteEvent.emit(this.contact.id);
    }
  }
}
