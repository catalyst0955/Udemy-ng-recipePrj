import {Directive, ElementRef, HostListener} from '@angular/core';

@Directive({
  selector: '[appDropdownDirective]'
})
export class DropdownDirective {

  constructor(private el: ElementRef) {
  }

  @HostListener('click') toggleOpen() {
    const parent = this.el.nativeElement; // parent element
    parent.classList.toggle('show');
    const child = [].filter.call(this.el.nativeElement.children, function (ele) {
      return ele.classList.contains('dropdown-menu');
    }); // Identify the child element on dropdown clicked- dropdwon menu

    if (child.length) {
      child[0].classList.toggle('show');
    }
  }


}
