import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-destination',
  templateUrl: './destination.component.html',
  styleUrls: ['./destination.component.scss']
})
export class DestinationComponent implements OnInit {

  constructor(private router: Router ) { }

  ngOnInit(): void {
  }

  btnDuree=()=>{
    this.router.navigateByUrl('duree');
  }

}
