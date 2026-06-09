import {createContext} from 'react';
import type {ActionBarVariant} from './utils';

export const ActionBarContext = createContext<ActionBarVariant>('rounded');
