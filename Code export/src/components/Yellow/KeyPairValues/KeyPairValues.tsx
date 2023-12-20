import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import classes from './KeyPairValues.module.css';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
  text?: {
    _115KMH?: ReactNode;
    tOPSpeed?: ReactNode;
  };
}
/* @figmaId 17:355 */
export const KeyPairValues: FC<Props> = memo(function KeyPairValues(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      {props.text?._115KMH != null ? props.text?._115KMH : <div className={classes._115KMH}>115KM/H</div>}
      {props.text?.tOPSpeed != null ? props.text?.tOPSpeed : <div className={classes.tOPSpeed}>TOP Speed</div>}
    </div>
  );
});
