import { memo, SVGProps } from 'react';

const Ellipse2Icon2 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 32 32' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <circle cx={16} cy={16} r={16} fill='black' />
  </svg>
);

const Memo = memo(Ellipse2Icon2);
export { Memo as Ellipse2Icon2 };
