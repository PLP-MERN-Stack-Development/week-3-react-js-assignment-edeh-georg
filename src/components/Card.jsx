import React from 'react';
import PropTypes from 'prop-types';

/**
 * Card component for displaying content in a boxed layout
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Card content
 * @param {string} props.title - Optional card title
 * @param {string} props.className - Additional CSS classes
 * @param {boolean} props.hover - Whether to show hover effects
 * @param {string} props.variant - Card variant (default, bordered, elevated)
 * @param {function} props.onClick - Optional click handler
 * @returns {JSX.Element} - Card component
 */
const Card = ({
  children,
  title,
  className = '',
  hover = false,
  variant = 'default',
  onClick,
  ...rest
}) => {
  // Base classes
  const baseClasses = 'bg-white dark:bg-gray-800 rounded-lg transition-all duration-200';
  
  // Variant classes
  const variantClasses = {
    default: 'shadow-sm border border-gray-200 dark:border-gray-700',
    bordered: 'border-2 border-gray-300 dark:border-gray-600',
    elevated: 'shadow-lg border border-gray-100 dark:border-gray-800',
  };
  
  // Hover classes
  const hoverClasses = hover ? 'hover:shadow-md hover:scale-105 cursor-pointer' : '';
  
  // Click handler classes
  const clickableClasses = onClick ? 'cursor-pointer' : '';
  
  // Combine all classes
  const cardClasses = `${baseClasses} ${variantClasses[variant] || variantClasses.default} ${hoverClasses} ${clickableClasses} ${className}`;
  
  return (
    <div
      className={cardClasses}
      onClick={onClick}
      {...rest}
    >
      {title && (
        <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
            {title}
          </h3>
        </div>
      )}
      <div className={title ? "p-6" : "p-6"}>
        {children}
      </div>
    </div>
  );
};

Card.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
  className: PropTypes.string,
  hover: PropTypes.bool,
  variant: PropTypes.oneOf(['default', 'bordered', 'elevated']),
  onClick: PropTypes.func,
};

export default Card;