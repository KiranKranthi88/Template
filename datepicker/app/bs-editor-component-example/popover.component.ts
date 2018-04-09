import {Component, ViewChild} from "@angular/core";
import {PopoverDirective} from "ng2-bootstrap";

@Component({
    selector: 'popover-cell',
    template: `
        <button type="button" class="btn btn-info"
                popover="I will hide on blur"
                (mouseenter)="onMouseEnter($event)"
                (mouseleave)="onMouseLeave($event)">
            Hover over me!
        </button>
    `,
    styles: [
        `
        `
    ]
})
export class BootstrapPopoverComponent {
    private params: any;

    @ViewChild(PopoverDirective) public popover;

    agInit(params: any): void {
        this.params = params;
    }

    onMouseEnter($event) {
        this.popover.show()
    }

    onMouseLeave($event) {
    }
}