import { Router, ActivatedRouteSnapshot, CanActivate } from '@angular/router';
import { Injectable } from '@angular/core';
import { EventService } from '../shared/event.service';

@Injectable()
export class EventRouteActivator implements CanActivate {
  //temos que verificar se o id é um event válido, então temos que injectar o serviço !
  constructor(private eventService: EventService, private router: Router) {}

  // Aqui vamos procurar o evento. Então temos que ir buscar o id à route, and the current route
  // is passing the id event in the canActivate as the first paramenter
  canActivate(route: ActivatedRouteSnapshot) {
    // cast to a boolean event (!!)
    const eventExists = !!this.eventService.getEvent(+route.params['id']);

    if (!eventExists) {
      this.router.navigate(['/404']);
    }
    return eventExists;
  }
}
