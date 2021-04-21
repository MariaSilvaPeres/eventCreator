import { Component } from "@angular/core"
import { Router } from "@angular/router"
import { FormsModule } from "@angular/forms"

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
  newEventForm;
  newEvent: any
  isDirty: boolean = true

  constructor(private router: Router) { }

  saveEvent(formValues) {
    console.log(formValues)
  }

  cancel() {
    this.router.navigate(["/events"])
  }
}
