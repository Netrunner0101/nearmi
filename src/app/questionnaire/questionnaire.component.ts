import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-questionnaire',
  templateUrl: './questionnaire.component.html',
  styleUrls: ['./questionnaire.component.scss']
})
export class QuestionnaireComponent implements OnInit {

  constructor(private router: Router ) { }

  ngOnInit(): void {

  }

  btnNb= () => {
    this.router.navigateByUrl('nb');
};


}
