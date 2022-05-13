import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent implements OnInit {

  favorites: any = [];

  constructor() { }

  ngOnInit(): void {
    this.getFavoritesList();
  }

  getFavoritesList() {
    this.favorites = JSON.parse(localStorage.getItem('favorites')!);
    console.log(this.favorites)
  }

}
