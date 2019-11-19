import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss'],
}) 
export class CourseComponent implements OnInit {
  course: string;
  shortCourse: string;
  years: number[] = [
    2004,
    2005,
    2006,
    2007,
    2008,
    2009,
    2010,
    2011,
    2012
  ]
  constructor( private Nav: NavController, public activated: ActivatedRoute) { }
  ngOnInit() {
    this.shortCourse = this.activated.snapshot.params.course
    this.foromatCourse()
  }
  foromatCourse(){
    if(this.shortCourse === 'BCH'){
      this.course = 'Biochemistry'
    }else if(this.shortCourse === 'PHY'){
      this.course = 'Physiology'
    }else if(this.shortCourse === 'ANA'){
      this.course = 'Anatomy'
    }else{
      this.course = 'Alt. to Prac.'
    }
  }
  goback() {
    this.Nav.back();
  }
  selectYear(year){
    console.log(this.shortCourse)
    this.Nav.navigateForward(`mcq/${this.shortCourse}/${year}`)
  }
  random(){
    console.log('random')
  }
}
