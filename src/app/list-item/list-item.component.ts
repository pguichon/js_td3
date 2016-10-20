import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent implements OnInit {
  @Output() personneSelected = new EventEmitter();

  @Input() personnes: Array<any>;

  constructor() { }

  ngOnInit() {

  }

  selectionner(personne){
    this.personneSelected.emit(personne);
  }
}
