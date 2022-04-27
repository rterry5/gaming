import { Component, Input, OnInit } from '@angular/core';
import { GamesService } from 'src/app/services/games.service';

@Component({
  selector: 'app-more-news',
  templateUrl: './more-news.component.html',
  styleUrls: ['./more-news.component.scss']
})
export class MoreNewsComponent implements OnInit {

  moreArticles: any;

  constructor(private gamesService: GamesService) { }

  ngOnInit(): void {
    this.getAllNewsArticles();
  }

  getAllNewsArticles() {
    this.gamesService.getAllNewsArticles().subscribe(data => {
      this.moreArticles = data.results;
      console.log(data)
    })
  }

}
