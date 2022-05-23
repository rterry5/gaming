import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-favorites-card',
  templateUrl: './favorites-card.component.html',
  styleUrls: ['./favorites-card.component.scss']
})
export class FavoritesCardComponent implements OnInit {

  @Input()
  gameDetails: any = [];

  constructor() { }

  ngOnInit(): void {
    console.log(this.gameDetails)
  }

}
