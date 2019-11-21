import { storyWrapper } from '../../../../../../.storybook/helpers/storyWrapper';
import { SprkFooterModule } from './sprk-footer.module';
import { RouterModule } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SprkFooterComponent } from './sprk-footer.component';

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
    info: `
  ##### For design and usage information check out the [documentation.](https://spark-docs.netlify.com/using-spark/components/footer)
    `,
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
              href: '/about-this',
              analyticsString: 'Link to Sub Item 1'
            },
            {
              text: 'About This Other Thing',
              href: '/about-this-other-thing'
            },
            {
              text: 'About That',
              href: '/about-that'
            },
            {
              text: 'Link Item',
              href: '/link-item',
              analyticsString: 'Link to Sub Item 1'
            },
            {
              text: 'This Link Item',
              href: '/this-link-item',
              analyticsString: 'Link to Sub Item 1'
            }
          ]
        },
        {
          heading: 'Learn More',
          links: [
            {
              text: 'About This Other Thing',
              href: '/learn-more-1'
            },
            {
              text: 'About This',
              href: '/learn-more-2'
            },
            {
              text: 'About That',
              href: '/learn-more-3'
            },
            {
              text: 'Link Item',
              href: '/learn-more-4',
              analyticsString: 'Link to Sub Item 1'
            }
          ]
        },
        {
          heading: 'Support',
          links: [
            {
              text: 'Share Your Screen',
              href: '/share-screen',
              analyticsString: 'Link to Sub Item 1'
            },
            {
              text: 'Opt Out',
              href: '/opt-out'
            },
            {
              text: 'About That',
              href: '/about-that'
            },
            {
              text: 'Disclosures and Other Things',
              href: '/things',
              analyticsString: 'Link to Sub Item 1'
            },
            {
              text: 'We Want Your Feedback',
              href: '/feedback',
              analyticsString: 'Link to Sub Item 1'
            }
          ]
        }
      ]"

      globalHeading="Global Links"
      [globalLinks]="[
        {
          text: 'Lorem ipsum dolor sit amet, consectetur.',
          href: '/global-1',
          icon: 'auto-loans',
          iconCSS: 'sprk-c-Icon--xl sprk-c-Icon--stroke-current-color',
          analytics: 'link-1',
          iconScreenReaderText: 'auto loans'
        },
        {
          text: 'Lorem ipsum dolor sit amet, consectetur.',
          href: '/global-2',
          imgSrc:
            'https://spark-assets.netlify.com/spark-placeholder.jpg',
          imgCSS: 'sprk-u-Width-20',
          imgAlt: 'Spark Placeholder Image',
          analytics: 'link-2'
        },
        {
          text: 'Lorem ipsum dolor sit amet, consectetur.',
          href: '/global-3',
          imgSrc:
            'https://spark-assets.netlify.com/spark-placeholder.jpg',
          imgCSS: 'sprk-u-Width-20',
          imgAlt: 'Spark Placeholder Image',
          analytics: 'link-3'
        },
        {
          text: 'Lorem ipsum dolor sit amet, consectetur.',
          href: '/global-4',
          icon: 'auto-loans',
          iconCSS: 'sprk-c-Icon--xl sprk-c-Icon--stroke-current-color',
          analytics: 'link-4',
          iconScreenReaderText: 'auto loans'
        },
        {
          text: 'Lorem ipsum dolor sit amet, consectetur.',
          href: '/global-5',
          icon: 'payment-center',
          iconCSS: 'sprk-c-Icon--xl sprk-c-Icon--stroke-current-color',
          analytics: 'link-5',
          iconScreenReaderText: 'payment center'
        }
      ]"

      [socialLinks]="[
        {
          href: '/icons-1',
          icon: 'facebook-two-color',
          iconCSS: 'sprk-c-Icon--l sprk-c-Icon--stroke-current-color',
          analytics: 'social-link-1',
          iconScreenReaderText: 'facebook'
        },
        {
          href: '/icons-2',
          icon: 'instagram-two-color',
          iconCSS: 'sprk-c-Icon--l sprk-c-Icon--stroke-current-color',
          analytics: 'social-link-2',
          iconScreenReaderText: 'instagram'
        },
        {
          href: '/icons-3',
          icon: 'twitter-two-color',
          iconCSS: 'sprk-c-Icon--l sprk-c-Icon--stroke-current-color',
          analytics: 'social-link-3',
          iconScreenReaderText: 'twitter'
        },
        {
          href: '/icons-4',
          icon: 'youtube-two-color',
          iconCSS: 'sprk-c-Icon--l sprk-c-Icon--stroke-current-color',
          analytics: 'social-link-4',
          iconScreenReaderText: 'youtube'
        }
      ]"

      [badgeLinks]="[
        {
          href: '/badge-1',
          icon: 'townhouse',
          iconCSS: 'sprk-c-Icon--l sprk-c-Icon--stroke-current-color',
          analytics: 'link-1',
          iconScreenReaderText: 'townhouse'
        },
        {
          href: '/badge-2',
          icon: 'townhouse',
          iconCSS: 'sprk-c-Icon--l sprk-c-Icon--stroke-current-color',
          analytics: 'link-2',
          iconScreenReaderText: 'townhouse'
        },
        {
          href: '/badge-3',
          icon: 'townhouse',
          iconCSS: 'sprk-c-Icon--l sprk-c-Icon--stroke-current-color',
          analytics: 'link-3',
          iconScreenReaderText: 'townhouse'
        }
      ]"

      awardsHeading="Awards"
      [awards]="[
        {
          href: '/awards-1',
          imgSrc:
            'https://spark-assets.netlify.com/spark-placeholder.jpg',
          imgCSS: 'sprk-u-Width-50',
          imgAlt: 'placeholder',
          analytics: 'awards-link-1'
        },
        {
          href: '/awards-2',
          imgSrc:
            'https://spark-assets.netlify.com/spark-placeholder.jpg',
          imgCSS: 'sprk-u-Width-50',
          imgAlt: 'placeholder',
          analytics: 'awards-link-2'
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
          analytics: 'disclaimer'
        }
      ]"
    >
    </sprk-footer>
  `,
});

defaultStory.story = {
  name: 'Default'
};
