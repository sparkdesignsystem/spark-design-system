import { Component } from '@angular/core';

@Component({
  selector: 'sprk-card-docs',
  template: `
    <div class="drizzle-o-ContentGrouping sprk-u-mbh">
      <h2 class="drizzle-b-h2 sprk-u-mbl">
        Stack With Buttons
      </h2>

      <sprk-stack itemSpacing="medium">
        <button sprkButton sprkStackItem>Hello, World.</button>
        <button sprkButton sprkStackItem class="sprk-c-Button--secondary">Hello, World.</button>
      </sprk-stack>
    </div>

    <div class="drizzle-o-ContentGrouping sprk-u-mbh">
      <h2 class="drizzle-b-h2 sprk-u-mbl">
        Stack With Buttons, Side by Side at Medium breakpoint, Huge size spacing
      </h2>

      <sprk-stack itemSpacing="huge" splitAt="medium">
        <button sprkButton sprkStackItem>Hello, World.</button>
        <button sprkButton sprkStackItem additionalClasses="sprk-c-Button--secondary">Hello, World.</button>
      </sprk-stack>
    </div>

    <div class="drizzle-o-ContentGrouping sprk-u-mbh">
      <h2 class="drizzle-b-h2 sprk-u-mbl">
        Stack With Three Cards
      </h2>

      <sprk-stack itemSpacing="huge" splitAt="large">
        <sprk-card
          sprkStackItem
          additionalClasses="sprk-o-Stack sprk-o-Stack__item--flex@m"
          cardType="teaser"
          title="Test Card for Stack!"
          body="Placeholder text that is here in this card!"
          imgSrc="https://sparkdesignsystem.com/assets/toolkit/images/desktop.jpg"
          imgAlt="Placeholder Image Alt Text"
          imgHref="www.sparkdesignsystem.com"
          ctaType="button"
          ctaText="Neat!"
          ctaHref="www.sparkdesignsystem.com"
          ctaAnalytics="Link: Spark">
        </sprk-card>

        <sprk-card
          sprkStackItem
          additionalClasses="sprk-o-Stack sprk-o-Stack__item--flex@m"
          cardType="teaser"
          title="Spark Design System"
          body="Placeholder text that is here in this card!"
          imgSrc="https://sparkdesignsystem.com/assets/toolkit/images/desktop.jpg"
          imgAlt="Placeholder Image Alt Text"
          imgHref="www.sparkdesignsystem.com"
          ctaType="button"
          ctaText="Neat!"
          ctaHref="www.sparkdesignsystem.com"
          ctaAnalytics="Link: Spark">
        </sprk-card>

        <sprk-card
          sprkStackItem
          additionalClasses="sprk-o-Stack sprk-o-Stack__item--flex@m"
          cardType="teaser"
          title="Spark Cards in a Stack Component"
          body="Placeholder text that is here in this card!"
          imgSrc="https://sparkdesignsystem.com/assets/toolkit/images/desktop.jpg"
          imgAlt="Placeholder Image Alt Text"
          imgHref="www.sparkdesignsystem.com"
          ctaType="button"
          ctaText="Neat!"
          ctaHref="www.sparkdesignsystem.com"
          ctaAnalytics="Link: Spark">
        </sprk-card>
      </sprk-stack>
    </div>

    <div class="drizzle-o-ContentGrouping sprk-u-mbh">
      <h2 class="drizzle-b-h2 sprk-u-mbl">
        Stack With Four Cols at Tiny Breakpoint
      </h2>
      <sprk-stack splitAt="tiny">
        <div sprkStackItem class="sprk-o-Stack__item--fourth@xs">Tests</div>
        <div sprkStackItem class="sprk-o-Stack__item--fourth@xs">Tests</div>
        <div sprkStackItem class="sprk-o-Stack__item--fourth@xs">Tests</div>
        <div sprkStackItem class="sprk-o-Stack__item--fourth@xs">Tests</div>
      </sprk-stack>
    </div>

    <div class="drizzle-o-ContentGrouping sprk-u-mbh">
      <h2 class="drizzle-b-h2">
        Stack With Two Cols at Large Breakpoint
      </h2>
      <sprk-stack splitAt="large">
        <div sprkStackItem class="sprk-o-Stack__item--half@l">Tests</div>
        <div sprkStackItem class="sprk-o-Stack__item--half@l">Tests</div>
      </sprk-stack>
    </div>

    <div class="drizzle-o-ContentGrouping sprk-u-mbh">
      <h2 class="drizzle-b-h2">
        Stack With Three Cols at Medium Breakpoint
      </h2>

      <sprk-stack splitAt="medium">
        <div sprkStackItem class="sprk-o-Stack__item--third@m sprk-u-pam">
          <h2 class="sprk-b-TypeDisplayTwo sprk-u-mbm">
            Heading Example
          </h2>
          <button sprkButton>Hello, World.</button>
        </div>

        <div sprkStackItem class="sprk-o-Stack__item--third@m sprk-u-pam">
          <h2 class="sprk-b-TypeDisplayTwo sprk-u-mbm">
            Heading Example
          </h2>
          <button sprkButton>Hello, World.</button>
        </div>

        <div sprkStackItem class="sprk-o-Stack__item--third@m sprk-u-pam">
          <h2 class="sprk-b-TypeDisplayTwo sprk-u-mbm">
            Heading Example
          </h2>
          <button sprkButton>Hello, World.</button>
        </div>
      </sprk-stack>
    </div>

    <div class="drizzle-o-ContentGrouping sprk-u-mbh">
      <h2 class="drizzle-b-h2">
        Stack With Six Cols at Extra Large Breakpoint
      </h2>

      <sprk-stack splitAt="huge">
        <div sprkStackItem class="sprk-o-Stack__item--sixth@xl sprk-u-pam">
          <h2 class="sprk-b-TypeDisplayTwo sprk-u-mbm">
            Heading Example
          </h2>
          <form>
            <sprk-input-container>
              <label sprkLabel>Name</label>
              <input
                name="text_input"
                type="text"
                [(ngModel)]="text_input"
                required
                #textInput="ngModel"
                sprkInput>
              <p sprkHelperText>Please enter some input.</p>
              <span [hidden]="textInput.valid || textInput.pristine" sprkFieldError>
                <sprk-icon iconType="exclamation" additionalClasses="sprk-b-ErrorIcon"></sprk-icon>
                <div class="sprk-b-ErrorText">This field is required.</div>
              </span>
            </sprk-input-container>

            <sprk-input-container>
              <label sprkLabel>Last Name</label>
              <input
                name="text_input"
                type="text"
                [(ngModel)]="text_input"
                required
                #textInput="ngModel"
                sprkInput>
              <p sprkHelperText>Please enter some input.</p>
              <span [hidden]="textInput.valid || textInput.pristine" sprkFieldError>
                <sprk-icon iconType="exclamation" additionalClasses="sprk-b-ErrorIcon"></sprk-icon>
                <div class="sprk-b-ErrorText">This field is required.</div>
              </span>
            </sprk-input-container>

            <sprk-input-container>
              <label sprkLabel>Address</label>
              <input
                name="text_input"
                type="text"
                [(ngModel)]="text_input"
                required
                #textInput="ngModel"
                sprkInput>
              <p sprkHelperText>Please enter some input.</p>
              <span [hidden]="textInput.valid || textInput.pristine" sprkFieldError>
                <sprk-icon iconType="exclamation" additionalClasses="sprk-b-ErrorIcon"></sprk-icon>
                <div class="sprk-b-ErrorText">This field is required.</div>
              </span>
            </sprk-input-container>
            </form>
          <button sprkButton>Hello, World.</button>
        </div>

        <div sprkStackItem class="sprk-o-Stack__item--sixth@xl sprk-u-pam">
          <h2 class="sprk-b-TypeDisplayTwo sprk-u-mbm">
            Heading Example
          </h2>
          <form>
            <sprk-input-container>
              <label sprkLabel>Text Input *</label>
              <input
                name="text_input"
                type="text"
                [(ngModel)]="text_input"
                required
                #textInput="ngModel"
                sprkInput>
              <p sprkHelperText>Please enter some input.</p>
              <span [hidden]="textInput.valid || textInput.pristine" sprkFieldError>
                <sprk-icon iconType="exclamation" additionalClasses="sprk-b-ErrorIcon"></sprk-icon>
                <div class="sprk-b-ErrorText">This field is required.</div>
              </span>
            </sprk-input-container>
            </form>
          <button sprkButton>Hello, World.</button>
        </div>

        <div sprkStackItem class="sprk-o-Stack__item--sixth@xl sprk-u-pam">
          <h2 class="sprk-b-TypeDisplayTwo sprk-u-mbm">
            Heading Example
          </h2>
          <form>
            <sprk-input-container>
              <label sprkLabel>Text Input *</label>
              <input
                name="text_input"
                type="text"
                [(ngModel)]="text_input"
                required
                #textInput="ngModel"
                sprkInput>
              <p sprkHelperText>Please enter some input.</p>
              <span [hidden]="textInput.valid || textInput.pristine" sprkFieldError>
                <sprk-icon iconType="exclamation" additionalClasses="sprk-b-ErrorIcon"></sprk-icon>
                <div class="sprk-b-ErrorText">This field is required.</div>
              </span>
            </sprk-input-container>
            </form>
          <button sprkButton>Hello, World.</button>
        </div>

        <div sprkStackItem class="sprk-o-Stack__item--sixth@xl sprk-u-pam">
          <h2 class="sprk-b-TypeDisplayTwo sprk-u-mbm">
            Heading Example
          </h2>
          <form>
            <sprk-input-container>
              <label sprkLabel>Text Input *</label>
              <input
                name="text_input"
                type="text"
                [(ngModel)]="text_input"
                required
                #textInput="ngModel"
                sprkInput>
              <p sprkHelperText>Please enter some input.</p>
              <span [hidden]="textInput.valid || textInput.pristine" sprkFieldError>
                <sprk-icon iconType="exclamation" additionalClasses="sprk-b-ErrorIcon"></sprk-icon>
                <div class="sprk-b-ErrorText">This field is required.</div>
              </span>
            </sprk-input-container>
            </form>
          <button sprkButton>Hello, World.</button>
        </div>

        <div sprkStackItem class="sprk-o-Stack__item--sixth@xl sprk-u-pam">
          <h2 class="sprk-b-TypeDisplayTwo sprk-u-mbm">
            Heading Example
          </h2>
          <form>
            <sprk-input-container>
              <label sprkLabel>Text Input *</label>
              <input
                name="text_input"
                type="text"
                [(ngModel)]="text_input"
                required
                #textInput="ngModel"
                sprkInput>
              <p sprkHelperText>Please enter some input.</p>
              <span [hidden]="textInput.valid || textInput.pristine" sprkFieldError>
                <sprk-icon iconType="exclamation" additionalClasses="sprk-b-ErrorIcon"></sprk-icon>
                <div class="sprk-b-ErrorText">This field is required.</div>
              </span>
            </sprk-input-container>
            </form>
          <button sprkButton>Hello, World.</button>
        </div>

        <div sprkStackItem class="sprk-o-Stack__item--sixth@xl sprk-u-pam">
          <h2 class="sprk-b-TypeDisplayTwo sprk-u-mbm">
            Heading Example
          </h2>
          <form>
            <sprk-input-container>
              <label sprkLabel>Text Input *</label>
              <input
                name="text_input"
                type="text"
                [(ngModel)]="text_input"
                required
                #textInput="ngModel"
                sprkInput>
              <p sprkHelperText>Please enter some input.</p>
              <span [hidden]="textInput.valid || textInput.pristine" sprkFieldError>
                <sprk-icon iconType="exclamation" additionalClasses="sprk-b-ErrorIcon"></sprk-icon>
                <div class="sprk-b-ErrorText">This field is required.</div>
              </span>
            </sprk-input-container>
            </form>
          <button sprkButton>Hello, World.</button>
        </div>
      </sprk-stack>
    </div>
  `,
  styles: ['']
})
export class StackDocsComponent {
  constructor() {}
}
