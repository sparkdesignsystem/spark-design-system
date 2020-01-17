import { storyWrapper } from '../../../../../../.storybook/helpers/storyWrapper';
import { SprkFooterModule } from './sprk-footer.module';
import { RouterModule } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SprkFooterComponent } from './sprk-footer.component';
import { markdownDocumentationLinkBuilder } from '../../../../../../../storybook-utilities/markdownDocumentationLinkBuilder';

export default {
  title: 'Components/Footer',
  component: SprkFooterComponent,
  decorators: [
    storyWrapper(
      storyContent => (
        `<div class="sprk-o-Box">${ storyContent }<div>`
      )
    )
  ],
  parameters: {
    info: `${markdownDocumentationLinkBuilder('components', 'footer')}`,
    docs: { iframeHeight: 800 },
  },
};

const modules = {
  imports: [
    SprkFooterModule,
    RouterModule.forRoot([{
      path: 'iframe.html',
      component: SprkFooterComponent,
    }]),
    BrowserAnimationsModule,
  ],
  providers: [{ provide: APP_BASE_HREF, useValue: '/' }]
};

export const defaultStory = () => ({
  moduleMetadata: modules,
  template: `
    <sprk-footer
      idString="footer-1"
      [localLinks]="[
        {
          heading: 'Site Links',
          links: [
            {
              text: 'About This',
              href: '#nogo',
              analyticsString: 'Link to Sub Item 1'
            },
            {
              text: 'About This Other Thing',
              href: '#nogo'
            },
            {
              text: 'About That',
              href: '#nogo'
            },
            {
              text: 'Link Item',
              href: '#nogo',
              analyticsString: 'Link to Sub Item 1'
            },
            {
              text: 'This Link Item',
              href: '#nogo',
              analyticsString: 'Link to Sub Item 1'
            }
          ]
        },
        {
          heading: 'Learn More',
          links: [
            {
              text: 'About This Other Thing',
              href: '#nogo'
            },
            {
              text: 'About This',
              href: '#nogo'
            },
            {
              text: 'About That',
              href: '#nogo'
            },
            {
              text: 'Link Item',
              href: '#nogo',
              analyticsString: 'Link to Sub Item 1'
            }
          ]
        },
        {
          heading: 'Support',
          links: [
            {
              text: 'Share Your Screen',
              href: '#nogo',
              analyticsString: 'Link to Sub Item 1'
            },
            {
              text: 'Opt Out',
              href: '#nogo'
            },
            {
              text: 'About That',
              href: '#nogo'
            },
            {
              text: 'Disclosures and Other Things',
              href: '#nogo',
              analyticsString: 'Link to Sub Item 1'
            },
            {
              text: 'We Want Your Feedback',
              href: '#nogo',
              analyticsString: 'Link to Sub Item 1'
            }
          ]
        }
      ]"

      globalHeading="Global Links"
      [globalLinks]="[
        {
          text: 'Lorem ipsum dolor sit amet, consectetur.',
          href: '#nogo',
          imgSrc:
            'https://spark-assets.netlify.com/spark-logo-updated.svg',
          analyticsString: 'link-1',
          iconScreenReaderText: 'auto loans'
        },
        {
          text: 'Lorem ipsum dolor sit amet, consectetur.',
          href: '#nogo',
          imgSrc:
            'https://spark-assets.netlify.com/spark-logo-updated.svg',
          imgAlt: 'Spark Placeholder Image',
          analyticsString: 'link-2'
        },
        {
          text: 'Lorem ipsum dolor sit amet, consectetur.',
          href: '#nogo',
          imgSrc:
            'https://spark-assets.netlify.com/spark-logo-updated.svg',
          imgAlt: 'Spark Placeholder Image',
          analyticsString: 'link-3'
        },
        {
          text: 'Lorem ipsum dolor sit amet, consectetur.',
          href: '#nogo',
          imgSrc:
            'https://spark-assets.netlify.com/spark-logo-updated.svg',
          analyticsString: 'link-4',
          iconScreenReaderText: 'auto loans'
        }
      ]"

      [socialLinks]="[
        {
          href: '#nogo',
          icon: 'facebook-two-color',
          iconCSS: 'sprk-c-Icon--l sprk-c-Icon--stroke-current-color',
          analyticsString: 'social-link-1',
          iconScreenReaderText: 'facebook'
        },
        {
          href: '#nogo',
          icon: 'instagram-two-color',
          iconCSS: 'sprk-c-Icon--l sprk-c-Icon--stroke-current-color',
          analyticsString: 'social-link-2',
          iconScreenReaderText: 'instagram'
        },
        {
          href: '#nogo',
          icon: 'twitter-two-color',
          iconCSS: 'sprk-c-Icon--l sprk-c-Icon--stroke-current-color',
          analyticsString: 'social-link-3',
          iconScreenReaderText: 'twitter'
        },
        {
          href: '#nogo',
          icon: 'youtube-two-color',
          iconCSS: 'sprk-c-Icon--l sprk-c-Icon--stroke-current-color',
          analyticsString: 'social-link-4',
          iconScreenReaderText: 'youtube'
        }
      ]"

      [badgeLinks]="[
        {
          href: '#nogo',
          icon: 'townhouse',
          iconCSS: 'sprk-c-Icon--l sprk-c-Icon--stroke-current-color',
          analyticsString: 'link-1',
          iconScreenReaderText: 'townhouse'
        },
        {
          href: '#nogo',
          icon: 'townhouse',
          iconCSS: 'sprk-c-Icon--l sprk-c-Icon--stroke-current-color',
          analyticsString: 'link-2',
          iconScreenReaderText: 'townhouse'
        },
        {
          href: '#nogo',
          icon: 'townhouse',
          iconCSS: 'sprk-c-Icon--l sprk-c-Icon--stroke-current-color',
          analyticsString: 'link-3',
          iconScreenReaderText: 'townhouse'
        }
      ]"

      awardsHeading="Awards"
      [awards]="[
        {
          href: '#nogo',
          imgSrc:
            'https://spark-assets.netlify.com/spark-logo-mark.svg',
          imgAlt: 'placeholder',
          analyticsString: 'awards-link-1'
        },
        {
          href: '#nogo',
          imgSrc:
            'https://spark-assets.netlify.com/spark-logo-mark.svg',
          imgAlt: 'placeholder',
          analyticsString: 'awards-link-2'
        }
      ]"

      connectHeading="Connect With Us"
      [disclaimerText]="[
        {
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        },
        {
          text:
            'Incididunt ut labore et dolore magna aliqua.
             Ut enim ad minim veniam.'
        },
        {
          text: 'Lorem ipsum dolor sit amet, consectetur.'
        },
        {
          text: 'Lorem ipsum dolor sit amet, consectetur.'
        }
      ]"
      [disclaimerToggle]="[
        {
          title: 'My Award Disclaimer',
          body:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit.
             Aliquam in laoreet ante.',
          analyticsString: 'disclaimer'
        }
      ]"
    >
    </sprk-footer>
  `,
});

defaultStory.story = {
  name: 'Default'
};
