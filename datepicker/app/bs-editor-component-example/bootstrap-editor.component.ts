import {Component} from "@angular/core";

import {GridOptions} from "ag-grid/main";
import {BootstrapDatePickerComponent} from "./date-picker.component";
import {BootstrapDropdownComponent} from "./dropdown.component";
import {BootstrapRadioComponent} from "./radio-buttons.component";
import {BootstrapPopoverComponent} from "./popover.component";


@Component({
    moduleId: module.id,
    selector: 'ag-bs-editor-component',
    templateUrl: 'bootstrap-editor.component.html'
})
export class BootstrapEditorComponent {
    public gridOptions: GridOptions;

    constructor() {
        this.gridOptions = <GridOptions>{
            rowData: this.createRowData(),
            columnDefs: this.createColumnDefs(),
            onGridReady: () => {
                this.gridOptions.api.sizeColumnsToFit();
            }
        }
    }

    private createColumnDefs() {
        return [
            {
                headerName: "Date Picker",
                field: "date",
                cellEditorFramework: BootstrapDatePickerComponent,
                editable: true
            },
            {
                headerName: "Dropdown",
                field: "fruit_vegetables",
                cellEditorFramework: BootstrapDropdownComponent,
                cellEditorParams: {
                    fruits: ['Apple', 'Orange', 'Banana'],
                    vegetables: ['Carrot', 'Pea', 'Broccoli']
                },
                editable: true
            },
                        {
                headerName: "Popover",
                field: "name",
                cellRendererFramework: BootstrapPopoverComponent
            },
            {
                headerName: "Radio (inline editing)",
                field: "on_off",
                cellRendererFramework: BootstrapRadioComponent
            }
        ];
    }

    private createRowData() {
        return [
            {date: "11/07/2017", fruit_vegetables: 'Apple', on_off: 'On', name: 'Sean'},
            {date: "20/02/2015", fruit_vegetables: 'Broccoli', on_off: 'On', name: 'Rob'},
            {date: "05/05/1969", fruit_vegetables: 'Carrot', on_off: 'Off', name: 'Alberto'},
            {date: "10/01/1980", fruit_vegetables: 'Banana', on_off: 'On', name: 'Petyo'}
        ];
    }
}