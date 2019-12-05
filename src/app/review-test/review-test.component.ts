import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
// import { Params } from '@angular/router';

@Component({
    selector: 'review-test',
    styleUrls: ['review-test.scss'],
    templateUrl: 'review-test.page.html'
})

export class ReviewTest implements OnInit {

    goBack(){
        this.nav.back()
    }

    fakeloop(){
        let array = []
        for (let i = 0 ; i <= 100; i++){
            array.push(i)
        }
        return array
    }

    gotoQuestion(x){
        this.nav.navigateForward(`question-review?question=${x}&year=2019`);
    }

    constructor( public nav: NavController) { }

    ngOnInit() { }

}