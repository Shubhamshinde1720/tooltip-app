// Tooltip.js
import React, { useState } from 'react';
import './Tooltip.css';

const Tooltip = ({ defaultText }) => {
  const [tooltipText, setTooltipText] = useState(defaultText);
  const [isVisible, setIsVisible] = useState(false);

  const showTooltip = () => setIsVisible(true);
  const hideTooltip = () => setIsVisible(false);

  return (
    <div className="tooltip-container" onMouseEnter={showTooltip} onMouseLeave={hideTooltip}>
      <button>Hover me</button>
      {isVisible && <div className="tooltip">{tooltipText}</div>}
    </div>
  );
};

export default Tooltip;
