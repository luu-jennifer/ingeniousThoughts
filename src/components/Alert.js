import { useEffect } from "react";

const Alert = ({type, msg, removeAlert, newThought}) => {
  useEffect( () => {
    const timeout = setTimeout(() => {
      removeAlert();
    }, 3000);
    return () => clearTimeout(timeout);
  }, [newThought]);
  return (
    <h5 className={`alert-${type}`}>
      {msg}
    </h5>
  );
};

export default Alert;