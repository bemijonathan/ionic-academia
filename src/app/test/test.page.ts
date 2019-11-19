import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-test',
  templateUrl: './test.page.html',
  styleUrls: ['./test.page.scss'],
})
export class TestPage implements OnInit {
  name: string = "jonathan";
  days: number = 5;
  constructor(public nav :NavController, private route : Router) { }

  ngOnInit() {
  }
  nextPage(course: string){
    this.nav.navigateForward(`course/${course}`)
    // this.route.navigate(['course', course])
  }
  Login(){
    this.route.navigate(['login'])
  }

}
