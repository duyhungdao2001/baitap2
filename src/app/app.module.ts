import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router'

import { AppComponent } from './app.component';
import { LeafComponent } from './leaf/leaf.component';
import { ListComponent } from './list/list.component';
import { BootstrapComponent } from './bootstrap/bootstrap.component';
import { from } from 'rxjs';
import { CartComponent } from './cart/cart.component';

@NgModule({
  declarations: [
    AppComponent,
    LeafComponent,
    ListComponent,
    BootstrapComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path:'', component: ListComponent},
      {path:'list', component: ListComponent},
      {path:'leaf', component: LeafComponent},
      {path:'bootstrap', component: BootstrapComponent},
      {path:'cart', component: CartComponent},
      {path:'**',  redirectTo:'', pathMatch: 'full'},
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
