import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FrameComponent } from './frame/frame.component';
import { InvitationComponent } from './invitation/invitation.component';
import { LensComponent } from './lens/lens.component';
import { NumberComponent } from './number/number.component';

const routes: Routes = [
  {path : '', component : FrameComponent },
  {path : 'lens', component : LensComponent },
  {path : 'number', component : NumberComponent },
  {path : 'invitation', component : InvitationComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
