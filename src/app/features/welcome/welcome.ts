import { Component } from '@angular/core';
import { Margins } from '../../components/layout/margins/margins';

@Component({
  imports: [Margins],
  selector: 'app-welcome',
  styleUrl: './welcome.css',
  templateUrl: './welcome.html',
})
export class Welcome {}
