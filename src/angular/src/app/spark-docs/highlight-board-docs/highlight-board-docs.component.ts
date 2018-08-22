import { Component } from '@angular/core';

@Component({
  selector: 'sprk-highlight-board-docs',
  template: `

    <div class="drizzle-o-ContentGrouping">
      <div class="sprk-o-CenteredColumn">
        <h2 class="drizzle-b-h2">
          Highlight Board
        </h2>

        <sprk-highlight-board></sprk-highlight-board>
      </div>
    </div>


  `,
  styles: ['']
})

export class HighlightBoardDocsComponent {
  constructor() { }
}
