import {Component, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {PersonenangabenComponent} from '../personenangaben/personenangaben.component';
import {MatDialog} from '@angular/material/dialog';
import {DialogComponent} from '../dialog/dialog.component';

@Component({
  selector: 'app-auftrag-senden',
  templateUrl: './auftrag-senden.component.html',
  styleUrls: ['./auftrag-senden.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AuftragSendenComponent implements OnInit {
  @ViewChild(PersonenangabenComponent) public perComp: PersonenangabenComponent;
  public kontaktDatenForm: FormGroup;
  public isLinear = false;
  public isDisabled;


  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
    this.kontaktDatenForm = new FormGroup({
      nummer: new FormControl (''),
      email: new FormControl('', [Validators.email, Validators.required])
    });
  }

  public enableSubmitButton(): boolean {
   if (this.kontaktDatenForm.get('nummer').value !== '' && this.kontaktDatenForm.get('nummer').value !== null) {
     return false;
   }else if (this.kontaktDatenForm.get('email').value !== '' && this.kontaktDatenForm.get('email').value !== null) {
     return false;
   }else {
     return true;
   }
  }
  public enableButton(ev): void {
    console.log(ev);
    if (ev) {
      this.isDisabled = false;
    }else {
      this.isDisabled = true;
    }
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '400px',
      height: '300px',
    });
  }


}
