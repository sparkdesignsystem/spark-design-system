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
    'bell-filled',
    'blog',
    'calculator',
    'calendar',
    'call-team-member',
    'cash-back',
    'chat-online',
    'chat-online-filled',
    'check-mark',
    'check-mark-filled',
    'chevron-down',
    'chevron-down-circle',
    'chevron-down-circle-filled',
    'chevron-down-circle-two-color',
    'chevron-down-filled',
    'chevron-left',
    'chevron-left-circle',
    'chevron-left-circle-two-color',
    'chevron-left-filled',
    'chevron-right',
    'chevron-right-circle',
    'chevron-right-circle-two-color',
    'chevron-right-filled',
    'chevron-up',
    'chevron-up-circle',
    'chevron-up-circle-two-color',
    'chevron-up-filled',
    'clock',
    'clock-filled',
    'close',
    'close-circle',
    'close-filled',
    'cloud',
    'cloud-filled',
    'communication',
    'communication-filled',
    'condo',
    'cooling',
    'credit',
    'credit-card-payoff',
    'dedicated-team',
    'desktop-computer',
    'document-review',
    'document-review-filled',
    'documents',
    'download',
    'download-filled',
    'editable',
    'educational-resources',
    'email',
    'email-filled',
    'exclamation',
    'exclamation-filled',
    'facebook',
    'facebook-two-color',
    'feedback',
    'feedback-filled',
    'find-agent',
    'free',
    'heat',
    'home',
    'home-improvement',
    'home-shopping',
    'home-size',
    'information',
    'information-filled',
    'instagram',
    'instagram-two-color',
    'land',
    'landline',
    'landline-filled',
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
    'organize-filled',
    'our-family',
    'parking',
    'payment',
    'payment-center',
    'pinterest',
    'pinterest-two-color',
    'play',
    'plus',
    'plus-filled',
    'prequalified',
    'prequalified-filled',
    'price-per-sq-ft',
    'print',
    'question',
    'question-filled',
    'rate-shield',
    'rate-shield-filled',
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
    'settings-filled',
    'single',
    'small-business',
    'snapchat',
    'snapchat-two-color',
    'technology',
    'thumbs-up',
    'townhouse',
    'trash',
    'trash-filled',
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
