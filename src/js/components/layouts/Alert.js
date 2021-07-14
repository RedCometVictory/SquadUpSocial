import React, { Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const Alert = () => {
  const alertState = useSelector(state => state.alert);

  return (
    <div className="alert-wrapper">
      {alertState.map((alert) => (
        <div key={alert.id} className={`alert alert-${alert.alertType}`}>
          {alert.msg}
        </div>
      ))}
    </div>
  );
};
export default Alert;