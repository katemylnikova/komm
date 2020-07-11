import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LeistungsauswahlComponent} from './leistungsauswahl/leistungsauswahl.component';
import {PersonenangabenComponent} from './personenangaben/personenangaben.component';
import {AuftragSendenComponent} from './auftrag-senden/auftrag-senden.component';
import {HomepageComponent} from './homepage/homepage.component';
import {LeistungsueberblickComponent} from './leistungsueberblick/leistungsueberblick.component';
import {TerminComponent} from './termin/termin.component';
import {MitarbeiterComponent} from './mitarbeiter/mitarbeiter.component';


const routes: Routes = [
  {path: '', redirectTo: 'homepage', pathMatch: 'full'},
  {path: 'auftrag-senden', component: AuftragSendenComponent},
  {path: 'homepage', component: HomepageComponent},
  {path: 'leistungsueberblick', component: LeistungsueberblickComponent},
  {path: 'termin', component: TerminComponent},
  {path: 'mitarbeiter', component: MitarbeiterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,  {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
