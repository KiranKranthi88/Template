import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";
// ag-grid
import {AgGridModule} from "ag-grid-angular/main";
// application
import {AppComponent} from "./app.component";
// ng2 bootstrap
import {DatepickerModule, DropdownModule, ButtonsModule, PopoverModule} from 'ng2-bootstrap';
import {BootstrapDatePickerComponent} from "./bs-editor-component-example/date-picker.component";
import {BootstrapDropdownComponent} from "./bs-editor-component-example/dropdown.component";
import {BootstrapEditorComponent} from "./bs-editor-component-example/bootstrap-editor.component";
import {BootstrapRadioComponent} from "./bs-editor-component-example/radio-buttons.component";
import {BootstrapPopoverComponent} from "./bs-editor-component-example/popover.component";


@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        AgGridModule.withComponents(
            [
                BootstrapDatePickerComponent,
                BootstrapDropdownComponent,
                BootstrapRadioComponent,
                BootstrapPopoverComponent
            ]),
        DatepickerModule.forRoot(),
        DropdownModule.forRoot(),
        ButtonsModule.forRoot(),
        PopoverModule.forRoot()
    ],
    declarations: [
        AppComponent,
        BootstrapEditorComponent,
        BootstrapDatePickerComponent,
        BootstrapDropdownComponent,
        BootstrapRadioComponent,
        BootstrapPopoverComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
