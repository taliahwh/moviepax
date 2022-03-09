import React from 'react';

const Message = ({ variant, children }) => {
  return (
    <div
      className={
        variant === 'danger'
          ? 'p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800'
          : variant === 'warning'
          ? 'p-4 mb-4 text-sm text-yellow-700 bg-yellow-100 rounded-lg dark:bg-yellow-200 dark:text-yellow-800'
          : variant === 'info'
          ? 'p-4 mb-4 text-sm text-blue-700 bg-blue-100 rounded-lg dark:bg-blue-200 dark:text-blue-800'
          : variant === 'success'
          ? 'p-4 mb-4 text-sm text-green-700 bg-green-100 rounded-lg dark:bg-green-200 dark:text-green-800'
          : ''
      }
      role="alert"
    >
      {children}
    </div>
  );
};

Message.defaultProps = {
  variant: 'danger',
};

export default Message;
