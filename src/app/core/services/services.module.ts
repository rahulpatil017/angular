import { NgModule } from '@angular/core';

import { HttpService } from './http.service';
import { AuthService } from './auth.service';
import { TestService } from './test.service';

@NgModule({
  providers: [
    HttpService,  
    AuthService,
    TestService
  ]
})
export class ServicesModule { }
