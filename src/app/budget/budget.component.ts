import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-budget',
  templateUrl: './budget.component.html',
  styleUrls: ['./budget.component.scss']
})
export class BudgetComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit(): void {
  }

  btnDepart= () =>{
    this.router.navigateByUrl('depart');
  }

  formatLabel(value: number) {
    if (value >= 1000000000) {
      return Math.round(value / 1000) + 'k';
    }
    return value;

  }
}
