import { Component, input } from '@angular/core';
import { PageHeaderTitle } from '../../../models/page-header.model';

@Component({
  imports: [],
  selector: 'app-page-header',
  styleUrl: './page-header.css',
  templateUrl: './page-header.html',
})
export class PageHeader {
  // Receives the title from the parent component it's inserted into
  title = input<PageHeaderTitle>();
}
