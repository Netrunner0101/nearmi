import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-age',
  templateUrl: './age.component.html',
  styleUrls: ['./age.component.scss']
})
export class AgeComponent implements OnInit {

  constructor(private router: Router ) { }

  ngOnInit(): void {
  }

  btnBudget= () =>{
    this.router.navigateByUrl('budget');
  }

}
