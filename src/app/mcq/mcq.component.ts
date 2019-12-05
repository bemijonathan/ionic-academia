import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { QuestionsService } from '../questions.service';

@Component({
  selector: 'app-mcq',
  templateUrl: './mcq.component.html',
  styleUrls: ['./mcq.component.scss']
})
export class McqComponent implements OnInit {
  constructor(private Nav: NavController, public route: ActivatedRoute, public quest:QuestionsService) {}

  course: string;
  showButton = true;
  year: string;
  counter: number;

  questions: any[] = [];

  ngOnInit() {
    this.quest._get().subscribe(data => {
      this.questions = data;
      console.log(this.questions);
    })
    this.course = this.route.snapshot.params.course;
    this.year = this.route.snapshot.params.year;
    this.counter = 1;
    console.log(this.counter)
    console.log(this.course, this.year);
    this.quest.questions = this.questions ;
  }

  goBack() {
    console.log('gone back');
    this.Nav.navigateBack(`course/${this.course}`);
  }

  getQuestions() {}

  checkAnswer() {
    if (!this.showButton) {
      console.log('should not click again ');
    } else {
      this.showButton = false;
      console.log('clicked answer');
    }
  }
  
  nextQuestion(id) {
    if (this.counter === this.questions.length) {
     this.Nav.navigateForward('score');
    } else {
      this.showButton = true;
      this.counter++;
      console.log(this.counter);
    }
  }
}
