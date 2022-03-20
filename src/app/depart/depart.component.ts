import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-depart',
  templateUrl: './depart.component.html',
  styleUrls: ['./depart.component.scss']
})
export class DepartComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit(): void {
  }

  btnDestination= ()=>{
    this.router.navigateByUrl('destination');
  }

}
