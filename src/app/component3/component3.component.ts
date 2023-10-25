import { Component } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-component3',
  templateUrl: './component3.component.html',
  styleUrls: ['./component3.component.css']
})
export class Component3Component {
  Component3Data: any = '';  
  
  constructor(private user: UserService) {  
    this.user.SharingData.subscribe((res: any) => {  
      this.Component3Data = res;  
    })  
  }  
  
  onSubmit(data: any) {  
    this.user.SharingData.next(data.value);  
  } 
}
