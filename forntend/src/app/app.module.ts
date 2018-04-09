import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';

import {AgGridModule} from 'ag-grid-angular';

import {AthleteService} from './services/athlete.service';
import {StaticDataService} from './services/static-data.service';

import {AppComponent} from './app.component';
import {GridComponent} from './grid/grid.component';
import {AthleteEditScreenComponent} from './athlete-edit-screen/athlete-edit-screen.component';

// ng2 bootstrap
import {DatepickerModule, BsDropdownModule, ButtonsModule, PopoverModule} from 'ngx-bootstrap';
import {BootstrapDatePickerComponent} from "./bs-editor-component-example/date-picker.component";
import {BootstrapDropdownComponent} from "./bs-editor-component-example/dropdown.component";
import {BootstrapEditorComponent} from "./bs-editor-component-example/bootstrap-editor.component";
import {BootstrapRadioComponent} from "./bs-editor-component-example/radio-buttons.component";
import {BootstrapPopoverComponent} from "./bs-editor-component-example/popover.component";

@NgModule({
    declarations: [
        AppComponent,
        GridComponent,
        AthleteEditScreenComponent,
        BootstrapEditorComponent,
        BootstrapDatePickerComponent,
        BootstrapDropdownComponent,
        BootstrapRadioComponent,
        BootstrapPopoverComponent,
        BootstrapEditorComponent
    ],
    imports: [
        BrowserModule,
        HttpModule,
        FormsModule,
        AgGridModule.withComponents([
                BootstrapDatePickerComponent,
                BootstrapDropdownComponent,
                BootstrapRadioComponent,
                BootstrapPopoverComponent]),
        DatepickerModule.forRoot(),
        BsDropdownModule.forRoot(),
        ButtonsModule.forRoot(),
        PopoverModule.forRoot()
    ],
    providers: [
        AthleteService,
        StaticDataService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
