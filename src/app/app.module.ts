import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FooterComponent } from './common/footer/footer.component';
import { HeaderComponent } from './common/header/header.component';
import { MainComponent } from './common/main/main.component';
import { NavbarComponent } from './common/navbar/navbar.component';
import { TabsComponent } from './modules/test/tabs/tabs.component';
import { ListComponent } from './modules/test/list/list.component';
import { ItemComponent } from './modules/test/item/item.component';
import { CoreModule } from './core/core.module';
import { AdditemComponent } from './modules/test/additem/additem.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    MainComponent,
    NavbarComponent,
    TabsComponent,
    ListComponent,
    ItemComponent,
    AdditemComponent    
  ],
  imports: [
    BrowserModule,
    CoreModule.forRoot(),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
