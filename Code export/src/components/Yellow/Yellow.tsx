import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import { Blink_Property1Default } from './Blink_Property1Default/Blink_Property1Default.js';
import { Button_TypeSolidSizeMediumLead } from './Button_TypeSolidSizeMediumLead/Button_TypeSolidSizeMediumLead.js';
import { ColorOption_Property1ColorOpti } from './ColorOption_Property1ColorOpti/ColorOption_Property1ColorOpti.js';
import { Ellipse2Icon2 } from './Ellipse2Icon2.js';
import { Ellipse2Icon3 } from './Ellipse2Icon3.js';
import { Ellipse2Icon4 } from './Ellipse2Icon4.js';
import { Ellipse2Icon5 } from './Ellipse2Icon5.js';
import { Ellipse2Icon6 } from './Ellipse2Icon6.js';
import { Ellipse2Icon7 } from './Ellipse2Icon7.js';
import { Ellipse2Icon8 } from './Ellipse2Icon8.js';
import { Ellipse2Icon9 } from './Ellipse2Icon9.js';
import { Ellipse2Icon10 } from './Ellipse2Icon10.js';
import { Ellipse2Icon } from './Ellipse2Icon.js';
import { FrameIcon2 } from './FrameIcon2.js';
import { FrameIcon3 } from './FrameIcon3.js';
import { FrameIcon4 } from './FrameIcon4.js';
import { FrameIcon } from './FrameIcon.js';
import { KeyPairValues } from './KeyPairValues/KeyPairValues.js';
import { Menu } from './Menu/Menu.js';
import { VectorIcon2 } from './VectorIcon2.js';
import { VectorIcon3 } from './VectorIcon3.js';
import { VectorIcon } from './VectorIcon.js';
import classes from './Yellow.module.css';

interface Props {
  className?: string;
}
/* @figmaId 28:963 */
export const Yellow: FC<Props> = memo(function Yellow(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.frame15}>
        <div className={classes.image7}></div>
        <div className={classes.rectangle2}></div>
        <Blink_Property1Default className={classes.blink} />
        <Blink_Property1Default className={classes.blink2} />
        <Blink_Property1Default className={classes.blink3} />
        <Blink_Property1Default className={classes.blink4} />
      </div>
      <div className={classes.ola}>
        <div className={classes.frame}>
          <FrameIcon className={classes.icon14} />
        </div>
        <div className={classes.frame2}>
          <FrameIcon2 className={classes.icon15} />
        </div>
      </div>
      <div className={classes.frame7}>
        <KeyPairValues
          className={classes.keyPairValues}
          text={{
            _115KMH: <div className={classes._115KMH}>₹99,999</div>,
            tOPSpeed: <div className={classes.tOPSpeed}>Starting from</div>,
          }}
        />
        <KeyPairValues
          className={classes.keyPairValues2}
          text={{
            _115KMH: (
              <div className={classes._115KMH2}>
                <p className={classes.labelWrapper}>
                  <span className={classes.label}>115 </span>
                  <span className={classes.label2}>KM/H</span>
                </p>
              </div>
            ),
            tOPSpeed: <div className={classes.tOPSpeed2}>TOP Speed</div>,
          }}
        />
        <KeyPairValues
          className={classes.keyPairValues3}
          text={{
            _115KMH: (
              <div className={classes._115KMH3}>
                <p className={classes.labelWrapper2}>
                  <span className={classes.label3}>3.0 </span>
                  <span className={classes.label4}>Sec</span>
                </p>
              </div>
            ),
            tOPSpeed: <div className={classes.tOPSpeed3}>0 to 40 km/h</div>,
          }}
        />
        <KeyPairValues
          className={classes.keyPairValues4}
          text={{
            _115KMH: (
              <div className={classes._115KMH4}>
                <p className={classes.labelWrapper3}>
                  <span className={classes.label5}>181 </span>
                  <span className={classes.label6}>KM</span>
                </p>
              </div>
            ),
            tOPSpeed: <div className={classes.tOPSpeed4}>Range</div>,
          }}
        />
        <KeyPairValues
          className={classes.keyPairValues5}
          text={{
            _115KMH: <div className={classes._115KMH5}>October 2021</div>,
            tOPSpeed: <div className={classes.tOPSpeed5}>delivery starts</div>,
          }}
        />
      </div>
      <div className={classes.frame11}>
        <ColorOption_Property1ColorOpti
          swap={{
            ellipse2: <Ellipse2Icon className={classes.icon} />,
            ellipse22: <Ellipse2Icon2 className={classes.icon2} />,
          }}
        />
        <ColorOption_Property1ColorOpti
          swap={{
            ellipse2: <Ellipse2Icon3 className={classes.icon3} />,
            ellipse22: <Ellipse2Icon4 className={classes.icon4} />,
          }}
        />
        <ColorOption_Property1ColorOpti
          swap={{
            ellipse2: <Ellipse2Icon5 className={classes.icon5} />,
            ellipse22: <Ellipse2Icon6 className={classes.icon6} />,
          }}
        />
        <ColorOption_Property1ColorOpti
          className={classes.colorOption}
          swap={{
            ellipse2: <Ellipse2Icon7 className={classes.icon7} />,
            ellipse22: <Ellipse2Icon8 className={classes.icon8} />,
          }}
        />
        <ColorOption_Property1ColorOpti
          swap={{
            ellipse2: <Ellipse2Icon9 className={classes.icon9} />,
            ellipse22: <Ellipse2Icon10 className={classes.icon10} />,
          }}
        />
      </div>
      <div className={classes.frame13}>
        <div className={classes.theFutureOfGREENDriving}>The future of GREEN driving</div>
        <div className={classes.dISCOVERTHENEWREALITY}>
          <div className={classes.textBlock}>DISCOVER THE</div>
          <div className={classes.textBlock2}>NEW REALITY</div>
        </div>
      </div>
      <div className={classes.frame5}>
        <div className={classes.frame4}>
          <div className={classes.logo}>
            <div className={classes.frame3}>
              <FrameIcon3 className={classes.icon16} />
            </div>
            <div className={classes.frame6}>
              <FrameIcon4 className={classes.icon17} />
            </div>
          </div>
          <div className={classes.frame62}>
            <div className={classes.frame16}>
              <Button_TypeSolidSizeMediumLead
                className={classes.button}
                text={{
                  medium: <div className={classes.medium}>Reserve for ₹499</div>,
                }}
              />
            </div>
            <Menu
              className={classes.menu}
              swap={{
                vector: <VectorIcon className={classes.icon11} />,
                vector2: <VectorIcon2 className={classes.icon12} />,
                vector3: <VectorIcon3 className={classes.icon13} />,
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
});
