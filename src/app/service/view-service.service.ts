import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import 'rxjs/add/operator/map';
import {ProjectModel} from "../models/project.model";
import {Observable} from 'rxjs/internal/Observable';
import {map} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ViewServiceService {
  search = 'Batman';
  constructor(private http: HttpClient) { }


  getFilms(): Observable<ProjectModel[]> {
    return  this.http
          .get<ProjectModel[]>('http://api.tvmaze.com/search/shows?q=' + this.search + '')
          .pipe(map((response) => response.map(model => (new ProjectModel).setAttributes(model)))
          );
  }
}
