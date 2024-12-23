import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { BlogCardComponent } from '../../cards/blog-card/blog-card.component';

@Component({
  selector: 'app-blog-section',
  standalone: true,
  imports: [NgFor, BlogCardComponent],
  templateUrl: './blog-section.component.html',
  styleUrl: './blog-section.component.scss',
})
export class BlogSectionComponent {
  brandsList = Array.from(
    [1, 2, 3, 4, 5, 6],
    (item) => `sources/images/brands/brand-logo-${item}.svg`
  );
}
