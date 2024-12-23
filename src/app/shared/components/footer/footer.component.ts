import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [NgFor],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  handleClickToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }

  helpLinks = [
    {
      text: 'Delivery & returns',
      url: '#',
    },
    {
      text: 'FAQ',
      url: '#',
    },
    {
      text: 'Track order',
      url: '#',
    },
    {
      text: 'Contacts',
      url: '#',
    },
    {
      text: 'Blog',
      url: '#',
    },
  ];

  shopLinks = [
    {
      text: 'New arrivals',
      url: '#',
    },
    {
      text: 'Trending now',
      url: '#',
    },
    {
      text: 'Sales',
      url: '#',
    },
    {
      text: 'Brands',
      url: '#',
    },
  ];

  socialLinks = [
    {
      icon: 'sources/icons/social-networks/facebook.svg',
      networkName: 'facebook',
      url: '#',
    },
    {
      icon: 'sources/icons/social-networks/instagram.svg',
      networkName: 'instagram',
      url: '#',
    },
    {
      icon: 'sources/icons/social-networks/twitter.svg',
      networkName: 'twitter',
      url: '#',
    },
    {
      icon: 'sources/icons/social-networks/youtube.svg',
      networkName: 'youtube',
      url: '#',
    },
    {
      icon: 'sources/icons/social-networks/pinterest.svg',
      networkName: 'pinterest',
      url: '#',
    },
  ];
}
