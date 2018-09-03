import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StartPageComponent } from './start-page/start-page.component';
import { ListViewComponent } from './list-view/list-view.component';
import { ViewPageComponent } from './view-page/view-page.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";
import { ItemViewComponent } from './item-view/item-view.component';

const routes = [
  { path: '', component: StartPageComponent},
  { path: 'list', component: ListViewComponent},
  { path: 'view', component: ViewPageComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    StartPageComponent,
    ListViewComponent,
    ViewPageComponent,
    ItemViewComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
