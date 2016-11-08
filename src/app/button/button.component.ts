import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  @Input() text: string;
  @Input() type: string;

  @Output() mon_click = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  truc(){
    this.mon_click.emit("j'ai ete clique");
  }
}
