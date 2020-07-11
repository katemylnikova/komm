import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {DialogComponent} from '../dialog/dialog.component';
import {Router} from '@angular/router';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
  constructor(public router: Router) { }

  ngOnInit(): void {
  }

  public onNavigateToAuftragSenden(): void {
    this.router.navigate(['/auftrag-senden']);
  }

  public onNavigateToLeistungsUeberblick(): void {
    this.router.navigate(['/leistungsueberblick']);
  }
  public toTermin(): void {
    this.router.navigate(['/termin']);
  }
  public toMitarbeiter(): void {
    this.router.navigate(['/mitarbeiter']);
  }
}
