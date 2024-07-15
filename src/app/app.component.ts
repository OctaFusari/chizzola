import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'chizzola';

  octimal(){
    window.location.href = "https://octimal.it/";
  }

}
