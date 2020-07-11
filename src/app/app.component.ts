import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public showContact = true;
  public showDialog = false;
  title = 'KommAmbulante';
  constructor(public router: Router) {}

  public onNavigateToHomepage(): void {
    this.router.navigate(['/homepage']);
  }

  public onHome(): void {
    this.router.navigate(['/homepage']);
  }

  public toLeistungsueberblick(): void {
    this.router.navigate(['/leistungsueberblick']);
  }

  public toAuftragSenden(): void {
    this.router.navigate(['/auftrag-senden']);
  }

  public toTermin(): void {
    this.router.navigate(['/termin']);
  }

  public toMitarbeiter(): void {
    this.router.navigate(['/mitarbeiter']);
  }

  public onOpenDialog(): void {
    this.showContact = false;
    this.showDialog = true;
  }

  public onCloseDialog(): void {
    this.showContact = true;
    this.showDialog = false;
  }
}
