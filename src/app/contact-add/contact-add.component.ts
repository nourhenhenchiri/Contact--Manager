
import{ Component, Input, Output, EventEmitter } from'@angular/core';
import{ Contact } from'../models/contact';
import { Routes, RouterModule } from '@angular/router'
import { ContactListComponent } from '../contact-list/contact-list.component';
@Component({
  selector: 'app-contact-add',
  templateUrl: './contact-add.component.html',
  styleUrls: ['./contact-add.component.css']
})
export class ContactAddComponent {
  @Input() contact!: Contact;

}
