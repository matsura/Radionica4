import { Component, OnInit } from '@angular/core';
import { IProject } from '../../../models/project.model';
import { ProjectService } from '../../../services/project.service';
import { IServerResponse } from '../../../models/server-response.model';

@Component({
  selector: 'app-project-manager',
  templateUrl: './project-manager.component.html',
  styleUrls: ['./project-manager.component.css']
})
export class ProjectManagerComponent implements OnInit {

  projects: Array<IProject> = [];

  constructor(private projectService: ProjectService) {}

  ngOnInit(): void {

    this.projectService.getAll()
      .subscribe((response: IServerResponse<Array<IProject>>) => this.projects = response.result);
  }
}
