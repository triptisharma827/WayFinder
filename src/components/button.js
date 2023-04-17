import React from 'react';

function SuccessButton(props) {
  const { onClick, label } = props;
  
  return (
    <button 
      onClick={onClick} 
      className='btn'
      >
      {label}
    </button>
  );
}

export default SuccessButton;
