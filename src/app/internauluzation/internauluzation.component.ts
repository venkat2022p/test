import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-internauluzation',
  templateUrl: './internauluzation.component.html',
  styleUrls: ['./internauluzation.component.css']
})
export class InternauluzationComponent {

  constructor(public translateService: TranslateService) {
    
  }

  public changeLanguage(language: string): void {

    this.translateService.use(language);

  }
  
}
