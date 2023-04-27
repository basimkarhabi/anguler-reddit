import { Component, HostBinding, OnInit, Input } from '@angular/core';
import { SemanticDiagnosticsBuilderProgram } from 'typescript';
import { Article } from './articale.model'

@Component({
  selector: 'app-articale',
  templateUrl: './articale.component.html',
  styleUrls: ['./articale.component.css']
})
export class ArticaleComponent implements OnInit {
  @HostBinding('attr.class') cssClass = 'row';
  @Input() article: Article;

  constructor() {

    this.article = new Article(
      'Angular',
      'http://angular.io',
      10
    )
  }

  voteUp(): boolean {
    this.article.voteUp()
    return false
  }
  voteDown(): boolean {
    this.article.voteDown()
    return false
  }


  ngOnInit() { }

}
