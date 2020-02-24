import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TabsComponent } from './modules/test/tabs/tabs.component';
import { ListComponent } from './modules/test/list/list.component';
import { AdditemComponent } from './modules/test/additem/additem.component';
import { MasterRoutes, ChildRoutes } from './core/constants/route.constant';
import { HeaderComponent } from './common/header/header.component';
import { MainComponent } from './common/main/main.component';
import { ProjectsComponent } from './modules/profile/projects/projects.component';
import { ResumeComponent } from './modules/profile/resume/resume.component';
import { CertificationsComponent } from './modules/profile/certifications/certifications.component';
import { ConnectComponent } from './modules/profile/connect/connect.component';
import { PagenotfoundComponent } from './common/pagenotfound/pagenotfound.component';

const routes: Routes = [
  { path: 'main', component: MainComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'resume', component: ResumeComponent },
  { path: 'certifications', component: CertificationsComponent },
  { path: 'connect', component: ConnectComponent },
  {
    path: '',
    redirectTo: 'main',
    pathMatch: 'full'
  },
  { path: '**', component: PagenotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
