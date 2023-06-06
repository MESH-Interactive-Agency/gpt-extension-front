import React from 'react';
import Draggable from 'react-draggable';
import StaggeredAnimationWrapper from './StaggeredAnimationWrapper';

const Sidebar = () => {
  return (
    <div className="d-flex flex-column">
      <StaggeredAnimationWrapper delay={0.15}>
        <Draggable>
          <button className="btn btn-primary mb-3">Button 1</button>
        </Draggable>
        <Draggable>
          <button className="btn btn-primary mb-3">Button 2</button>
        </Draggable>
        <Draggable>
          <button className="btn btn-primary mb-3">Button 3</button>
        </Draggable>
        <Draggable>
          <button className="btn btn-primary mb-3">Button 4</button>
        </Draggable>
        <Draggable>
          <button className="btn btn-primary mb-3">Button 5</button>
        </Draggable>
        <Draggable>
          <button className="btn btn-primary mb-3">Button 6</button>
        </Draggable>
      </StaggeredAnimationWrapper>
    </div>
  );
};

export default Sidebar;
