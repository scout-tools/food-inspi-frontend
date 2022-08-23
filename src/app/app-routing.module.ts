import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StartpageComponent } from './startpage/startpage.component';

const routes: Routes = [
  {
    path: '',
    component: StartpageComponent,
    title: 'Dr. Eckhardt + Partner GmbH - Overview'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      routes,
      {
        useHash: true,
        scrollPositionRestoration: 'enabled',
        anchorScrolling: 'enabled'
      }
    )
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
