import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {
  personne: any;
  personnes: any;
  constructor() { }

  ngOnInit() {
    this.personnes = [
      {
        nom: 'toto',
        prenom: 'truc',
        dateNaissance: '12/02/1982',
        diplomes: [
          'bac',
          'licence'
        ]
      },
      {
        nom: 'toto1',
        prenom: 'truc',
        dateNaissance: '12/02/1982',
        diplomes: [
          'bac',
          'licence'
        ]
      },
      {
        nom: 'toto2',
        prenom: 'truc',
        dateNaissance: '12/02/1982',
        diplomes: [
          'bac',
          'licence'
        ]
      },
    ]
  }

  afficherPersonneSelected(personne){
    this.personne = personne;

  }
}
