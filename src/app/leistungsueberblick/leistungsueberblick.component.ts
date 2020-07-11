import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-leistungsueberblick',
  templateUrl: './leistungsueberblick.component.html',
  styleUrls: ['./leistungsueberblick.component.scss']
})
export class LeistungsueberblickComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit(): void {
  }

  public toAuftrag(): void {
    this.router.navigate(['/auftrag-senden'])
  }
}
