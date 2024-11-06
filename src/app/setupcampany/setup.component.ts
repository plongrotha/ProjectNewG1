import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'setup-app',
  templateUrl: './setup.component.html',
  styleUrl: './setup.component.css',
})
export class Setup implements OnInit {
  constructor() {}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  url = './app/assets/image/oggy.jpg';
  onselectLogo(e: any) {
    if (e.target.files) {
      var reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.onload = (event: any) => {
        this.url = event.target.result;
      };
    }
  }

  //
  urls = './app/assets/image/oggy.jpg';
  onselectBanner(e: any) {
    if (e.target.files) {
      var reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.onload = (event: any) => {
        this.urls = event.target.result;
      };
    } 
  }
}
