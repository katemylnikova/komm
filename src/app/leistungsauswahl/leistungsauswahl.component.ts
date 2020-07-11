import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-leistungsauswahl',
  templateUrl: './leistungsauswahl.component.html',
  styleUrls: ['./leistungsauswahl.component.scss']
})
export class LeistungsauswahlComponent implements OnInit {
  public leistungsauswahlForm: FormGroup;
  public cardOneIsHidden = true;
  public cardTwoIsHidden = true;
  public cardThreeIsHidden = true;
  public  panelOpenState = false;
  constructor(public router: Router) { }

  ngOnInit(): void {
    this.leistungsauswahlForm = new FormGroup({
      baden: new FormControl(''),
      essenAnreichen: new FormControl(''),
      hautpflege: new FormControl(''),
      essenZubereiten: new FormControl(''),
      einkaufen: new FormControl(''),
      aufraeumen: new FormControl(''),
      spaziergang: new FormControl(''),
      begleitung: new FormControl(''),
      vorlesen: new FormControl('')
      });
  }

  public onClickCardOne(): void {
    this.cardOneIsHidden = !this.cardOneIsHidden;
  }

  public onClickCardTwo(): void {
    this.cardTwoIsHidden = !this.cardTwoIsHidden;
  }

  public onClickCardThree(): void {
    this.cardThreeIsHidden = !this.cardThreeIsHidden;
  }

  public onSubmit(): void {
    console.log(this.leistungsauswahlForm);
  }


  public onNextSlide(): void {
    if (this.leistungsauswahlForm.valid) {
      this.router.navigate(['/personenangaben']);
    }
  }
}
