import { SprkIconModule } from './sprk-icon.module';
import { storyWrapper } from '../../../../../../.storybook/helpers/storyWrapper';

export default {
  title: 'Components|Icons',
  component: SprkIconModule,
  decorators: [
    storyWrapper(
      storyContent => (
        `<div class="sprk-o-Box">${ storyContent }<div>`
      )
    )
  ],
};

const modules = {
  imports: [
    SprkIconModule,
  ],
};

export const access = () => ({
  moduleMetadata: modules,
  template: `
    <sprk-icon
      iconType="access"
      additionalClasses="sprk-c-Icon--xl"
    >
    </sprk-icon>
  `,
});

export const amountMoney = () => ({
  moduleMetadata: modules,
  template: `
    <sprk-icon
      iconType="amount-money"
      additionalClasses="sprk-c-Icon--xl"
    >
    </sprk-icon>
  `,
});

export const application = () => ({
  moduleMetadata: modules,
  template: `
    <sprk-icon
      iconType="application"
      additionalClasses="sprk-c-Icon--xl"
    >
    </sprk-icon>
  `,
});

export const applyNow = () => ({
  moduleMetadata: modules,
  template: `
    <sprk-icon
      iconType="apply-now"
      additionalClasses="sprk-c-Icon--xl"
    >
    </sprk-icon>
  `,
});

export const autoLoans = () => ({
  moduleMetadata: modules,
  template: `
    <sprk-icon
      iconType="auto-loans"
      additionalClasses="sprk-c-Icon--xl"
    >
    </sprk-icon>
  `,
});

export const baths = () => ({
  moduleMetadata: modules,
  template: `
    <sprk-icon
      iconType="baths"
      additionalClasses="sprk-c-Icon--xl"
    >
    </sprk-icon>
  `,
});

export const beds = () => ({
  moduleMetadata: modules,
  template: `
    <sprk-icon
      iconType="beds"
      additionalClasses="sprk-c-Icon--xl"
    >
    </sprk-icon>
  `,
});

export const bell = () => ({
  moduleMetadata: modules,
  template: `
    <sprk-icon
      iconType="bell"
      additionalClasses="sprk-c-Icon--xl"
    >
    </sprk-icon>
  `,
});

export const bellFilled = () => ({
  moduleMetadata: modules,
  template: `
    <sprk-icon
      iconType="bell-filled"
      additionalClasses="sprk-c-Icon--xl sprk-c-Icon--filled"
    >
    </sprk-icon>
  `,
});

export const bellFilledSmall = () => ({
  moduleMetadata: modules,
  template: `
    <sprk-icon
      iconType="bell-filled-small"
      additionalClasses="sprk-c-Icon--filled"
    >
    </sprk-icon>
  `,
});

export const blog = () => ({
  moduleMetadata: modules,
  template: `
    <sprk-icon iconType="blog"
      additionalClasses="sprk-c-Icon--xl"
    >
    </sprk-icon>
  `,
});

export const calculator = () => ({
  moduleMetadata: modules,
  template: `
    <sprk-icon
      iconType="calculator"
      additionalClasses="sprk-c-Icon--xl"
    >
    </sprk-icon>
  `,
});

export const calendar = () => ({
  moduleMetadata: modules,
  template: `
    <sprk-icon
      iconType="calendar"
      additionalClasses="sprk-c-Icon--xl"
    >
    </sprk-icon>
  `,
});

export const callTeamMember = () => ({
  moduleMetadata: modules,
  template: `
    <sprk-icon
      iconType="call-team-member"
      additionalClasses="sprk-c-Icon--xl"
    >
    </sprk-icon>
  `,
});

export const camera = () => ({
  moduleMetadata: modules,
  template: `
    <sprk-icon
      iconType="camera"
      additionalClasses="sprk-c-Icon--xl"
    >
    </sprk-icon>
  `,
});

export const cashBack = () => ({
  moduleMetadata: modules,
  template: `
    <sprk-icon
      iconType="cash-back"
      additionalClasses="sprk-c-Icon--xl"
    >
    </sprk-icon>
  `,
});

export const chatOnline = () => ({
  moduleMetadata: modules,
  template: `
    <sprk-icon
      iconType="chat-online"
      additionalClasses="sprk-c-Icon--xl"
    >
    </sprk-icon>
  `,
});

export const chatOnlineFilled = () => ({
  moduleMetadata: modules,
  template: `
    <sprk-icon
      iconType="chat-online-filled"
      additionalClasses="sprk-c-Icon--xl sprk-c-Icon--filled"
    >
    </sprk-icon>
  `,
});

export const chatOnlineFilledSmall = () => ({
  moduleMetadata: modules,
  template: `
    <sprk-icon
      iconType="chat-online-filled-small"
      additionalClasses="sprk-c-Icon--filled"
    >
    </sprk-icon>
  `,
});

export const checkMark = () => ({
  moduleMetadata: modules,
  template: `
    <sprk-icon
      iconType="check-mark"
      additionalClasses="sprk-c-Icon--xl"
    >
    </sprk-icon>
  `,
});

export const checkMarkFilled = () => ({
  moduleMetadata: modules,
  template: `
    <sprk-icon
      iconType="check-mark-filled"
      additionalClasses="sprk-c-Icon--xl sprk-c-Icon--filled"
    >
    </sprk-icon>
  `,
});

export const checkMarkFilledSmall = () => ({
  moduleMetadata: modules,
  template: `
    <sprk-icon
      iconType="check-mark-filled-small"
      additionalClasses="sprk-c-Icon--filled"
    >
    </sprk-icon>
  `,
});

export const chevronDown = () => ({
  moduleMetadata: modules,
  template: `
    <sprk-icon
      iconType="chevron-down"
      additionalClasses="sprk-c-Icon--xl"
    >
    </sprk-icon>
  `,
});

export const chevronDownCircle = () => ({
  moduleMetadata: modules,
  template: `
    <sprk-icon
      iconType="chevron-down-circle"
      additionalClasses="sprk-c-Icon--xl"
    >
    </sprk-icon>
  `,
});

export const chevronDownCircleTwoColor = () => ({
  moduleMetadata: modules,
  template: `
    <sprk-icon
      iconType="chevron-down-circle-two-color"
      additionalClasses="sprk-c-Icon--xl"
    >
    </sprk-icon>
  `,
});

export const chevronDownFilled = () => ({
  moduleMetadata: modules,
  template: `
    <sprk-icon
      iconType="chevron-down-filled"
      additionalClasses="sprk-c-Icon--xl sprk-c-Icon--filled"
    >
    </sprk-icon>
  `,
});

export const chevronDownFilledSmall = () => ({
  moduleMetadata: modules,
  template: `
    <sprk-icon
      iconType="chevron-down-filled-small"
      additionalClasses="sprk-c-Icon--filled"
    >
    </sprk-icon>
  `,
});

export const chevronLeft = () => ({
  moduleMetadata: modules,
  template: `
    <sprk-icon
      iconType="chevron-left"
      additionalClasses="sprk-c-Icon--xl"
    >
    </sprk-icon>
  `,
});

export const chevronLeftCircle = () => ({
  moduleMetadata: modules,
  template: `
    <sprk-icon
      iconType="chevron-left-circle"
      additionalClasses="sprk-c-Icon--xl"
    >
    </sprk-icon>
  `,
});

export const chevronLeftCircleTwoColor = () => ({
  moduleMetadata: modules,
  template: `
    <sprk-icon
      iconType="chevron-left-circle-two-color"
      additionalClasses="sprk-c-Icon--xl"
    >
    </sprk-icon>
  `,
});

export const chevronLeftFilled = () => ({
  moduleMetadata: modules,
  template: `
    <sprk-icon
      iconType="chevron-left-filled"
      additionalClasses="sprk-c-Icon--xl sprk-c-Icon--filled"
    >
    </sprk-icon>
  `,
});

export const chevronLeftFilledSmall = () => ({
  moduleMetadata: modules,
  template: `
    <sprk-icon
      iconType="chevron-left-filled-small"
      additionalClasses="sprk-c-Icon--filled"
    >
    </sprk-icon>
  `,
});

export const chevronRight = () => ({
  moduleMetadata: modules,
  template: `
    <sprk-icon
      iconType="chevron-right"
      additionalClasses="sprk-c-Icon--xl"
    >
    </sprk-icon>
  `,
});

export const chevronRightCircle = () => ({
  moduleMetadata: modules,
  template: `
    <sprk-icon
      iconType="chevron-right-circle"
      additionalClasses="sprk-c-Icon--xl"
    >
    </sprk-icon>
  `,
});

export const chevronRightCircleTwoColor = () => ({
  moduleMetadata: modules,
  template: `
    <sprk-icon
      iconType="chevron-right-circle-two-color"
      additionalClasses="sprk-c-Icon--xl"
    >
    </sprk-icon>
  `,
});

export const chevronRightFilled = () => ({
  moduleMetadata: modules,
  template: `
    <sprk-icon
      iconType="chevron-right-filled"
      additionalClasses="sprk-c-Icon--xl sprk-c-Icon--filled"
    >
    </sprk-icon>
  `,
});

export const chevronRightFilledSmall = () => ({
  moduleMetadata: modules,
  template: `
    <sprk-icon
      iconType="chevron-right-filled-small"
      additionalClasses="sprk-c-Icon--filled"
    >
    </sprk-icon>
  `,
});

export const chevronUp = () => ({
  moduleMetadata: modules,
  template: `
    <sprk-icon
      iconType="chevron-up"
      additionalClasses="sprk-c-Icon--xl"
    >
    </sprk-icon>
  `,
});

export const chevronUpCircle = () => ({
  moduleMetadata: modules,
  template: `
    <sprk-icon
      iconType="chevron-up-circle"
      additionalClasses="sprk-c-Icon--xl"
    >
    </sprk-icon>
  `,
});

export const chevronUpCircleTwoColor = () => ({
  moduleMetadata: modules,
  template: `
    <sprk-icon
      iconType="chevron-up-circle-two-color"
      additionalClasses="sprk-c-Icon--xl"
    >
    </sprk-icon>
  `,
});

export const chevronUpFilled = () => ({
  moduleMetadata: modules,
  template: `
    <sprk-icon
      iconType="chevron-up-filled"
      additionalClasses="sprk-c-Icon--xl sprk-c-Icon--filled"
    >
    </sprk-icon>
  `,
});

export const chevronUpFilledSmall = () => ({
  moduleMetadata: modules,
  template: `
    <sprk-icon
      iconType="chevron-up-filled-small"
      additionalClasses="sprk-c-Icon--filled"
    >
    </sprk-icon>
  `,
});

export const clock = () => ({
  moduleMetadata: modules,
  template: `
    <sprk-icon
      iconType="clock"
      additionalClasses="sprk-c-Icon--xl"
    >
    </sprk-icon>
  `,
});

export const clockFilled = () => ({
  moduleMetadata: modules,
  template: `
    <sprk-icon
      iconType="clock-filled"
      additionalClasses="sprk-c-Icon--xl sprk-c-Icon--filled"
    >
    </sprk-icon>
  `,
});

export const clockFilledSmall = () => ({
  moduleMetadata: modules,
  template: `
    <sprk-icon
      iconType="clock-filled-small"
      additionalClasses="sprk-c-Icon--filled"
    >
    </sprk-icon>
  `,
});

export const close = () => ({
  moduleMetadata: modules,
  template: `
    <sprk-icon
      iconType="close"
      additionalClasses="sprk-c-Icon--xl"
    >
    </sprk-icon>
  `,
});

export const closeCircle = () => ({
  moduleMetadata: modules,
  template: `
    <sprk-icon
      iconType="close-circle"
      additionalClasses="sprk-c-Icon--xl"
    >
    </sprk-icon>
  `,
});

export const closeFilled = () => ({
  moduleMetadata: modules,
  template: `
    <sprk-icon
      iconType="close-filled"
      additionalClasses="sprk-c-Icon--xl sprk-c-Icon--filled"
    >
    </sprk-icon>
  `,
});

export const closeFilledSmall = () => ({
  moduleMetadata: modules,
  template: `
    <sprk-icon
      iconType="close-filled-small"
      additionalClasses="sprk-c-Icon--filled"
    >
    </sprk-icon>
  `,
});

export const cloud = () => ({
  moduleMetadata: modules,
  template: `
    <sprk-icon
      iconType="cloud"
      additionalClasses="sprk-c-Icon--xl"
    >
    </sprk-icon>
  `,
});

export const cloudFilled = () => ({
  moduleMetadata: modules,
  template: `
    <sprk-icon
      iconType="cloud-filled"
      additionalClasses="sprk-c-Icon--xl sprk-c-Icon--filled"
    >
    </sprk-icon>
  `,
});

export const cloudFilledSmall = () => ({
  moduleMetadata: modules,
  template: `
    <sprk-icon
      iconType="cloud-filled-small"
      additionalClasses="sprk-c-Icon--filled"
    >
    </sprk-icon>
  `,
});

export const communication = () => ({
  moduleMetadata: modules,
  template: `
    <sprk-icon
      iconType="communication"
      additionalClasses="sprk-c-Icon--xl"
    >
    </sprk-icon>
  `,
});

export const communicationFilled = () => ({
  moduleMetadata: modules,
  template: `
    <sprk-icon
      iconType="communication-filled"
      additionalClasses="sprk-c-Icon--xl sprk-c-Icon--filled"
    >
    </sprk-icon>
  `,
});

export const communicationFilledSmall = () => ({
  moduleMetadata: modules,
  template: `
    <sprk-icon
      iconType="communication-filled-small"
      additionalClasses="sprk-c-Icon--filled"
    >
    </sprk-icon>
  `,
});

export const condo = () => ({
  moduleMetadata: modules,
  template: `
    <sprk-icon
      iconType="condo"
      additionalClasses="sprk-c-Icon--xl"
    >
    </sprk-icon>
  `,
});

export const cooling = () => ({
  moduleMetadata: modules,
  template: `
    <sprk-icon
      iconType="cooling"
      additionalClasses="sprk-c-Icon--xl"
    >
    </sprk-icon>
  `,
});

export const credit = () => ({
  moduleMetadata: modules,
  template: `
    <sprk-icon
      iconType="credit"
      additionalClasses="sprk-c-Icon--xl"
    >
    </sprk-icon>
  `,
});

export const creditCardPayoff = () => ({
  moduleMetadata: modules,
  template: `
    <sprk-icon
      iconType="credit-card-payoff"
      additionalClasses="sprk-c-Icon--xl"
    >
    </sprk-icon>
  `,
});

export const dedicatedTeam = () => ({
  moduleMetadata: modules,
  template: `
    <sprk-icon
      iconType="dedicated-team"
      additionalClasses="sprk-c-Icon--xl"
    >
    </sprk-icon>
  `,
});

export const desktopComputer = () => ({
  moduleMetadata: modules,
  template: `
    <sprk-icon
      iconType="desktop-computer"
      additionalClasses="sprk-c-Icon--xl"
    >
    </sprk-icon>
  `,
});

export const documentReview = () => ({
  moduleMetadata: modules,
  template: `
    <sprk-icon
      iconType="document-review"
      additionalClasses="sprk-c-Icon--xl"
    >
    </sprk-icon>
  `,
});

export const documentReviewFilled = () => ({
  moduleMetadata: modules,
  template: `
    <sprk-icon
      iconType="document-review-filled"
      additionalClasses="sprk-c-Icon--xl sprk-c-Icon--filled"
    >
    </sprk-icon>
  `,
});

export const documentReviewFilledSmall = () => ({
  moduleMetadata: modules,
  template: `
    <sprk-icon
      iconType="document-review-filled-small"
      additionalClasses="sprk-c-Icon--filled"
    >
    </sprk-icon>
  `,
});

export const documents = () => ({
  moduleMetadata: modules,
  template: `
    <sprk-icon
      iconType="documents"
      additionalClasses="sprk-c-Icon--xl"
    >
    </sprk-icon>
  `,
});

export const dollar = () => ({
  moduleMetadata: modules,
  template: `
    <sprk-icon
      iconType="dollar"
      additionalClasses="sprk-c-Icon--xl sprk-c-Icon--filled"
    >
    </sprk-icon>
  `,
});

export const download = () => ({
  moduleMetadata: modules,
  template: `
    <sprk-icon
      iconType="download"
      additionalClasses="sprk-c-Icon--xl"
    >
    </sprk-icon>
  `,
});

export const downloadFilled = () => ({
  moduleMetadata: modules,
  template: `
    <sprk-icon
      iconType="download-filled"
      additionalClasses="sprk-c-Icon--xl sprk-c-Icon--filled"
    >
    </sprk-icon>
  `,
});

export const downloadFilledSmall = () => ({
  moduleMetadata: modules,
  template: `
    <sprk-icon
      iconType="download-filled-small"
      additionalClasses="sprk-c-Icon--filled"
    >
    </sprk-icon>
  `,
});

export const editable = () => ({
  moduleMetadata: modules,
  template: `
    <sprk-icon
      iconType="editable"
      additionalClasses="sprk-c-Icon--xl"
    >
    </sprk-icon>
  `,
});

export const educationalResources = () => ({
  moduleMetadata: modules,
  template: `
    <sprk-icon
      iconType="educational-resources"
      additionalClasses="sprk-c-Icon--xl"
    >
    </sprk-icon>
  `,
});

export const email = () => ({
  moduleMetadata: modules,
  template: `
    <sprk-icon
      iconType="email"
      additionalClasses="sprk-c-Icon--xl"
    >
    </sprk-icon>
  `,
});

export const emailFilled = () => ({
  moduleMetadata: modules,
  template: `
    <sprk-icon
      iconType="email-filled"
      additionalClasses="sprk-c-Icon--xl sprk-c-Icon--filled"
    >
    </sprk-icon>
  `,
});

export const emailFilledSmall = () => ({
  moduleMetadata: modules,
  template: `
    <sprk-icon
      iconType="email-filled-small"
      additionalClasses="sprk-c-Icon--filled"
    >
    </sprk-icon>
  `,
});

export const exclamation = () => ({
  moduleMetadata: modules,
  template: `
    <sprk-icon
      iconType="exclamation"
      additionalClasses="sprk-c-Icon--xl"
    >
    </sprk-icon>
  `,
});

export const exclamationCredit = () => ({
  moduleMetadata: modules,
  template: `
    <sprk-icon
      iconType="exclamation-credit"
      additionalClasses="sprk-c-Icon--xl"
    >
    </sprk-icon>
  `,
});

export const exclamationFilled = () => ({
  moduleMetadata: modules,
  template: `
    <sprk-icon
      iconType="exclamation-filled"
      additionalClasses="sprk-c-Icon--xl sprk-c-Icon--filled"
    >
    </sprk-icon>
  `,
});

export const exclamationFilledSmall = () => ({
  moduleMetadata: modules,
  template: `
    <sprk-icon
      iconType="exclamation-filled-small"
      additionalClasses="sprk-c-Icon--filled"
    >
    </sprk-icon>
  `,
});

export const facebook = () => ({
  moduleMetadata: modules,
  template: `
    <sprk-icon
      iconType="facebook"
      additionalClasses="sprk-c-Icon--xl"
    >
    </sprk-icon>
  `,
});

export const facebookTwoColor = () => ({
  moduleMetadata: modules,
  template: `
    <sprk-icon
      iconType="facebook-two-color"
      additionalClasses="sprk-c-Icon--xl"
    >
    </sprk-icon>
  `,
});

export const feedback = () => ({
  moduleMetadata: modules,
  template: `
    <sprk-icon
      iconType="feedback"
      additionalClasses="sprk-c-Icon--xl"
    >
    </sprk-icon>
  `,
});

export const feedbackFilled = () => ({
  moduleMetadata: modules,
  template: `
    <sprk-icon
      iconType="feedback-filled"
      additionalClasses="sprk-c-Icon--xl sprk-c-Icon--filled"
    >
    </sprk-icon>
  `,
});

export const feedbackFilledSmall = () => ({
  moduleMetadata: modules,
  template: `
    <sprk-icon
      iconType="feedback-filled-small"
      additionalClasses="sprk-c-Icon--filled"
    >
    </sprk-icon>
  `,
});

export const findAgent = () => ({
  moduleMetadata: modules,
  template: `
    <sprk-icon
      iconType="find-agent"
      additionalClasses="sprk-c-Icon--xl"
    >
    </sprk-icon>
  `,
});

export const free = () => ({
  moduleMetadata: modules,
  template: `
    <sprk-icon
      iconType="free"
      additionalClasses="sprk-c-Icon--xl"
    >
    </sprk-icon>
  `,
});

export const heat = () => ({
  moduleMetadata: modules,
  template: `
    <sprk-icon
      iconType="heat"
      additionalClasses="sprk-c-Icon--xl"
    >
    </sprk-icon>
  `,
});

export const home = () => ({
  moduleMetadata: modules,
  template: `
    <sprk-icon
      iconType="home"
      additionalClasses="sprk-c-Icon--xl"
    >
    </sprk-icon>
  `,
});

export const homeImprovement = () => ({
  moduleMetadata: modules,
  template: `
    <sprk-icon
      iconType="home-improvement"
      additionalClasses="sprk-c-Icon--xl"
    >
    </sprk-icon>
  `,
});

export const homeShopping = () => ({
  moduleMetadata: modules,
  template: `
    <sprk-icon
      iconType="home-shopping"
      additionalClasses="sprk-c-Icon--xl"
    >
    </sprk-icon>
  `,
});

export const homeSize = () => ({
  moduleMetadata: modules,
  template: `
    <sprk-icon
      iconType="home-size"
      additionalClasses="sprk-c-Icon--xl"
    >
    </sprk-icon>
  `,
});

export const information = () => ({
  moduleMetadata: modules,
  template: `
    <sprk-icon
      iconType="information"
      additionalClasses="sprk-c-Icon--xl"
    >
    </sprk-icon>
  `,
});

export const informationFilled = () => ({
  moduleMetadata: modules,
  template: `
    <sprk-icon
      iconType="information-filled"
      additionalClasses="sprk-c-Icon--xl sprk-c-Icon--filled"
    >
    </sprk-icon>
  `,
});

export const informationFilledSmall = () => ({
  moduleMetadata: modules,
  template: `
    <sprk-icon
      iconType="information-filled-small"
      additionalClasses="sprk-c-Icon--filled"
    >
    </sprk-icon>
  `,
});

export const instagram = () => ({
  moduleMetadata: modules,
  template: `
    <sprk-icon
      iconType="instagram"
      additionalClasses="sprk-c-Icon--xl"
    >
    </sprk-icon>
  `,
});

export const instagramTwoColor = () => ({
  moduleMetadata: modules,
  template: `
    <sprk-icon
      iconType="instagram-two-color"
      additionalClasses="sprk-c-Icon--xl"
    >
    </sprk-icon>
  `,
});

export const land = () => ({
  moduleMetadata: modules,
  template: `
    <sprk-icon
      iconType="land"
      additionalClasses="sprk-c-Icon--xl"
    >
    </sprk-icon>
  `,
});

export const landline = () => ({
  moduleMetadata: modules,
  template: `
    <sprk-icon
      iconType="landline"
      additionalClasses="sprk-c-Icon--xl"
    >
    </sprk-icon>
  `,
});

export const landlineFilled = () => ({
  moduleMetadata: modules,
  template: `
    <sprk-icon
      iconType="landline-filled"
      additionalClasses="sprk-c-Icon--xl sprk-c-Icon--filled"
    >
    </sprk-icon>
  `,
});

export const landlineFilledSmall = () => ({
  moduleMetadata: modules,
  template: `
    <sprk-icon
      iconType="landline-filled-small"
      additionalClasses="sprk-c-Icon--filled"
    >
    </sprk-icon>
  `,
});

export const laptop = () => ({
  moduleMetadata: modules,
  template: `
    <sprk-icon
      iconType="laptop"
      additionalClasses="sprk-c-Icon--xl"
    >
    </sprk-icon>
  `,
});

export const largePurchase = () => ({
  moduleMetadata: modules,
  template: `
    <sprk-icon
      iconType="large-purchase"
      additionalClasses="sprk-c-Icon--xl"
    >
    </sprk-icon>
  `,
});

export const linkedin = () => ({
  moduleMetadata: modules,
  template: `
    <sprk-icon
      iconType="linkedin"
      additionalClasses="sprk-c-Icon--xl"
    >
    </sprk-icon>
  `,
});

linkedin.story = {
  name: 'LinkedIn',
};

export const linkedinTwoColor = () => ({
  moduleMetadata: modules,
  template: `
    <sprk-icon
      iconType="linkedin-two-color"
      additionalClasses="sprk-c-Icon--xl"
    >
    </sprk-icon>
  `,
});

linkedinTwoColor.story = {
  name: 'LinkedIn Two Color',
};

export const lock = () => ({
  moduleMetadata: modules,
  template: `
    <sprk-icon
      iconType="lock"
      additionalClasses="sprk-c-Icon--xl"
    >
    </sprk-icon>
  `,
});

export const medicalExpenses = () => ({
  moduleMetadata: modules,
  template: `
    <sprk-icon
      iconType="medical-expenses"
      additionalClasses="sprk-c-Icon--xl"
    >
    </sprk-icon>
  `,
});

export const menu = () => ({
  moduleMetadata: modules,
  template: `
    <sprk-icon
      iconType="menu"
      additionalClasses="sprk-c-Icon--xl"
    >
    </sprk-icon>
  `,
});

export const mls = () => ({
  moduleMetadata: modules,
  template: `
    <sprk-icon
      iconType="mls"
      additionalClasses="sprk-c-Icon--xl"
    >
    </sprk-icon>
  `,
});

mls.story = {
  name: 'MLS',
};

export const mobile = () => ({
  moduleMetadata: modules,
  template: `
    <sprk-icon
      iconType="mobile"
      additionalClasses="sprk-c-Icon--xl"
    >
    </sprk-icon>
  `,
});

export const mortgage = () => ({
  moduleMetadata: modules,
  template: `
    <sprk-icon
      iconType="mortgage"
      additionalClasses="sprk-c-Icon--xl"
    >
    </sprk-icon>
  `,
});

export const multiFamily = () => ({
  moduleMetadata: modules,
  template: `
    <sprk-icon
      iconType="multi-family"
      additionalClasses="sprk-c-Icon--xl"
    >
    </sprk-icon>
  `,
});

multiFamily.story = {
  name: 'Multi-Family',
};

export const multiplePages = () => ({
  moduleMetadata: modules,
  template: `
    <sprk-icon
      iconType="multiple-pages"
      additionalClasses="sprk-c-Icon--xl"
    >
    </sprk-icon>
  `,
});

export const oneTimeUpdate = () => ({
  moduleMetadata: modules,
  template: `
    <sprk-icon
      iconType="one-time-update"
      additionalClasses="sprk-c-Icon--xl"
    >
    </sprk-icon>
  `,
});

export const organize = () => ({
  moduleMetadata: modules,
  template: `
    <sprk-icon
      iconType="organize"
      additionalClasses="sprk-c-Icon--xl"
    >
    </sprk-icon>
  `,
});

export const organizeFilled = () => ({
  moduleMetadata: modules,
  template: `
    <sprk-icon
      iconType="organize-filled"
      additionalClasses="sprk-c-Icon--xl sprk-c-Icon--filled"
    >
    </sprk-icon>
  `,
});

export const organizeFilledSmall = () => ({
  moduleMetadata: modules,
  template: `
    <sprk-icon
      iconType="organize-filled-small"
      additionalClasses="sprk-c-Icon--filled"
    >
    </sprk-icon>
  `,
});

export const ourFamily = () => ({
  moduleMetadata: modules,
  template: `
    <sprk-icon
      iconType="our-family"
      additionalClasses="sprk-c-Icon--xl"
    >
    </sprk-icon>
  `,
});

export const parking = () => ({
  moduleMetadata: modules,
  template: `
    <sprk-icon
      iconType="parking"
      additionalClasses="sprk-c-Icon--xl"
    >
    </sprk-icon>
  `,
});

export const payment = () => ({
  moduleMetadata: modules,
  template: `
    <sprk-icon
      iconType="payment"
      additionalClasses="sprk-c-Icon--xl"
    >
    </sprk-icon>
  `,
});

export const paymentCenter = () => ({
  moduleMetadata: modules,
  template: `
    <sprk-icon
      iconType="payment-center"
      additionalClasses="sprk-c-Icon--xl"
    >
    </sprk-icon>
  `,
});

export const percent = () => ({
  moduleMetadata: modules,
  template: `
    <sprk-icon
      iconType="percent"
      additionalClasses="sprk-c-Icon--xl sprk-c-Icon--filled"
    >
    </sprk-icon>
  `,
});

export const pinterest = () => ({
  moduleMetadata: modules,
  template: `
    <sprk-icon
      iconType="pinterest"
      additionalClasses="sprk-c-Icon--xl"
    >
    </sprk-icon>
  `,
});

export const pinterestTwoColor = () => ({
  moduleMetadata: modules,
  template: `
    <sprk-icon
      iconType="pinterest-two-color"
      additionalClasses="sprk-c-Icon--xl"
    >
    </sprk-icon>
  `,
});

export const play = () => ({
  moduleMetadata: modules,
  template: `
    <sprk-icon
      iconType="play"
      additionalClasses="sprk-c-Icon--xl"
    >
    </sprk-icon>
  `,
});

export const plus = () => ({
  moduleMetadata: modules,
  template: `
    <sprk-icon
      iconType="plus"
      additionalClasses="sprk-c-Icon--xl"
    >
    </sprk-icon>
  `,
});

export const plusFilled = () => ({
  moduleMetadata: modules,
  template: `
    <sprk-icon
      iconType="plus-filled"
      additionalClasses="sprk-c-Icon--xl sprk-c-Icon--filled"
    >
    </sprk-icon>
  `,
});

export const plusFilledSmall = () => ({
  moduleMetadata: modules,
  template: `
    <sprk-icon
      iconType="plus-filled-small"
      additionalClasses="sprk-c-Icon--filled"
    >
    </sprk-icon>
  `,
});

export const prequalified = () => ({
  moduleMetadata: modules,
  template: `
    <sprk-icon
      iconType="prequalified"
      additionalClasses="sprk-c-Icon--xl"
    >
    </sprk-icon>
  `,
});

export const prequalifiedFilled = () => ({
  moduleMetadata: modules,
  template: `
    <sprk-icon
      iconType="prequalified-filled"
      additionalClasses="sprk-c-Icon--xl sprk-c-Icon--filled"
    >
    </sprk-icon>
  `,
});

export const prequalifiedFilledSmall = () => ({
  moduleMetadata: modules,
  template: `
    <sprk-icon
      iconType="prequalified-filled-small"
      additionalClasses="sprk-c-Icon--filled"
    >
    </sprk-icon>
  `,
});

export const pricePerSqFt = () => ({
  moduleMetadata: modules,
  template: `
    <sprk-icon
      iconType="price-per-sq-ft"
      additionalClasses="sprk-c-Icon--xl"
    >
    </sprk-icon>
  `,
});

pricePerSqFt.story = {
  name: 'Price Per SQ FT',
};

export const print = () => ({
  moduleMetadata: modules,
  template: `
    <sprk-icon
      iconType="print"
      additionalClasses="sprk-c-Icon--xl"
    >
    </sprk-icon>
  `,
});

export const question = () => ({
  moduleMetadata: modules,
  template: `
    <sprk-icon
      iconType="question"
      additionalClasses="sprk-c-Icon--xl"
    >
    </sprk-icon>
  `,
});

export const questionFilled = () => ({
  moduleMetadata: modules,
  template: `
    <sprk-icon
      iconType="question-filled"
      additionalClasses="sprk-c-Icon--xl sprk-c-Icon--filled"
    >
    </sprk-icon>
  `,
});

export const questionFilledSmall = () => ({
  moduleMetadata: modules,
  template: `
    <sprk-icon
      iconType="question-filled-small"
      additionalClasses="sprk-c-Icon--filled"
    >
    </sprk-icon>
  `,
});

export const rateShield = () => ({
  moduleMetadata: modules,
  template: `
    <sprk-icon
      iconType="rate-shield"
      additionalClasses="sprk-c-Icon--xl"
    >
    </sprk-icon>
  `,
});

export const rateShieldFilled = () => ({
  moduleMetadata: modules,
  template: `
    <sprk-icon
      iconType="rate-shield-filled"
      additionalClasses="sprk-c-Icon--xl sprk-c-Icon--filled"
    >
    </sprk-icon>
  `,
});

export const rateShieldFilledSmall = () => ({
  moduleMetadata: modules,
  template: `
    <sprk-icon
      iconType="rate-shield-filled-small"
      additionalClasses="sprk-c-Icon--filled"
    >
    </sprk-icon>
  `,
});

export const rates = () => ({
  moduleMetadata: modules,
  template: `
    <sprk-icon
      iconType="rates"
      additionalClasses="sprk-c-Icon--xl"
    >
    </sprk-icon>
  `,
});

export const recurringUpdate = () => ({
  moduleMetadata: modules,
  template: `
    <sprk-icon
      iconType="recurring-update"
      additionalClasses="sprk-c-Icon--xl"
    >
    </sprk-icon>
  `,
});

export const refinance = () => ({
  moduleMetadata: modules,
  template: `
    <sprk-icon
      iconType="refinance"
      additionalClasses="sprk-c-Icon--xl"
    >
    </sprk-icon>
  `,
});

export const reviews = () => ({
  moduleMetadata: modules,
  template: `
    <sprk-icon
      iconType="reviews"
      additionalClasses="sprk-c-Icon--xl"
    >
    </sprk-icon>
  `,
});

export const rocket = () => ({
  moduleMetadata: modules,
  template: `
    <sprk-icon
      iconType="rocket"
      additionalClasses="sprk-c-Icon--xl"
    >
    </sprk-icon>
  `,
});

export const rocketDocTwoColor = () => ({
  moduleMetadata: modules,
  template: `
    <sprk-icon
      iconType="rocket-doc-two-color"
      additionalClasses="sprk-c-Icon--xl"
    >
    </sprk-icon>
  `,
});

export const rotatePage = () => ({
  moduleMetadata: modules,
  template: `
    <sprk-icon
      iconType="rotate-page"
      additionalClasses="sprk-c-Icon--xl"
    >
    </sprk-icon>
  `,
});

export const sameDay = () => ({
  moduleMetadata: modules,
  template: `
    <sprk-icon
      iconType="same-day"
      additionalClasses="sprk-c-Icon--xl"
    >
    </sprk-icon>
  `,
});

export const savings = () => ({
  moduleMetadata: modules,
  template: `
    <sprk-icon
      iconType="savings"
      additionalClasses="sprk-c-Icon--xl"
    >
    </sprk-icon>
  `,
});

export const schools = () => ({
  moduleMetadata: modules,
  template: `
    <sprk-icon
      iconType="schools"
      additionalClasses="sprk-c-Icon--xl"
    >
    </sprk-icon>
  `,
});

export const search = () => ({
  moduleMetadata: modules,
  template: `
    <sprk-icon
      iconType="search"
      additionalClasses="sprk-c-Icon--xl"
    >
    </sprk-icon>
  `,
});

export const secureProcess = () => ({
  moduleMetadata: modules,
  template: `
    <sprk-icon
      iconType="secure-process"
      additionalClasses="sprk-c-Icon--xl"
    >
    </sprk-icon>
  `,
});

export const settings = () => ({
  moduleMetadata: modules,
  template: `
    <sprk-icon
      iconType="settings"
      additionalClasses="sprk-c-Icon--xl"
    >
    </sprk-icon>
  `,
});

export const settingsFilled = () => ({
  moduleMetadata: modules,
  template: `
    <sprk-icon
      iconType="settings-filled"
      additionalClasses="sprk-c-Icon--xl sprk-c-Icon--filled"
    >
    </sprk-icon>
  `,
});

export const settingsFilledSmall = () => ({
  moduleMetadata: modules,
  template: `
    <sprk-icon
      iconType="settings-filled-small"
      additionalClasses="sprk-c-Icon--filled"
    >
    </sprk-icon>
  `,
});

export const single = () => ({
  moduleMetadata: modules,
  template: `
    <sprk-icon
      iconType="single"
      additionalClasses="sprk-c-Icon--xl"
    >
    </sprk-icon>
  `,
});

export const smallBusiness = () => ({
  moduleMetadata: modules,
  template: `
    <sprk-icon
      iconType="small-business"
      additionalClasses="sprk-c-Icon--xl"
    >
    </sprk-icon>
  `,
});

export const snapchat = () => ({
  moduleMetadata: modules,
  template: `
    <sprk-icon
      iconType="snapchat"
      additionalClasses="sprk-c-Icon--xl"
    >
    </sprk-icon>
  `,
});

export const snapchatTwoColor = () => ({
  moduleMetadata: modules,
  template: `
    <sprk-icon
      iconType="snapchat-two-color"
      additionalClasses="sprk-c-Icon--xl"
    >
    </sprk-icon>
  `,
});

export const technology = () => ({
  moduleMetadata: modules,
  template: `
    <sprk-icon
      iconType="technology"
      additionalClasses="sprk-c-Icon--xl"
    >
    </sprk-icon>
  `,
});

export const thumbsUp = () => ({
  moduleMetadata: modules,
  template: `
    <sprk-icon
      iconType="thumbs-up"
      additionalClasses="sprk-c-Icon--xl"
    >
    </sprk-icon>
  `,
});

export const townhouse = () => ({
  moduleMetadata: modules,
  template: `
    <sprk-icon
      iconType="townhouse"
      additionalClasses="sprk-c-Icon--xl"
    >
    </sprk-icon>
  `,
});

export const trash = () => ({
  moduleMetadata: modules,
  template: `
    <sprk-icon
      iconType="trash"
      additionalClasses="sprk-c-Icon--xl"
    >
    </sprk-icon>
  `,
});

export const trashFilled = () => ({
  moduleMetadata: modules,
  template: `
    <sprk-icon
      iconType="trash-filled"
      additionalClasses="sprk-c-Icon--xl sprk-c-Icon--filled"
    >
    </sprk-icon>
  `,
});

export const trashFilledSmall = () => ({
  moduleMetadata: modules,
  template: `
    <sprk-icon
      iconType="trash-filled-small"
      additionalClasses="sprk-c-Icon--filled"
    >
    </sprk-icon>
  `,
});

export const twitter = () => ({
  moduleMetadata: modules,
  template: `
    <sprk-icon
      iconType="twitter"
      additionalClasses="sprk-c-Icon--xl"
    >
    </sprk-icon>
  `,
});

export const twitterTwoColor = () => ({
  moduleMetadata: modules,
  template: `
    <sprk-icon
      iconType="twitter-two-color"
      additionalClasses="sprk-c-Icon--xl"
    >
    </sprk-icon>
  `,
});

export const unlock = () => ({
  moduleMetadata: modules,
  template: `
    <sprk-icon
      iconType="unlock"
      additionalClasses="sprk-c-Icon--xl"
    >
    </sprk-icon>
  `,
});

export const update = () => ({
  moduleMetadata: modules,
  template: `
    <sprk-icon
      iconType="update"
      additionalClasses="sprk-c-Icon--xl"
    >
    </sprk-icon>
  `,
});
export const upload = () => ({
  moduleMetadata: modules,
  template: `
    <sprk-icon
      iconType="upload"
      additionalClasses="sprk-c-Icon--xl"
    >
    </sprk-icon>
  `,
});

export const user = () => ({
  moduleMetadata: modules,
  template: `
    <sprk-icon
      iconType="user"
      additionalClasses="sprk-c-Icon--xl"
    >
    </sprk-icon>
  `,
});

export const userAccount = () => ({
  moduleMetadata: modules,
  template: `
    <sprk-icon
      iconType="user-account"
      additionalClasses="sprk-c-Icon--xl"
    >
    </sprk-icon>
  `,
});

export const verifiedApproval = () => ({
  moduleMetadata: modules,
  template: `
    <sprk-icon
      iconType="verified-approval"
      additionalClasses="sprk-c-Icon--xl"
    >
    </sprk-icon>
  `,
});

export const vip = () => ({
  moduleMetadata: modules,
  template: `
    <sprk-icon
      iconType="vip"
      additionalClasses="sprk-c-Icon--xl"
    >
    </sprk-icon>
  `,
});

vip.story = {
  name: 'VIP',
};

export const wifi = () => ({
  moduleMetadata: modules,
  template: `
    <sprk-icon
      iconType="wifi"
      additionalClasses="sprk-c-Icon--xl"
    >
    </sprk-icon>
  `,
});

wifi.story = {
  name: 'Wi-Fi',
};

export const writtenCheck = () => ({
  moduleMetadata: modules,
  template: `
    <sprk-icon
      iconType="written-check"
      additionalClasses="sprk-c-Icon--xl"
    >
    </sprk-icon>
  `,
});

export const yearBuilt = () => ({
  moduleMetadata: modules,
  template: `
    <sprk-icon
      iconType="year-built"
      additionalClasses="sprk-c-Icon--xl"
    >
    </sprk-icon>
  `,
});

export const youtube = () => ({
  moduleMetadata: modules,
  template: `
    <sprk-icon
      iconType="youtube"
      additionalClasses="sprk-c-Icon--xl"
    >
    </sprk-icon>
  `,
});

export const youtubeTwoColor = () => ({
  moduleMetadata: modules,
  template: `
    <sprk-icon
      iconType="youtube-two-color"
      additionalClasses="sprk-c-Icon--xl"
    >
    </sprk-icon>
  `,
});
