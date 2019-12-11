import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from '@angular/router';
import { NavController } from '@ionic/angular';

@Injectable({providedIn: 'root'})
export class authenticationComponent implements CanActivate {
    constructor(public nav: NavController) { }

    async canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

        try {
            let username: any = await localStorage.getItem('logindetails')
            if (username.length > 1) {
                this.nav.navigateForward('home');
                return false;
            } else {
                return true;
            }
        } catch (error) {
            console.log(error);
            return true;
        }

    }
}
