import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nbpersonnes',
  templateUrl: './nbpersonnes.component.html',
  styleUrls: ['./nbpersonnes.component.scss']
})
export class NbpersonnesComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  btnAge = () => {
    this.router.navigateByUrl('age');
};

}
