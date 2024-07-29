import React, { useState } from 'react';

interface FilterButtonProps {
  className?: string; // Optional additional classes for styling
  label?: string; // Optional label text for the button
}

const FilterButton: React.FC<FilterButtonProps> = ({
  className = "",
  label = "Filter",
}) => {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  const handleButtonClick = () => {
    setIsDropdownVisible(prevState => !prevState);
  };

  return (
    <div className={`dropdown-container ${className}`}>
      <button
        onClick={handleButtonClick}
        className={`filter-button ${isDropdownVisible ? 'dropdown-open' : ''}`}
      >
        {label}
      </button>
      <div className={`dropdown ${isDropdownVisible ? 'show' : ''}`}>
        <div className="dropdown-item">Most Recent</div>
        <div className="dropdown-item">Alphabetical</div>
        <div className="dropdown-item">Previous Events</div>
      </div>
    </div>
  );
};

export default FilterButton;
