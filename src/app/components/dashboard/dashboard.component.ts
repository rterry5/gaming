import { CardComponent } from './../card/card.component';
import { GamesService } from './../../services/games.service';
import { Component, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  @ViewChild(CardComponent) cardComponent: CardComponent;

  games: [];

  constructor() { }

  ngOnInit(): void {

  }

  ngAfterViewInit() {
    this.games = this.cardComponent.game;
  }
}
