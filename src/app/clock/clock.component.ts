import {Component, OnInit} from '@angular/core'

@Component({
    selector:'clock',
    templateUrl:'clock.component.html',
    styleUrls:['clock.css']
})

export class ClockComponent implements OnInit {
    updateClock(){
            let date = new Date()
            let m = 6 * date.getMinutes();
            document.getElementById("minutes").style.cssText =  "-webkit-transform:rotate(" + m + "deg);"  
    }
    ngOnInit(){
        this.updateClock()
        setInterval(() => this.updateClock(), 1000);
    }
}
