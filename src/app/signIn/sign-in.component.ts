import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
    selector: 'sign-in-component',
    templateUrl: './sign-in.page.html',
    styleUrls: ['./sign-in.scss']
})

export class SignInComponent implements OnInit {
    constructor( public nav:NavController) {}

    ngOnInit() { }

    goback(details){
        if(details.valid){
            let {username} = details.value
            const userdetails = JSON.stringify({username})
            localStorage.setItem('logindetails', userdetails)
            this.nav.navigateForward('home')
        }
    }
}