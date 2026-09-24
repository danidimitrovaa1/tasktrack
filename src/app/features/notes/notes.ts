import { Component } from '@angular/core';
import { Margins } from '../../components/layout/margins/margins';
import { PageHeader } from '../../components/layout/page-header/page-header';
import { SearchBar } from '../../components/search-bar/search-bar';

@Component({
  imports: [Margins, PageHeader, SearchBar],
  selector: 'app-notes',
  styleUrl: './notes.css',
  templateUrl: './notes.html',
})
export class Notes {
  title = 'Notes';
  searchBarPlaceholder = 'notes';
}
