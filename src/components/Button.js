import React from 'react';
import './Button.css';

const Button = ({ className, ...props }) => {
  const classes = `btn ${className ? className : ''}`;
  return <button className={classes} {...props} />;
};

export default Button;
