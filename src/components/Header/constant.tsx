import PlanningIcon from '../../../public/images/icon-planning.svg?react';
import CalendarIcon from '../../../public/images/icon-calendar.svg?react';
import TodoIcon from '../../../public/images/icon-todo.svg?react';
import RemindersIcon from '../../../public/images/icon-reminders.svg?react';

export const FEATURES: {
  text: string;
  icon: any;
}[] = [
  { text: 'Todo List', icon: <TodoIcon /> },
  { text: 'Calendar', icon: <CalendarIcon /> },
  { text: 'Reminders', icon: <RemindersIcon /> },
  { text: 'Planning', icon: <PlanningIcon /> },
];

export const COMPANIES = [
  { text: 'History' },
  { text: 'Our team' },
  { text: 'Blog' },
];
