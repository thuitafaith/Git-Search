import { Component, OnInit } from '@angular/core';
import { GitSearchService } from '../git-search.service'
@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  providers: [GitSearchService],
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent implements OnInit {

  constructor(public gitsearch: GitSearchService) { }
  title = 'Welcome to Github Search';

  doSearch(term: string) {
    this.gitsearch.results = []
    this.gitsearch.result_one = []
    this.gitsearch.search(term)
    return false;
  }

  ngOnInit() {
  }
}
