import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

class DialogData {
}

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {
  public dialogRef: MatDialogRef<DialogComponent>;
  @Inject(MAT_DIALOG_DATA) public data: DialogData;
  constructor() { }

  ngOnInit(): void {
  }

  public onNoClick(): void {
    this.dialogRef.close();
  }

}
