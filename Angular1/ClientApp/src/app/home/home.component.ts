import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  statuse = [
    'รับเข้าห้องแล้ว',
    'สแกน',
    'เก็บใส่กล่อง',
  ]
}
