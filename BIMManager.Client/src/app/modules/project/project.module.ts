import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { PROJECT_ROUTES } from './project.routing';
import { ProjectManagerComponent } from './project-manager/project-manager.component';

@NgModule({
  declarations: [
    ProjectManagerComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forChild(PROJECT_ROUTES)
  ]
})
export class ProjectModule {}
