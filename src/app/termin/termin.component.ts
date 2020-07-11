import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {DialogComponent} from '../dialog/dialog.component';
import {TerminDialogComponent} from '../termin-dialog/termin-dialog.component';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-termin',
  templateUrl: './termin.component.html',
  styleUrls: ['./termin.component.scss']
})
export class TerminComponent implements OnInit {
  public terminForm: FormGroup
  public showTime = false;
  public showDialog = false;

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
    this.terminForm = new FormGroup({
      termin: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email])
    });

    this.terminForm.valueChanges.subscribe(value => {
        if (this.terminForm.valid) {
          this.showTime = true;
        }else {
          this.showTime = false;
        }
      });
  }

  public openDialog(): void {
    const dialogRef = this.dialog.open(TerminDialogComponent, {
      width: '300px',
      height: '200px',
    });
  }
}

