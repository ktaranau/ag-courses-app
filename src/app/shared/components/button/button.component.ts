import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {

  @Output() buttonClicked = new EventEmitter<string>()

  onClick() {
    this.buttonClicked.emit("qwe")
  } 

  @Input() isEditButton:boolean;

  @Input() isDeleteButton:boolean;

  faPen = faPen;

  faTrash= faTrash;

  @Input() buttonText: string;
  
  constructor() { }

  ngOnInit(): void {
  }

}
