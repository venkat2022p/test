import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-security',
  templateUrl: './security.component.html',
  styleUrls: ['./security.component.css']
})
export class SecurityComponent {

  dangerousUrl: string;

  trustedUrl: any;

  constructor(private sanitizer: DomSanitizer) {   

    this.dangerousUrl = 'javascript:alert("Trusted URL")';

    this.trustedUrl = sanitizer.bypassSecurityTrustUrl(this.dangerousUrl);
  }
}
