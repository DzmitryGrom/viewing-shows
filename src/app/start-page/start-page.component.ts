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

  constructor(private router: Router, private viewServiceService: ViewServiceService) { }

  ngOnInit () {}

  onClick () {
    this.viewServiceService.setValue(this.search);
    this.router.navigateByUrl('/list');

  }

  onEnter(e) {
    this.viewServiceService.setValue(this.search);
    this.router.navigateByUrl('/list');
  }

}
