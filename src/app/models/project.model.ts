import {BaseModel} from './base.model';
import { ShowModel } from './show.model';

export class ProjectModel extends BaseModel {
  score: Number;
  show: ShowModel;
}
