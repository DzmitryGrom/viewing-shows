import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ViewServiceService } from "../service/view-service.service";

@Component({
  selector: 'app-start-page',
  templateUrl: './start-page.component.html',
  styleUrls: ['./start-page.component.css']
})
export class StartPageComponent implements OnInit {
  search: String = '';
  films = [];

  constructor(private router: Router, private viewServiceService: ViewServiceService) { }

  ngOnInit () {
    this.viewServiceService.getFilms().subscribe( films => {
      this.films = films;
      this.films.forEach(item => {
        console.log(item.show);
      })
    });

  }

  onClick () {

    this.nextRoute();
  }

  onEnter(e) {
    this.nextRoute();
  }

  nextRoute () {
    this.router.navigateByUrl('/list');
  }
}
