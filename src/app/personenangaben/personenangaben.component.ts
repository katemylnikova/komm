import {Component, EventEmitter, OnChanges, OnInit, Output} from '@angular/core';
import {Router} from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-personenangaben',
  templateUrl: './personenangaben.component.html',
  styleUrls: ['./personenangaben.component.scss']
})
export class PersonenangabenComponent implements OnInit {
  public personenForm: FormGroup;
  public hasVertreter = false;
  public anreden = ['Herr', 'Frau'];
  @Output() public onFormValidityChanged: EventEmitter<boolean> = new EventEmitter<boolean>()
  constructor(public router: Router) { }

  public ngOnInit(): void {
    this.personenForm = new FormGroup({
      anrede: new FormControl(''),
      name: new FormControl('', []),
      vorname: new FormControl('', ),
      geburtsdatum: new FormControl(''),
      strasse: new FormControl('', []),
      ort: new FormControl(''),
      plz: new FormControl(''),
      kkk: new FormControl('', []),
      pflegekk: new FormControl(''),
      pkkk: new FormControl(''),
      pflegegrad: new FormControl('', []),
      verteter: new FormControl(''),
      vertreterName: new FormControl(''),
      vertreterVorname: new FormControl(''),
      bezug: new FormControl('')
    });

    this.personenForm.statusChanges.subscribe(v => {
      if (this.personenForm.valid) {
        this.onFormValidityChanged.emit(true);
      }else {
        this.onFormValidityChanged.emit(false);
      }
    });
  }
  public toggleVertreter(): void {
    this.hasVertreter = !this.hasVertreter;
  }

}
