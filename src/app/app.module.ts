import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ErrorHandler, NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';

import {AppRoutingModule} from './app.routing';
import {NavbarModule} from './shared/navbar/navbar.module';
import {FooterModule} from './shared/footer/footer.module';
import {SidebarModule} from './sidebar/sidebar.module';

import {AppComponent} from './app.component';

import {AdminLayoutComponent} from './layouts/admin-layout/admin-layout.component';
import {SweetAlert2Module} from '@sweetalert2/ngx-sweetalert2';
import {ErrorHandleChennel} from './util/ErrorHandleChennel';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    RouterModule,
    HttpClientModule,
    NavbarModule,
    FooterModule,
    SidebarModule,
    AppRoutingModule,
    SweetAlert2Module.forRoot()
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent
  ],
  providers: [
    {provide: ErrorHandler, useClass: ErrorHandleChennel},
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
