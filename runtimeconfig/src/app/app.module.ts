import { HttpClientModule } from '@angular/common/http';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConfigService } from './config.service';


const appConfig = (config: ConfigService) =>() => {
  return config.loadConfig().subscribe(
    (response) => {
      console.log(typeof(response))
      config.setConfig(response)
      console.log(config.getConfig());
      console.log("Done");
      

    }
  );
}

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ConfigService,
    {
      provide: APP_INITIALIZER,
      useFactory: appConfig,
      multi:true,
      deps:[ConfigService]
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
