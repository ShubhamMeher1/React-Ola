import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import classes from './ColorOption_Property1ColorOpti.module.css';
import { Ellipse2Icon2 } from './Ellipse2Icon2.js';
import { Ellipse2Icon } from './Ellipse2Icon.js';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
  swap?: {
    ellipse2?: ReactNode;
    ellipse22?: ReactNode;
  };
}
/* @figmaId 17:431 */
export const ColorOption_Property1ColorOpti: FC<Props> = memo(function ColorOption_Property1ColorOpti(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.ellipse2}>{props.swap?.ellipse2 || <Ellipse2Icon className={classes.icon} />}</div>
      <div className={classes.ellipse22}>{props.swap?.ellipse22 || <Ellipse2Icon2 className={classes.icon2} />}</div>
    </div>
  );
});
