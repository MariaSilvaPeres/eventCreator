import { Component } from "@angular/core"
import { Router } from "@angular/router"
import { EventService, IEvent } from './shared/index'
@Component({
  templateUrl: "create-event.component.html",
  styles: [
    `
			em {
				float: right;
				color: #e05c65;
				padding-left: 10px;
			}
			.error input {
				background-color: #e3c3c5;
			}

			/* There isn't a css standart for styling placeholders, so we have to do one for each browser */

			. error ::-webkit-input-placeholder {
				color: #999;
			}
			. error ::-moz-placeholder {
				color: #999;
			}
			. error :-moz-placeholder {
				color: #999;
			}
			. error :ms-input-placeholder {
				color: #999;
			}
		`,
  ],
})
export class CreateEventsComponent {

  newEvent: any
  isDirty: boolean = true
  event: IEvent;

  constructor(private router: Router, private eventService: EventService) { }

  saveEvent(formValues) {
    this.eventService.saveEvent(formValues)
    this.isDirty = false;
    this.router.navigate(["/events"]);
  }

  cancel() {
    this.router.navigate(["/events"]);
  }
}
