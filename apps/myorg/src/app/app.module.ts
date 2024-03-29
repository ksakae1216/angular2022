import { HttpClientModule } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { MyorgSharedApiModule } from '@myorg/myorg/shared/api';
import { MYORG_APP_CONFIG } from '@myorg/myorg/shared/data-access';
import { CookieService } from 'ngx-cookie-service';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MyorgSharedApiModule.forRoot({
      rootUrl: environment.apiUrl,
    }),
  ],
  bootstrap: [AppComponent],
  providers: [
    CookieService,
    { provide: MYORG_APP_CONFIG, useValue: environment },
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
