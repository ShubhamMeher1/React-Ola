import { memo, SVGProps } from 'react';

const Ellipse2Icon8 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 48 48' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <circle cx={24} cy={24} r={24} fill='#F5E759' />
  </svg>
);

const Memo = memo(Ellipse2Icon8);
export { Memo as Ellipse2Icon8 };
