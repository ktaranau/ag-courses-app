import { Component, OnInit, Input } from '@angular/core';
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {

  @Input() isEditButton:boolean;

  faPen = faPen;

  faTrash= faTrash;

  @Input() buttonText: String;
  
  constructor() { }

  ngOnInit(): void {
  }

}
