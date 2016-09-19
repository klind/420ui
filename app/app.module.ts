import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular2-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';
import { InMemoryProfileDataService }  from './in-memory-data.profile.service';

import { AppComponent }         from './app.component';
import { DashboardComponent }   from './dashboard.component';
import { HeroesComponent }      from './heroes.component';
import { HeroDetailComponent }  from './hero-detail.component';
import { HeroService }          from './hero.service';
import { routing }              from './app.routing';
import { HeroSearchComponent  } from './hero-search.component';
import './rxjs-extensions';
import { ProfileComponent  }    from './profile/profile.component';
import { ProfileService  }      from './profile/profile.service';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    //InMemoryWebApiModule.forRoot(InMemoryProfileDataService),
    routing
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    HeroDetailComponent,
    HeroesComponent,
    HeroSearchComponent,
    ProfileComponent
  ],
  providers: [
    HeroService, ProfileService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}


