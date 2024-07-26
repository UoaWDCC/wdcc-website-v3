import React from 'react';

interface FilterButtonProps {
  onClick?: () => void; // Optional handler for click events
  className?: string; // Optional additional classes for styling
  label?: string; // Optional label text for the button
}

const FilterButton: React.FC<FilterButtonProps> = ({
  onClick,
  className = "",
  label = "Filter",
}) => {
  return (
    <div className={`relative ${className}`}>
      <button
        onClick={onClick}
        className="filter-button"
      >
        {label}
      </button>
      <div className="dropdown">
        <div className="dropdown-item">Most Recent</div>
        <div className="dropdown-item">Alphabetical</div>
        <div className="dropdown-item">Previous Events</div>
      </div>
    </div>
  );
};

export default FilterButton;
