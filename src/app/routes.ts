import { Routes } from '@angular/router';

import {
  EventDetailsComponent,
  EventsListComponent,
  CreateEventsComponent,
  EventRouteActivator,
  EventListResolver,
  CreateSessionComponent,
  EventResolver
} from './events/index'

import { Error404Component } from './error/404.component';


export const appRoutes: Routes = [
  {
    path: 'events/new',
    component: CreateEventsComponent,
    canDeactivate: ['canDeactivateCreateEvent']
  },
  {
    path: 'events',
    component: EventsListComponent, resolve: { events: EventListResolver }
  },
  {
    path: 'events/:id',
    component: EventDetailsComponent,
    canActivate: [EventRouteActivator]
  },
  {
    path: 'events/session/new',
    component: CreateSessionComponent
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
  {
    path: 'user',
    loadChildren: () => import('./user/user.module').then(m => m.UserModule)
  },

];






