import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  @Input() input: string

  @Output() search = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }



}
