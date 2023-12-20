import { memo, SVGProps } from 'react';

const Ellipse2Icon9 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 48 48' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <circle opacity={0.3} cx={24} cy={24} r={24} fill='#4A637E' />
  </svg>
);

const Memo = memo(Ellipse2Icon9);
export { Memo as Ellipse2Icon9 };
