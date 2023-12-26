import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { SearchHomePageState } from './state/reducer';
import { selectPostIds } from './state/selector';

@Component({
  selector: 'app-search-home',
  templateUrl: './search-home.page.html',
  styleUrls: ['./search-home.page.scss'],
})
export class SearchHomePage implements OnInit {

  postIds$ = this.searchHomePageStore.select(selectPostIds);

  constructor(
    private searchHomePageStore : Store<SearchHomePageState>
  ) { }

  ngOnInit() {
  }

}