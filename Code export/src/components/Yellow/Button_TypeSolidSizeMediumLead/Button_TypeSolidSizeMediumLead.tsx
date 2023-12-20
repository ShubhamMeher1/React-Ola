import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import { ChevronRight } from '../ChevronRight/ChevronRight.js';
import { Heart } from '../Heart/Heart.js';
import classes from './Button_TypeSolidSizeMediumLead.module.css';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
  text?: {
    medium?: ReactNode;
  };
}
/* @figmaId 17:146 */
export const Button_TypeSolidSizeMediumLead: FC<Props> = memo(function Button_TypeSolidSizeMediumLead(props = {}) {
  return (
    <button className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      {props.text?.medium != null ? props.text?.medium : <div className={classes.medium}>Medium</div>}
    </button>
  );
});
