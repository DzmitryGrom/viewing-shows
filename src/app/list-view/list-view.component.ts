import { Component, OnInit } from '@angular/core';
import { ViewServiceService } from "../service/view-service.service";

@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.css']
})
export class ListViewComponent implements OnInit {
  films = [];
  constructor(private viewServiceService: ViewServiceService) { }

  ngOnInit() {
    this.viewServiceService.getFilms().subscribe( films => {
      this.films = films;
      // this.films.forEach(item => {
      //   console.log(item.show)
      //   this.films = item.show
      // });
    });
  }

}
