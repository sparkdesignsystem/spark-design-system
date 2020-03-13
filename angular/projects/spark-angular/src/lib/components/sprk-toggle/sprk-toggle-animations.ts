import {
  trigger,
  state,
  style,
  animate,
  transition,
  AnimationTriggerMetadata
} from '@angular/animations';

export const toggleAnimations: {
  readonly toggleContent: AnimationTriggerMetadata;
} = {
  toggleContent: trigger('toggleContent', [
    state(
      'closed',
      style({
        height: '0',
        overflow: 'hidden',
        visibility: 'hidden',
      })
    ),
    state(
      'open',
      style({
        height: '*',
        visibility: 'visible',
      })
    ),
    transition('open <=> closed', animate('300ms ease-in'))
  ])
};
