import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatStepperModule } from '@angular/material/stepper';

@NgModule({
    exports: [CommonModule, MatTableModule, MatPaginatorModule, MatStepperModule],
})
export class AngularMaterialModule {}
