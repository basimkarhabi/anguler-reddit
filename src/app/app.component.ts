import { Component } from '@angular/core';
import { Article } from './articale/articale.model'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  articles: Article[];

  constructor() {
    this.articles = [
      new Article('Angullar', 'http://angular.io', 3),
      new Article('Fullstack', 'http://fullstack.io', 2),
      new Article('Angullar Homepage', 'http://angular.io', 1)

    ]
  }




  addArticle(title: HTMLInputElement, link: HTMLInputElement): boolean {
    console.log(`Adding srticle title : ${title.value} and link:${link.value}`);
    return false
  }

  //   title = 'angular-reddit';
}
