import { Component, OnInit } from "@angular/core";
import { NavController } from "@ionic/angular";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-mcq",
  templateUrl: "./mcq.component.html",
  styleUrls: ["./mcq.component.scss"]
})
export class McqComponent implements OnInit {
  constructor(private Nav: NavController, public route: ActivatedRoute) {}

  course: string;
  showButton = true;
  year: string;
  counter: number;

  questions = [
    {
      question:
        "which of the following is not a feature of the superior border of the scapular",
      options: [
        "supra-scapular notch",
        "coracoid process",
        "presence of spine of the scapula",
        "attachment of the trapezius muscle"
      ],
      answer: 1,
      id: 1
    },
    {
      question:
        "which of the following is not a feature of the superior border of the scapular",
      options: [
        "supra-scapular notch",
        "coracoid process",
        "presence of spine of the scapula",
        "attachment of the trapezius muscle"
      ],
      answer: 1,
      id: 2
    },
    {
      question:
        "which of the following is not a feature of the superior border of the scapular",
      options: [
        "supra-scapular notch",
        "coracoid process",
        "presence of spine of the scapula",
        "attachment of the trapezius muscle"
      ],
      answer: 2,
      id: 3
    },
    {
      question:
        "which of the following is not a feature of the superior border of the scapular",
      options: [
        "supra-scapular notch",
        "coracoid process",
        "presence of spine of the scapula",
        "attachment of the trapezius muscle"
      ],
      answer: 0,
      id: 4
    },
    {
      question:
        "which of the following is not a feature of the superior border of the scapular",
      options: [
        "supra-scapular notch",
        "coracoid process",
        "presence of spine of the scapula",
        "attachment of the trapezius muscle"
      ],
      answer: 2,
      id: 5
    },
    {
      question:
        "which of the following is not a feature of the superior border of the scapular",
      options: [
        "supra-scapular notch",
        "coracoid process",
        "presence of spine of the scapula",
        "attachment of the trapezius muscle"
      ],
      answer: 3,
      id: 6
    },
    {
      question:
        "which of the following is not a feature of the superior border of the scapular",
      options: [
        "supra-scapular notch",
        "coracoid process",
        "presence of spine of the scapula",
        "attachment of the trapezius muscle"
      ],
      answer: 0,
      id: 7
    },
    {
      question:
        "which of the following is not a feature of the superior border of the scapular",
      options: [
        "supra-scapular notch",
        "coracoid process",
        "presence of spine of the scapula",
        "attachment of the trapezius muscle"
      ],
      answer: 1,
      id: 8
    },
    {
      question:
        "which of the following is not a feature of the superior border of the scapular",
      options: [
        "supra-scapular notch",
        "coracoid process",
        "presence of spine of the scapula",
        "attachment of the trapezius muscle"
      ],
      answer: 2,
      id: 9
    }
  ];

  ngOnInit() {
    this.course = this.route.snapshot.params.course;
    this.year = this.route.snapshot.params.year;
    this.counter = 1;
    console.log(this.course, this.year);
  }

  goBack() {
    console.log("gone back");
    this.Nav.navigateBack(`course/${this.course}`);
  }

  getQuestions() {}

  checkAnswer() {
    this.showButton = false;
    console.log(this.counter);
  }
  nextQuestion(id) {
    if (this.counter === this.questions.length) {
     this.Nav.navigateForward('score')
    }else{
      this.showButton = true;
      this.counter++;
      console.log(this.counter)
    }
  }
}
