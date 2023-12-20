import { memo, SVGProps } from 'react';

const Ellipse2Icon6 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 32 32' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <circle cx={16} cy={16} r={16} fill='#D94B48' />
  </svg>
);

const Memo = memo(Ellipse2Icon6);
export { Memo as Ellipse2Icon6 };
