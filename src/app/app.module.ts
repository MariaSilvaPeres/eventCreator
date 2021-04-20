import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { 
  EventThumbnailComponent, 
  EventsListComponent, 
  EventService, 
  EventDetailsComponent, 
  EventRouteActivator, 
  EventListResolver
} from './events/index'

import { EventsAppComponent } from './events-app.component';
import { NavbarComponent } from './nav/navbar/navbar.component';
import { ToastrService } from './events/common/toastr.service';
import { appRoutes } from './routes';
import { CreateEventsComponent } from './events/create-event.components';
import { Error404Component } from './error/404.component';


@NgModule({
  imports: [BrowserModule, RouterModule.forRoot(appRoutes)],
  declarations: [
    EventsAppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    NavbarComponent,
    EventDetailsComponent,
    CreateEventsComponent,
    Error404Component,
  ],
  providers: [EventService, 
    ToastrService, 
    EventRouteActivator, 
    EventListResolver,
  {
    provide: 'canDeactivateCreateEvent', 
    useValue: checkDirtyState
  }
  ],
  bootstrap: [EventsAppComponent],
})
export class AppModule {}

export function checkDirtyState(component:CreateEventsComponent) { 
   if (component.isDirty) {
       return window.confirm('You have not saved this event, do you really want to cancel?')
    }
  return true
}
