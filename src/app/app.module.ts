import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { from } from 'rxjs';

import { AppComponent } from './app.component';
import { FlipComponent } from './flip/flip.component';
import { HttpClientModule} from '@angular/common/http';
import { ImgflipService } from './imgflip.service';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    FlipComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path:'', pathMatch:'full', redirectTo:'flip'},
      {path:'flip', component: FlipComponent}
    ])
  ],
  providers: [ImgflipService],
  bootstrap: [AppComponent]
})
export class AppModule { }
