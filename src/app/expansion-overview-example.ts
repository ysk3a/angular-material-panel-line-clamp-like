import { animate, animateChild, group, state, style, transition, trigger, query, AnimationTriggerMetadata } from '@angular/animations';
import { Component } from '@angular/core';
import { MatExpansionPanel } from '@angular/material/expansion';
// const EXPANSION_PANEL_ANIMATION_TIMING = '10000ms cubic-bezier(0.4,0.0,0.2,1)';
// MatExpansionPanel['decorators'][0].args[0].animations = [
//   trigger('bodyExpansion', [
//     state('collapsed, void', style({ height: '0px', visibility: 'hidden' })),
//     state('expanded', style({ height: '*', visibility: 'visible' })),
//     transition('expanded <=> collapsed, void => collapsed',
//       animate(EXPANSION_PANEL_ANIMATION_TIMING)),
//   ])];
/**
 * @title Basic expansion panel
 */
@Component({
  selector: 'expansion-overview-example',
  templateUrl: 'expansion-overview-example.html',
  styleUrls: ['expansion-overview-example.scss'],
})
export class ExpansionOverviewExample {
  panelOpenState = false;
  items = [
    {
      id: 1,
      panelState: false,
      collapseFinished: true,
    },
    {
      id: 2,
      panelState: false,
      collapseFinished: true,
    },
    {
      id: 3,
      panelState: false,
      collapseFinished: true,
    },
    {
      id: 4,
      panelState: false,
      collapseFinished: true,
    },
    {
      id: 5,
      panelState: false,
      collapseFinished: true,
    },
    {
      id: 6,
      panelState: false,
      collapseFinished: true,
    },
  ];
  afterExpand(item: any): void {
    console.log('AFTEREXPAND An event emitted after the bodys expansion animation happens.');
  }
  afterCollapse(item: any): void {
    item.collapseFinished = true;
    console.log('AFTERCOLLAPSE An event emitted after the body collapse animation happens.');
  }
  closed(): void {
    console.log('CLOSED Event emitted every time the AccordionItem is closed.');
  }
  opened(item: any): void {
    console.log('OPENED Event emitted every time the AccordionItem is opened.');
    item.collapseFinished = false;
  }
}

/**  Copyright 2023 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at https://angular.io/license */
