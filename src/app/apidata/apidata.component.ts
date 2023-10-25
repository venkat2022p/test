import { Component } from '@angular/core';
import { UserService } from './../user.service';

@Component({
  selector: 'app-apidata',
  templateUrl: './apidata.component.html',
  styleUrls: ['./apidata.component.css']
})
export class ApidataComponent {
  data = ""

  constructor(private user: UserService) {
  }
  
  ngOnInit(): void {
  }
  
  getData() {

  this.user.getData().subscribe((res: any) => {

  this.data = JSON.stringify(res)

      })
      
    }
  }

