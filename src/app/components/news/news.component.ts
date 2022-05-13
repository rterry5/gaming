import { Component, OnInit } from '@angular/core';
import { GamesService } from 'src/app/services/games.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

  articles: any;

  constructor(private gamesService: GamesService) { }

  ngOnInit(): void {
    this.getNewsArticle();
  }

  getNewsArticle() {
    this.gamesService.getNewsArticle().subscribe(data => {
      this.articles = data.results;
    })
  }

}
