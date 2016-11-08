import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  type: string = 'primary';
  title = 'app works!';
  isClicked: boolean = false;
  text: string;
  changeType() {
    this.type = 'warning';
  }

  mon_bouton_est_clique(data) {
    this.isClicked = true;
    this.text = data;
  }
}
