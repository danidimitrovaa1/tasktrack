import { Component } from '@angular/core';
import { Margins } from '../../components/layout/margins/margins';
import { PageHeader } from '../../components/layout/page-header/page-header';

@Component({
  imports: [Margins, PageHeader],
  selector: 'app-calendar',
  styleUrl: './calendar.css',
  templateUrl: './calendar.html',
})
export class Calendar {
  title = 'Calendar';
}
