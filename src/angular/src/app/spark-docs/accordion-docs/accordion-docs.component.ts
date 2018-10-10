import { Component } from '@angular/core';

@Component({
  selector: 'sprk-accordion-docs',
  template: `
      <div class="drizzle-o-ContentGrouping">
        <h2 class="drizzle-b-h2">Primary Accordion</h2>
        <sprk-accordion>
          <sprk-accordion-item title="This is a longer title than all the other accordion titles here. But, it works!">
            <p>
              This is some content This is some content.
              This is some content. This is some content
              This is some content. This is some content.
            </p>
          </sprk-accordion-item>
          <sprk-accordion-item title="This is another title">
            <p>This is some more content.</p>
          </sprk-accordion-item>
          <sprk-accordion-item title="This is another title">
            <p>This is some more content.</p>
          </sprk-accordion-item>
          <sprk-accordion-item title="This is another title">
            <p>This is some more content.</p>
          </sprk-accordion-item>
          <sprk-accordion-item title="This is another title">
            <p>This is some more content.</p>
          </sprk-accordion-item>
        </sprk-accordion>
      </div>
  `,
  styles: ['']
})
export class AccordionDocsComponent {
  constructor() {}
}
