import { BrowserModule } from '@angular/platform-browser';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ControlBarComponent } from './components/control-bar/control-bar.component';
import { SearchPageComponent } from './components/search-page/search-page.component';
import { MatButtonModule, MatInputModule, MatListModule, MatSidenavModule, MatToolbarModule } from '@angular/material';
import { MapModule } from './modules/map/map.module';
import { CoreModule } from './modules/core/core.module';
import { ServiceProvidersModule } from './modules/service-providers/service-providers.module';
import { onAppInit } from './appInitializerProvider';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ConfigCoreService } from './modules/core/service/config-core.service';
import { ViewerConfiguration } from 'angular-cesium';
import { StoreModule } from '@ngrx/store';
import { navFeatureKey } from './store/nav.selectors';
import { navReducer } from './store/nav.reducer';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    ControlBarComponent,
    SearchPageComponent,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MapModule,
    MatInputModule,
    HttpClientModule,
    CoreModule,
    ServiceProvidersModule,
    StoreModule.forRoot({}),
    StoreModule.forFeature(navFeatureKey, navReducer),
    MatToolbarModule,
    MatSidenavModule,
    FormsModule,
    MatListModule
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: onAppInit,
      multi: true,
      deps: [HttpClient, ConfigCoreService]
    },
    ViewerConfiguration
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
