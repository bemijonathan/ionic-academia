import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "./login/login.page";
import { McqComponent } from "./mcq/mcq.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { ScoreComponent } from "./score/score.component";
import { YearComponent } from "./subs/year.component";
import { CourseComponent } from "./course/course.component";
import { TestPage } from "./test/test.page";
import { ResultPage } from "./results-page/resuls-page.component";
import { ReviewTest } from "./review-test/review-test.component";
import { QuestionReview } from "./question-review/question-review.page";
import { SignInComponent } from "./signIn/sign-in.component";
import { authenticationComponent } from "./route-guards/authentication";
// import {SettingsComponent} from "./"
const routes: Routes = [
  {
    path: "home",
    component: TestPage
  },
  { path: "signup", component: SignInComponent ,canActivate: [authenticationComponent] },
  { path: "", component: LoginComponent, canActivate: [authenticationComponent]},
  { path: "review", component: ReviewTest },
  { path: "question-review", component: QuestionReview },
  { path: "mcq/:year/:course", component: McqComponent },
  { path: "dasboard", component: DashboardComponent },
  { path: "score", component: ScoreComponent },
  { path: "year", component: YearComponent },
  { path: "course/:course", component: CourseComponent },
  { path: "result", component: ResultPage },
  { path: "**", component: TestPage }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
