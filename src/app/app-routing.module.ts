import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.page';
import { McqComponent } from './mcq/mcq.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ScoreComponent } from './score/score.component';
import { YearComponent } from './year/year.component';
import { CourseComponent } from './course/course.component';
import { TestPage } from './test/test.page';


const routes: Routes = [
  { path: '', component:TestPage, pathMatch:'full'},
  { path: 'login', component: LoginComponent },
  { path: 'mcq/:year/:course', component: McqComponent },
  { path: 'dasboard', component: DashboardComponent },
  { path: 'score', component: ScoreComponent },
  { path: 'year', component: YearComponent },
  { path: 'course/:course', component: CourseComponent },
  { path: "**", component:ScoreComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
