import { Component } from "@angular/core";
import { NavController } from '@ionic/angular';

@Component({
    selector: 'login-component',
    templateUrl: 'login.component.html',
    // styleUrls:[],
})

export class LoginComponent {
    constructor( private Nav: NavController){

    }

    goback(){
        this.Nav.back()
    }
}