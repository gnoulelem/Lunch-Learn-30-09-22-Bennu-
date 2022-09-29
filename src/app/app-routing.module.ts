import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChuckNorrisComponent } from './chuck-norris/chuck-norris.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'chuck-norris', component: ChuckNorrisComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
