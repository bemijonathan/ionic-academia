import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
    selector: 'question-review',
    templateUrl: 'question-review.page.html',
    styleUrls: ['question-review.scss']
})

export class QuestionReview implements OnInit {

  course: string;
  showButton = true;
  year: string;
  counter: number;

  questions = [
    {
      question:
        'which of the following is not a feature of the superior border of the scapular',
      options: [
        'supra-scapular notch',
        'coracoid process',
        'presence of spine of the scapula',
        'attachment of the trapezius muscle'
      ],
      answer: 1,
      id: 1
    },
    {
      question:
        'which of the following is not a feature of the superior border of the scapular',
      options: [
        'supra-scapular notch',
        'coracoid process',
        'presence of spine of the scapula',
        'attachment of the trapezius muscle'
      ],
      answer: 1,
      id: 2
    },
    {
      question:
        'which of the following is not a feature of the superior border of the scapular',
      options: [
        'supra-scapular notch',
        'coracoid process',
        'presence of spine of the scapula',
        'attachment of the trapezius muscle'
      ],
      answer: 2,
      id: 3
    },
    {
      question:
        'which of the following is not a feature of the superior border of the scapular',
      options: [
        'supra-scapular notch',
        'coracoid process',
        'presence of spine of the scapula',
        'attachment of the trapezius muscle'
      ],
      answer: 0,
      id: 4
    },
    {
      question:
        'which of the following is not a feature of the superior border of the scapular',
      options: [
        'supra-scapular notch',
        'coracoid process',
        'presence of spine of the scapula',
        'attachment of the trapezius muscle'
      ],
      answer: 2,
      id: 5
    },
    {
      question:
        'which of the following is not a feature of the superior border of the scapular',
      options: [
        'supra-scapular notch',
        'coracoid process',
        'presence of spine of the scapula',
        'attachment of the trapezius muscle'
      ],
      answer: 3,
      id: 6
    },
    {
      question:
        'which of the following is not a feature of the superior border of the scapular',
      options: [
        'supra-scapular notch',
        'coracoid process',
        'presence of spine of the scapula',
        'attachment of the trapezius muscle'
      ],
      answer: 0,
      id: 7
    },
    {
      question:
        'which of the following is not a feature of the superior border of the scapular',
      options: [
        'supra-scapular notch',
        'coracoid process',
        'presence of spine of the scapula',
        'attachment of the trapezius muscle'
      ],
      answer: 1,
      id: 8
    },
    {
      question:
        'which of the following is not a feature of the superior border of the scapular',
      options: [
        'supra-scapular notch',
        'coracoid process',
        'presence of spine of the scapula',
        'attachment of the trapezius muscle'
      ],
      answer: 2,
      id: 9
    }
  ];


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
     this.nav.navigateForward('score');
    } else {
      this.showButton = true;
      this.counter++;
      console.log(this.counter);
    }
  }
    goBack() {
        this.nav.back();
    }
    constructor(public nav: NavController) { }

    ngOnInit() {}
}
