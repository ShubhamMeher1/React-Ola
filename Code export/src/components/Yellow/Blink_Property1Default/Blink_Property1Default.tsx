import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import classes from './Blink_Property1Default.module.css';
import { Ellipse1Icon2 } from './Ellipse1Icon2.js';
import { Ellipse1Icon } from './Ellipse1Icon.js';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
}
/* @figmaId 2:56 */
export const Blink_Property1Default: FC<Props> = memo(function Blink_Property1Default(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.ellipse1}>
        <Ellipse1Icon className={classes.icon} />
      </div>
      <div className={classes.ellipse12}>
        <Ellipse1Icon2 className={classes.icon2} />
      </div>
    </div>
  );
});
