import { Component } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-component2',
  templateUrl: './component2.component.html',
  styleUrls: ['./component2.component.css']
})
export class Component2Component {
  Component2Data: any = '';  
  
  constructor(private user: UserService) {  

    this.user.SharingData.subscribe((res: any) => {  

      this.Component2Data = res;  

    })  

  }  
  
  onSubmit(data: any) {  
    
    this.user.SharingData.next(data.value);  
  }  
}
