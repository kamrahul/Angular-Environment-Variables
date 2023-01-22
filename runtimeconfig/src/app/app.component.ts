import { Component, OnInit } from '@angular/core';
import { ConfigService } from './config.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  
  constructor(public srv:ConfigService){}

  ngOnInit() {
    console.log(this.srv.getConfig())
    
  }
  title = 'runtimeconfig';


}
