import { Component } from '@angular/core';
import { InputModule } from '../input/input.module';
import { FormsModule } from '@angular/forms';
import { TabletSelectComponent } from '../tablet-select/tablet-select.component';
import { TabletSelectModel } from '../../../types/interfaces/components-props';

@Component({
  selector: 'app-subscription',
  standalone: true,
  imports: [FormsModule, InputModule, TabletSelectComponent],
  templateUrl: './subscription.component.html',
  styleUrl: './subscription.component.scss',
})
export class SubscriptionComponent {
  email: string = '';
  subscriptionList = [
    {
      label: 'women',
      value: 'women',
    },
    {
      label: 'men',
      value: 'men',
    },
    {
      label: 'girls',
      value: 'girls',
    },
    {
      label: 'boys',
      value: 'boys',
    },
  ];

  selectedOption: TabletSelectModel[] = [this.subscriptionList[1]];

  subscribe() {
    if (this.email) {
      console.log('Subscribed with email:', this.email);
    } else {
      console.log('Please enter an email address.');
    }
  }
}
