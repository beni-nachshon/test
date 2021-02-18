import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FrameComponent } from './frame/frame.component';
import { LensComponent } from './lens/lens.component';
import { NumberComponent } from './number/number.component';
import { InvitationComponent } from './invitation/invitation.component';
import { OneFrameComponent } from './one-frame/one-frame.component';
import { OneLensComponent } from './one-lens/one-lens.component';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    FrameComponent,
    LensComponent,
    NumberComponent,
    InvitationComponent,
    OneFrameComponent,
    OneLensComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
