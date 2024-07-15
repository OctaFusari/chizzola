import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor() { }

  g1__cond:boolean = false;

 toggleMenu() {
    let menu:any = ""
    menu = document.querySelector(".menu");
    menu.classList.toggle("menu-opened");

    let grape1:any = document.getElementById("grape-1");
    let grape2:any = document.getElementById("grape-2");
    let grape3:any = document.getElementById("grape-3");

    if(this.g1__cond == false){
      grape1.setAttribute("cx", "70");
      grape1.setAttribute("cy", "10");
      grape2.setAttribute("cx", "70");
      grape2.setAttribute("cy", "25");
      grape3.setAttribute("cx", "70");
      grape3.setAttribute("cy", "40");
      this.g1__cond = true
    }else if(this.g1__cond == true){
      grape1.setAttribute("cx", "60");
      grape1.setAttribute("cy", "10");
      grape2.setAttribute("cx", "70");
      grape2.setAttribute("cy", "30");
      grape3.setAttribute("cx", "80");
      grape3.setAttribute("cy", "10");
      this.g1__cond = false
    }

  }

  ngOnInit(): void {
  }
}
