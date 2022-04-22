import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { GamesService } from 'src/app/services/games.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  @Input()
  searchResults: any;

  searchTerm: string;

  constructor(private gamesService: GamesService) { }

  ngOnInit(): void {
  }

  searchGames() {
    this.gamesService.searchGames(this.searchTerm).subscribe(data => {
      this.searchResults = data.results;
      console.log(this.searchResults)
    })
  }


}
