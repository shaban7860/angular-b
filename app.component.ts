import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'User Details';
  name : String = "Shaban Ali";
  address : String = "Mumbai - 86";
  contact : String = "9876543210";
}
