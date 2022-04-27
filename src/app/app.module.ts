import { GameResolverService } from './routing/resolvers/game-resolver.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { SearchComponent } from './components/search/search.component';
import { FormsModule } from '@angular/forms';
import { CardComponent } from './components/card/card.component';
import { GameDetailsComponent } from './components/game-details/game-details.component';
import { GamesService } from './services/games.service';
import { NewsComponent } from './components/news/news.component';
import { DatePipe } from '@angular/common';
import { NewReleasesComponent } from './components/new-releases/new-releases.component';
import { MoreNewsComponent } from './components/pages/more-news/more-news.component';
import { YourGamesComponent } from './components/your-games/your-games.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    NavigationComponent,
    SearchComponent,
    CardComponent,
    GameDetailsComponent,
    NewsComponent,
    NewReleasesComponent,
    MoreNewsComponent,
    YourGamesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
