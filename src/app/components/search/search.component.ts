import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { GamesService } from 'src/app/services/games.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  @Output()
  termSearched: EventEmitter<any> = new EventEmitter<any>();

  keyword: string;

  constructor() { }

  ngOnInit(): void {
  }

  emitSearchTerm(term: string) {
    this.termSearched.emit(term);
    this.keyword = term;
  }
}
