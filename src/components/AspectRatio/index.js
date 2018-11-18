import React from 'react';
import './aspect-ratio.css';

const splitRatio = ratio => ratio.split('x');

const AspectRatio = ({
  ratio = '1x1',
  className = '',
  children,
  ...restProps
}) => {
  const [ x, y ] = splitRatio(ratio);

  return (
    <div {...restProps} className={`aspect-ratio ${className}`}>
      <div className="aspect-ratio--children">{children}</div>
      <canvas aria-hidden width={x} height={y} />
    </div>
  );
};

export default AspectRatio;
