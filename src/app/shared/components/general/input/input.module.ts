import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from './input.component';

@NgModule({
  imports: [CommonModule, InputComponent],
  exports: [InputComponent], // Export the component to use it elsewhere
})
export class InputModule {}
