import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-mcq',
  templateUrl: './mcq.component.html',
  styleUrls: ['./mcq.component.scss'],
})
export class McqComponent implements OnInit {

  constructor(private Nav: NavController) { }

  ngOnInit() {
    
  }

  goBack(){
    console.log('gone back')
    this.Nav.pop()
  }
}
