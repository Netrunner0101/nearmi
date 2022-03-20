import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nourriture',
  templateUrl: './nourriture.component.html',
  styleUrls: ['./nourriture.component.scss']
})
export class NourritureComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit(): void {
  }

  btnScenario=()=>{
    this.router.navigateByUrl('scenario');
  }

}
