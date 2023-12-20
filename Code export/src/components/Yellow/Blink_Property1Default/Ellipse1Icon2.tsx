import { memo, SVGProps } from 'react';

const Ellipse1Icon2 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <circle cx={8} cy={8} r={8} fill='#D7E021' />
  </svg>
);

const Memo = memo(Ellipse1Icon2);
export { Memo as Ellipse1Icon2 };
