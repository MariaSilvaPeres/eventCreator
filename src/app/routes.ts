import { EventDetailsComponent } from './events/event-details/event-details/event-details.component';
import { EventsListComponent } from './events/events-list.component';
import { Routes } from '@angular/router';
import { CreateEventsComponent } from './events/create-event.components';
import { Error404Component } from './error/404.component';
import { EventRouteActivator } from './events/event-details/event-details/event-route-activator.service';

export const appRoutes: Routes = [
  {
    path: 'events/new',
    component: CreateEventsComponent,
  },
  {
    path: 'events',
    component: EventsListComponent,
  },
  {
    path: 'events/:id',
    component: EventDetailsComponent,
    canActivate: [EventRouteActivator],
  },
  {
    path: 'events/new',
    component: CreateEventsComponent,
  },
  {
    path: '404',
    component: Error404Component,
  },
  {
    path: '',
    redirectTo: '/events',
    pathMatch: 'full',
  },
];
