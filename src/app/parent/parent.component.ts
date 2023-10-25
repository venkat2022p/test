import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {

  currentItem = 'angular';

  items = [''];

  addItem(newItem: string) {

    this.items.push(newItem);

  }
  
}
