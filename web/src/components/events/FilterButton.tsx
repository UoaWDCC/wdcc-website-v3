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
    <button
      onClick={onClick}
      className={`bg-blue-500 text-white py-2 px-4 rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 ${className}`}
    >
      {label}
    </button>
  );
};

export default FilterButton;
