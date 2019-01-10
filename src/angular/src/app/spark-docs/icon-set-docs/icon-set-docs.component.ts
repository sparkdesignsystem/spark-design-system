import { Component } from '@angular/core';

@Component({
  selector: 'sprk-icon-set-docs',
  template: `
    <div
      class="drizzle-o-ContentGrouping"
      *ngFor="let icon of icons; index as i"
    >
      <h2 class="drizzle-b-h2">{{ icon }}</h2>
      <sprk-icon
        iconType="{{ icon }}"
        additionalClasses=""
        idString="icon-{{ i }}-1"
      ></sprk-icon>
      <sprk-icon
        iconType="{{ icon }}"
        additionalClasses="sprk-c-Icon--l"
        idString="icon-{{ i }}-2"
      ></sprk-icon>
      <sprk-icon
        iconType="{{ icon }}"
        additionalClasses="sprk-c-Icon--xl"
        idString="icon-{{ i }}-3"
      ></sprk-icon>
      <sprk-icon
        iconType="{{ icon }}"
        additionalClasses="sprk-c-Icon--xxl"
        idString="icon-{{ i }}-4"
      ></sprk-icon>
    </div>
  `,
  styles: ['']
})
export class IconSetDocsComponent {
  constructor() {}

  icons = [
    'access',
    'amount-money',
    'application',
    'apply-now',
    'auto-loans',
    'baths',
    'beds',
    'bell',
    'blog',
    'calculator',
    'calendar',
    'call-team-member',
    'cash-back',
    'chat-online',
    'check-mark',
    'chevron-down',
    'chevron-down-circle',
    'chevron-down-circle-filled',
    'chevron-down-circle-two-color',
    'chevron-left',
    'chevron-left-circle',
    'chevron-left-circle-two-color',
    'chevron-right',
    'chevron-right-circle',
    'chevron-right-circle-two-color',
    'chevron-up',
    'chevron-up-circle',
    'chevron-up-circle-two-color',
    'clock',
    'close-circle',
    'cloud',
    'communication',
    'condo',
    'cooling',
    'credit',
    'credit-card-payoff',
    'dedicated-team',
    'desktop-computer',
    'document-review',
    'documents',
    'download',
    'editable',
    'educational-resources',
    'email',
    'exclamation',
    'exclamation-filled',
    'facebook',
    'facebook-two-color',
    'feedback',
    'find-agent',
    'free',
    'heat',
    'home',
    'home-improvement',
    'home-shopping',
    'home-size',
    'information',
    'instagram',
    'instagram-two-color',
    'land',
    'landline',
    'laptop',
    'large-purchase',
    'linkedin',
    'linkedin-two-color',
    'lock',
    'medical-expenses',
    'menu',
    'mls',
    'mobile',
    'mortgage',
    'multi-family',
    'one-time-update',
    'organize',
    'our-family',
    'parking',
    'payment',
    'payment-center',
    'pinterest',
    'pinterest-two-color',
    'play',
    'plus',
    'prequalified',
    'price-per-sq-ft',
    'print',
    'question',
    'rate-shield',
    'rates',
    'recurring-update',
    'refinance',
    'reviews',
    'rocket',
    'rocket-doc-two-color',
    'same-day',
    'savings',
    'schools',
    'search',
    'secure-process',
    'settings',
    'single',
    'small-business',
    'snapchat',
    'snapchat-two-color',
    'technology',
    'thumbs-up',
    'townhouse',
    'trash',
    'twitter',
    'twitter-two-color',
    'unlock',
    'update',
    'upload',
    'user',
    'verified-approval',
    'vip',
    'wifi',
    'written-check',
    'year-built',
    'youtube',
    'youtube-two-color'
  ];
}
