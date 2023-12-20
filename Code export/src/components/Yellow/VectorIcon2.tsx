import { memo, SVGProps } from 'react';

const VectorIcon2 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 24 0' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path d='M0 0H24' stroke='#020202' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
  </svg>
);

const Memo = memo(VectorIcon2);
export { Memo as VectorIcon2 };
