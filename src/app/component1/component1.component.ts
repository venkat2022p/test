import { Component } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-component1',
  templateUrl: './component1.component.html',
  styleUrls: ['./component1.component.css']
})
export class Component1Component {

  Component1Data: any = '';  
  
  constructor(private user: UserService) {  

    this.user.SharingData.subscribe((res: any) => {  

      this.Component1Data = res;  

    })  

  }  
  
  onSubmit(data: any) {  

    this.user.SharingData.next(data.value);  
    
  }  
}
