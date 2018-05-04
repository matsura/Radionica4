import { ApiService } from './api.service';
import { Observable } from 'rxjs/Observable';
import { IProject } from '../models/project.model';
import { IServerResponse } from '../models/server-response.model';
import { Injectable } from '@angular/core';

@Injectable()
export class ProjectService {

  constructor(private apiService: ApiService) {}

  getAll(limit?: number, skip?: number): Observable<IServerResponse<Array<IProject>>> {

    if (limit && skip) {
      return this.apiService.get('project', {
        limit,
        skip
      });
    } else if (limit && !skip) {
      return this.apiService.get('project', {
        limit
      });
    } else if (!limit && skip) {
      return this.apiService.get('project', {
        skip
      });
    }

    return this.apiService.get('project');
  }

  create(project: IProject): Observable<IServerResponse<IProject>> {

    return this.apiService.post('project', JSON.stringify(project));
  }
}
