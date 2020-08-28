import React from 'react';
import {storiesOf} from '@storybook/react';
import {action} from '@storybook/addon-actions';
import RangePickers from '../components/Calendar/RangePickers'

export const task = {
    idx: 1,
    content: '오늘할일',
    archive: false,
    pinned: false,
  };
  
  export const actions = {
    toggleWeekends: action('toggleWeekends'),
    onArchiveTask: action('onArchiveTask'),
    onRemoveTask: action('onRemoveTask'),
    viewCalnedar:action('viewCalendar')
  };
  
  // 스토리 추가
  storiesOf('RangePickers', module) // Storybook에 표시될 폴더명
    .addDecorator(story => <div style={{ padding: '0 20rem' }}>{story()}</div>)

    .add('viewCalendar', () => <RangePickers task={task} viewCalendar={actions.viewCalendar} />)


  