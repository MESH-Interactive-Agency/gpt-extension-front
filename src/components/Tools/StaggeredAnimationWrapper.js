import React from 'react';
import './StaggeredAnimationWrapper.css';

const StaggeredAnimationWrapper = ({ children, delay = 2 }) => {
  return (
    <>
      {React.Children.map(children, (child, i) => {
        return (
          <div
            style={{ animationDelay: `${i * delay}s` }}
            className="staggered-animation"
          >
            {child}
          </div>
        );
      })}
    </>
  );
};

export default StaggeredAnimationWrapper;
