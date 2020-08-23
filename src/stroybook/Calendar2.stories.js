import React from 'react';
import {storiesOf} from '@storybook/react';
import {action} from '@storybook/addon-actions';
import Calendar2 from '../components/Calendar/Calendar2'

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
  };
  
  // 스토리 추가
  storiesOf('Calendar2', module) // Storybook에 표시될 폴더명
    .addDecorator(story => <div style={{ padding: '0 20rem' }}>{story()}</div>)

    .add('toogleWeekends', () => <Calendar2 task={task} toggleWeekends={actions.toggleWeekends} />)
    .add('archived', () => <Calendar2 task={{...task, archive: true}} {...actions} />)
    .add('pinned', () => <Calendar2 task={{...task, pinned: true}} {...actions} />)
    .add('archived and pinned', () => 
         <Calendar2 task={{...task, archive: true, pinned: true}} {...actions} />);
  