import { Component, Input } from '@angular/core';
import { BlogHashTagId } from '../../../types/types/blog-hashtags';
import { NgIf } from '@angular/common';
@Component({
  selector: 'app-blog-card',
  standalone: true,
  imports: [NgIf],
  templateUrl: './blog-card.component.html',
  styleUrl: './blog-card.component.scss',
})
export class BlogCardComponent {
  @Input() blogItem: {
    thumbnailUrl: string;
    heading: string;
    hashTag: BlogHashTagId;
    postedAt: string;
    commentsCount: number;
    shortContent: string;
  } = {
    thumbnailUrl: 'https://nestjs.com/img/nest-og.png',
    heading: 'test',
    hashTag: 1,
    postedAt: 'test',
    commentsCount: 2,
    shortContent:
      'loremaccess sdhjaslkijd liasjd iljasild jaisldjiaslj dilasj iljasij dasiljdiaslj dilasjilasjidljaildjiasljiasdljildas asdjaidasjil  jaisdilas j jasildas  asjdiasj ljlsal sddas asddas asdd sad asdasd as',
  };

  BlogHashTags = {
    1: 'fashion',
    2: 'travel',
    3: 'technology',
    // ... more tags
  };
}
