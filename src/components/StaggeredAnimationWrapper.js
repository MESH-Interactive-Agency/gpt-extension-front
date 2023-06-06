import React, { useState, useEffect } from 'react';

const StaggeredAnimationWrapper = ({ children, delay }) => {
  const [animationClass, setAnimationClass] = useState('animate-initial');

  useEffect(() => {
    setAnimationClass('animate-final');
  }, []);

  return (
    <>
      {React.Children.map(children, (child, i) => {
        return (
          <div
            style={{ transitionDelay: `${i * delay}s` }}
            className={animationClass}
          >
            {child}
          </div>
        );
      })}
    </>
  );
};

export default StaggeredAnimationWrapper;
