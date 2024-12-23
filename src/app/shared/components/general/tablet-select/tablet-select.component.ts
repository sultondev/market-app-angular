import { Component, Input, Output } from '@angular/core';
import { NgForOf, NgClass, TitleCasePipe } from '@angular/common';
import { EventEmitter } from '@angular/core';
import {
  ComputedOptionsTypes,
  TabletSelectModel,
} from '../../../types/interfaces/components-props';

@Component({
  selector: 'app-tablet-select',
  standalone: true,
  imports: [NgForOf, NgClass, TitleCasePipe],
  templateUrl: './tablet-select.component.html',
  styleUrl: './tablet-select.component.scss',
})
export class TabletSelectComponent {
  @Input() options: TabletSelectModel[] = [];

  @Input() modelValue: TabletSelectModel | TabletSelectModel[] = [];

  @Input() multiple: boolean = false;

  @Output() modelValueChange = new EventEmitter<
    TabletSelectModel | TabletSelectModel[]
  >();

  computedOptions: ComputedOptionsTypes[] = [];

  ngOnChanges(): void {
    this.updateComputedOptions();
  }

  // Precompute the checked property for each option
  updateComputedOptions() {
    this.computedOptions = this.options.map((option) => ({
      ...option,
      isActive: this.isSelected(option),
    }));
  }

  isSelected(option: TabletSelectModel): boolean {
    if (this.multiple && Array.isArray(this.modelValue)) {
      return this.modelValue.some(
        (selected) => selected.value === option.value
      );
    }
    return (
      !this.multiple &&
      (this.modelValue as TabletSelectModel)?.value === option.value
    );
  }

  selectSingle(option: TabletSelectModel) {
    this.modelValueChange.emit(option);
  }

  // Handle toggling for multi-selection
  toggleSelection(option: TabletSelectModel) {
    if (!this.multiple) return;

    const currentSelections = this.modelValue as TabletSelectModel[];
    const exists = currentSelections.some(
      (selected) => selected.value === option.value
    );

    const updatedSelections = exists
      ? currentSelections.filter((selected) => selected.value !== option.value)
      : [...currentSelections, option];

    this.modelValueChange.emit(updatedSelections);
  }
}
