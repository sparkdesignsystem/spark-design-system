import { Component } from '@angular/core';

@Component({
  selector: 'sprk-card-docs',
  template: `
    <div class="drizzle-o-ContentGrouping">
      <h2 class="drizzle-b-h2">
        Base
      </h2>

      <sprk-card cardType="base" idString="card-1">
        <h4>This is a base Spark card!</h4>
      </sprk-card>
    </div>

    <div class="drizzle-o-ContentGrouping">
      <h2 class="drizzle-b-h2">
        Base Card: Omitted cardType
      </h2>

      <sprk-card idString="card-2">
        <h4>This is a base Spark card!</h4>
      </sprk-card>
    </div>

    <div class="drizzle-o-ContentGrouping">
      <h2 class="drizzle-b-h2">
        Base With Random Things
      </h2>

      <sprk-card cardType="base" idString="card-3">
        <h4>
          This is a base Spark card!
        </h4>

        <p>
          You can put anything in here, really.
        </p>

        <sprk-icon iconType="bell" additionalClasses="sprk-c-Icon--l"></sprk-icon>

        <sprk-unordered-list listType="indented">
          <sprk-list-item>hi</sprk-list-item>
          <sprk-list-item>ciao</sprk-list-item>
          <sprk-list-item>bonjour</sprk-list-item>
        </sprk-unordered-list>
      </sprk-card>
    </div>

    <div class="drizzle-o-ContentGrouping">
      <h2 class="drizzle-b-h2">
        Base With Additional Classes
      </h2>

      <sprk-card cardType="base" additionalClasses="sprk-u-mbl" idString="card-4">
        <h4>
          This is a base Spark card!
        </h4>

        <p>
          You can put anything in here, really.
        </p>
      </sprk-card>
    </div>

    <div class="drizzle-o-ContentGrouping">
      <h2 class="drizzle-b-h2">
        Teaser With Button CTA
      </h2>

      <sprk-card
        media="img"
        cardType="teaser"
        title="Spark Card With Button CTA!"
        body="
          Content placeholder! Things! Content placeholder!
          Things! Content placeholder! Things! Content placeholder!
          Things!
        "
        imgSrc="https://sparkdesignsystem.com/assets/toolkit/images/desktop.jpg"
        imgAlt="Placeholder Image"
        imgHref="www.sparkdesignsystem.com"
        ctaType="button"
        ctaText="Learn!"
        ctaHref="www.sparkdesignsystem.com"
        ctaAnalytics="Button: Spark"
        idString="card-5">
      </sprk-card>
    </div>

    <div class="drizzle-o-ContentGrouping">
      <h2 class="drizzle-b-h2">
        Teaser With Icon
      </h2>

      <sprk-card
        media="icon"
        iconType="chat"
        iconHref="https://sparkdesignsystem.com"
        additionalClassesIcon="sprk-c-Icon--l sprk-b-TypeBodyTwo"
        cardType="teaser"
        title="Spark Card With Button CTA!"
        body="Content placeholder! Things! Content placeholder!"
        imgSrc="https://sparkdesignsystem.com/assets/toolkit/images/desktop.jpg"
        imgAlt="Placeholder Image"
        imgHref="www.sparkdesignsystem.com"
        ctaType="button"
        ctaText="Learn!"
        ctaHref="www.sparkdesignsystem.com"
        ctaAnalytics="Button: Spark"
        idString="card-6">
      </sprk-card>
    </div>

    <div class="drizzle-o-ContentGrouping">
      <h2 class="drizzle-b-h2">
        Teaser With Link CTA
      </h2>

      <sprk-card
        cardType="teaser"
        media="img"
        title="Spark Card with a link CTA"
        body="
          Content placeholder! Things! Content placeholder!
          Things! Content placeholder! Things! Content placeholder!
          Things!
        "
        imgSrc="https://sparkdesignsystem.com/assets/toolkit/images/desktop.jpg"
        imgAlt="Placeholder Image"
        imgHref="www.sparkdesignsystem.com"
        ctaType="link"
        ctaText="Neat!"
        ctaHref="www.sparkdesignsystem.com"
        ctaAnalytics="Link: Spark"
        idString="card-6">
      </sprk-card>
    </div>

    <div class="drizzle-o-ContentGrouping">
      <h2 class="drizzle-b-h2">
        Teaser With Heading On Top
      </h2>

      <sprk-card
        cardType="teaserHeading"
        title="Teaser Heading On Top of Image"
        media="img"
        body="
          Placeholder text that is here in this card!
        "
        imgSrc="https://sparkdesignsystem.com/assets/toolkit/images/desktop.jpg"
        imgAlt="Placeholder Image"
        imgHref="www.sparkdesignsystem.com"
        ctaType="link"
        ctaText="Neat!"
        ctaHref="www.sparkdesignsystem.com"
        ctaAnalytics="Link: Spark"
        idString="card-7">
      </sprk-card>
    </div>

    <div class="drizzle-o-ContentGrouping">
      <h2 class="drizzle-b-h2">
        Teaser With Icon And Heading On Top
      </h2>

      <sprk-card
        media="icon"
        iconType="calculator"
        iconHref="https://sparkdesignsystem.com"
        additionalClassesIcon="sprk-c-Icon--l sprk-b-TypeBodyTwo"
        cardType="teaserHeading"
        title="Spark Card With Button CTA!"
        body="
          Content placeholder! Things! Content placeholder!
          Things! Content placeholder! Things! Content placeholder!
          Things!
        "
        imgSrc="https://sparkdesignsystem.com/assets/toolkit/images/desktop.jpg"
        imgAlt="Placeholder Image"
        imgHref="www.sparkdesignsystem.com"
        ctaType="button"
        ctaText="Learn!"
        ctaHref="www.sparkdesignsystem.com"
        ctaAnalytics="Button: Spark"
        idString="card-8">
      </sprk-card>
    </div>

    <div class="drizzle-o-ContentGrouping">
      <h2 class="drizzle-b-h2">
        Card Layout - Two Up
      </h2>

      <div class="sprk-o-CenteredColumn">
        <sprk-stack splitAt="medium" itemSpacing="medium" additionalClasses="sprk-o-Stack--center-row">
          <sprk-card
            sprkStackItem
            additionalClasses="sprk-o-Stack sprk-o-Stack__item--flex@m"
            cardType="teaser"
            title="First Card Out Of Three Cards In Row"
            body="Placeholder text that is here in this card!"
            imgSrc="https://sparkdesignsystem.com/assets/toolkit/images/desktop.jpg"
            imgAlt="Placeholder Image"
            imgHref="www.sparkdesignsystem.com"
            ctaType="button"
            ctaText="Neat!"
            ctaHref="www.sparkdesignsystem.com"
            ctaAnalytics="Link: Spark"
            idString="card-9">
          </sprk-card>

          <sprk-card
            sprkStackItem
            additionalClasses="sprk-o-Stack sprk-o-Stack__item--flex@m"
            cardType="teaser"
            title="Card Out Of Three Cards In Row Card Out Of Three Cards In Row"
            body="
              Placeholder text that is here in this card!
              Placeholder text that is here in this card! Placeholder text that is here in this card!"
            imgSrc="https://sparkdesignsystem.com/assets/toolkit/images/desktop.jpg"
            imgAlt="Placeholder Image"
            imgHref="www.sparkdesignsystem.com"
            ctaType="button"
            ctaText="Neat!"
            ctaHref="www.sparkdesignsystem.com"
            ctaAnalytics="Link: Spark"
            idString="card-10">
          </sprk-card>

        </sprk-stack>
      </div>
    </div>

    <div class="drizzle-o-ContentGrouping">
      <h2 class="drizzle-b-h2">
        Card Layout - Three Up
      </h2>

      <sprk-stack splitAt="medium" itemSpacing="huge" additionalClasses="sprk-o-Stack--center-row">
        <sprk-card
          sprkStackItem
          additionalClasses="sprk-o-Stack sprk-o-Stack__item--flex@m"
          cardType="teaser"
          title="First Card Out Of Three Cards In Row"
          body="Placeholder text that is here in this card!"
          imgSrc="https://sparkdesignsystem.com/assets/toolkit/images/desktop.jpg"
          imgAlt="Placeholder Image Alt Text"
          imgHref="www.sparkdesignsystem.com"
          ctaType="button"
          ctaText="Neat!"
          ctaHref="www.sparkdesignsystem.com"
          ctaAnalytics="Link: Spark"
          idString="card-11">
        </sprk-card>

        <sprk-card
          sprkStackItem
          additionalClasses="sprk-o-Stack sprk-o-Stack__item--flex@m"
          cardType="teaser"
          title="Card heading! Card heading! Card heading! Card heading!"
          body="Placeholder text that is here in this card!"
          imgSrc="https://sparkdesignsystem.com/assets/toolkit/images/desktop.jpg"
          imgAlt="Placeholder Image Alt Text"
          imgHref="www.sparkdesignsystem.com"
          ctaType="button"
          ctaText="Neat!"
          ctaHref="www.sparkdesignsystem.com"
          ctaAnalytics="Link: Spark"
          idString="card-12">
        </sprk-card>

        <sprk-card
          sprkStackItem
          additionalClasses="sprk-o-Stack sprk-o-Stack__item--flex@m"
          cardType="teaser"
          title="Card heading!"
          body="Placeholder text that is here in this card!"
          imgSrc="https://sparkdesignsystem.com/assets/toolkit/images/desktop.jpg"
          imgAlt="Placeholder Image Alt Text"
          imgHref="www.sparkdesignsystem.com"
          ctaType="button"
          ctaText="Neat!"
          ctaHref="www.sparkdesignsystem.com"
          ctaAnalytics="Link: Spark"
          idString="card-13">
        </sprk-card>
      </sprk-stack>
    </div>

    <div class="drizzle-o-ContentGrouping">
      <h2 class="drizzle-b-h2">
        Card Layout - Four Up
      </h2>

      <sprk-stack splitAt="huge" itemSpacing="small" additionalClasses="sprk-o-Stack--center-row">
        <sprk-card
          sprkStackItem
          additionalClasses="sprk-o-Stack sprk-o-Stack__item--flex@xl"
          cardType="teaserHeading"
          title="First Card Out Of Three Cards In Row"
          body="Placeholder text that is here in this card!"
          imgSrc="https://sparkdesignsystem.com/assets/toolkit/images/desktop.jpg"
          imgAlt="Placeholder Image Alt Text"
          imgHref="www.sparkdesignsystem.com"
          ctaType="button"
          ctaText="Neat!"
          ctaHref="www.sparkdesignsystem.com"
          ctaAnalytics="Link: Spark"
          idString="card-14">
        </sprk-card>

        <sprk-card
          sprkStackItem
          additionalClasses="sprk-o-Stack sprk-o-Stack__item--flex@xl"
          cardType="teaserHeading"
          title="Card heading! Card heading! Card heading!"
          body="Placeholder text that is here in this card!"
          imgSrc="https://sparkdesignsystem.com/assets/toolkit/images/desktop.jpg"
          imgAlt="Placeholder Image Alt Text"
          imgHref="www.sparkdesignsystem.com"
          ctaType="button"
          ctaText="Neat!"
          ctaHref="www.sparkdesignsystem.com"
          ctaAnalytics="Link: Spark"
          idString="card-15">
        </sprk-card>

        <sprk-card
          sprkStackItem
          additionalClasses="sprk-o-Stack sprk-o-Stack__item--flex@xl"
          cardType="teaserHeading"
          title="Card heading! Card heading!"
          body="Placeholder text that is here in this card!"
          imgSrc="https://sparkdesignsystem.com/assets/toolkit/images/desktop.jpg"
          imgAlt="Placeholder Image Alt Text"
          imgHref="www.sparkdesignsystem.com"
          ctaType="button"
          ctaText="Neat!"
          ctaHref="www.sparkdesignsystem.com"
          ctaAnalytics="Link: Spark"
          idString="card-16">
        </sprk-card>

        <sprk-card
          sprkStackItem
          additionalClasses="sprk-o-Stack sprk-o-Stack__item--flex@xl"
          cardType="teaserHeading"
          title="Card heading! Card heading!"
          body="Placeholder text that is here in this card!"
          imgSrc="https://sparkdesignsystem.com/assets/toolkit/images/desktop.jpg"
          imgAlt="Placeholder Image Alt Text"
          imgHref="www.sparkdesignsystem.com"
          ctaType="button"
          ctaText="Neat!"
          ctaHref="www.sparkdesignsystem.com"
          ctaAnalytics="Link: Spark"
          idString="card-17">
        </sprk-card>
      </sprk-stack>
    </div>
  `,
  styles: ['']
})
export class CardDocsComponent {
  constructor() {}
}
