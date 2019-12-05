import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy, RouterModule } from '@angular/router';
// import { Http} from'@angular/core/'
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { TabsComponent } from './tabs/tabs.component';
import { LoginComponent } from './login/login.page';
import { McqComponent } from './mcq/mcq.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ScoreComponent } from './score/score.component';
import { YearComponent } from './year/year.component';
import { CourseComponent } from './course/course.component';
import { TestPage } from './test/test.page';
import { ClockComponent } from './clock/clock.component';
import { ResultPage } from './results-page/resuls-page.component';
import { ReviewTest } from './review-test/review-test.component';
import { QuestionReview } from './question-review/question-review.page';
import { HttpClientModule } from '@angular/common/http';
import { SignInComponent } from './signIn/sign-in.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    TabsComponent,
    LoginComponent,
    McqComponent,
    ScoreComponent,
    YearComponent,
    DashboardComponent,
    CourseComponent,
    TestPage,
    ClockComponent,
    ResultPage,
    ReviewTest,
    QuestionReview,
    SignInComponent
  ],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, RouterModule, HttpClientModule, FormsModule],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
