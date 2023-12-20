import { memo, SVGProps } from 'react';

const Ellipse2Icon3 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 48 48' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <circle opacity={0.3} cx={24} cy={24} r={24} fill='#F9F9F9' />
  </svg>
);

const Memo = memo(Ellipse2Icon3);
export { Memo as Ellipse2Icon3 };
