import { Directive, Inject, OnInit, ElementRef, Input } from '@angular/core';
import { JQ_TOKEN } from './jQuery.service';

@Directive({
  // the [] indicates that this is an attribute, not a element
  selector: '[modal-trigger]',
})
export class ModalTriggerComponent implements OnInit {
  private el: HTMLElement;
  @Input('modal-trigger') modalId: string;

  constructor(ref: ElementRef, @Inject(JQ_TOKEN) private $: any) {
    this.el = ref.nativeElement;
  }

  ngOnInit() {
    this.el.addEventListener('click', e => {
      this.$(`#${this.modalId}`).modal({});
    });
  }
}
