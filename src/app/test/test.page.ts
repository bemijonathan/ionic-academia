import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-test',
  templateUrl: './test.page.html',
  styleUrls: ['./test.page.scss'],
})
export class TestPage implements OnInit {

  constructor(private nav :NavController, private route : Router) { }

  ngOnInit() {
  }
  Login(){
    this.route.navigate(['login'])
  }

}
