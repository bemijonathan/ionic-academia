import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TestPage } from './test.page';
import { LoginComponent } from '../login/login.page';
import { McqComponent } from '../mcq/mcq.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { ScoreComponent } from '../score/score.component';
import { YearComponent } from '../year/year.component';
import { CourseComponent } from '../course/course.component';

const routes: Routes = [
  { path: '', component: TestPage },
  { path: 'login', component: LoginComponent },
  { path: 'mcq', component: McqComponent },
  { path: 'dasboard', component: DashboardComponent },
  { path: 'score', component: ScoreComponent },
  { path: 'year', component: YearComponent },
  { path: 'course', component: CourseComponent }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TestPage, LoginComponent, McqComponent, ScoreComponent,YearComponent, DashboardComponent, YearComponent, CourseComponent]
})
export class TestPageModule {}
