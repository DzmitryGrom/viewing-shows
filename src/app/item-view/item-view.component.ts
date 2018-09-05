import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-item-view',
  templateUrl: './item-view.component.html',
  styleUrls: ['./item-view.component.css']
})
export class ItemViewComponent implements OnInit {
  @Input() us;
  image: String = '';

  constructor() { }

  ngOnInit() {
    this.image =  this.us.show.image.medium;
    console.log(this.us.show);
  }

}
