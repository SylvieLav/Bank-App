import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AppRoutingModule } from "../app-routing.module";
import { TransferCreateComponent } from "./routed/transfer-create/transfer-create.component";
import { TransferListComponent } from "./routed/transfer-list/transfer-list.component";

@NgModule({
    declarations: [TransferCreateComponent, TransferListComponent],
    imports: [CommonModule, FormsModule, ReactiveFormsModule, AppRoutingModule]
  })
  export class TransferModule {}