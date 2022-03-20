import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-duree',
  templateUrl: './duree.component.html',
  styleUrls: ['./duree.component.scss']
})
export class DureeComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit(): void {
  }

  btnNourriture=()=>{
    this.router.navigateByUrl('nourriture');
  }

}
