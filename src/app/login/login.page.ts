import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
    selector: 'login-component',
    templateUrl: 'login.component.html',
    styleUrls: ['login.scss'],
})

export class LoginComponent {
    constructor( private Nav: NavController) {

    }

    goback(form) {
        if (form.valid) {
            const username = JSON.stringify({username: form.value.username});
            localStorage.setItem('logindetails', username );
            console.log(form);
        }
        this.Nav.back();
    }
}
