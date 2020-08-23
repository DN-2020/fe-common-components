import React from 'react';
import {storiesOf} from '@storybook/react';
import {action} from '@storybook/addon-actions';
import Calendar1 from '../components/Calendar/Calendar1'


export const task = {
    idx: 1,
    content: '오늘할일',
    archive: false,
    pinned: false,
  };
  
  export const actions = {
    onPinTask: action('onPinTask'),
    onArchiveTask: action('onArchiveTask'),
    onRemoveTask: action('onRemoveTask'),
  };
  
  // 스토리 추가
  storiesOf('Calendar1', module) // Storybook에 표시될 폴더명
    .addDecorator(story => <div style={{ padding: '0 20rem' }}>{story()}</div>)

    .add('default', () => <Calendar1 task={task} {...actions} />)
    .add('archived', () => <Calendar1 task={{...task, archive: true}} {...actions} />)
    .add('pinned', () => <Calendar1 task={{...task, pinned: true}} {...actions} />)
    .add('archived and pinned', () => 
         <Calendar1 task={{...task, archive: true, pinned: true}} {...actions} />);
  

