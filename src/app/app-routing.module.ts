import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TabsComponent } from './modules/test/tabs/tabs.component';
import { ListComponent } from './modules/test/list/list.component';
import { AdditemComponent } from './modules/test/additem/additem.component';
import { MasterRoutes, ChildRoutes } from './core/constants/route.constant';
import { HeaderComponent } from './common/header/header.component';

const routes: Routes = [

  { path: '', component: HeaderComponent },
  //{
  //  path: MasterRoutes.Family, component: TabsComponent, children: [
  //    { path: '', redirectTo: 'all', pathMatch: 'full' },
  //    { path: ':side', component: ListComponent }
  //  ]
  //},
  //{ path: MasterRoutes.AddFamily, component: AdditemComponent },
  { path: '**', redirectTo: '/' }

];
@NgModule({
  imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
