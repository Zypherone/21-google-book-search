import React, { useState, useEffect } from 'react';
import { Button } from "react-bootstrap";

function simulateNetworkRequest() {
  return new Promise((resolve) => setTimeout(resolve, 2000));
}

function AddRemoveButton(props) {
  const [isLoading, setLoading] = useState(false);
  const { typeOfButton, id, typeOfAction } = props;

  useEffect(() => {

    //props.typeOfButton()
    
    if (isLoading) {

      console.log(id);

      props.typeOfButton(id)
      .then(() => {
        simulateNetworkRequest().then(() => {
          setLoading(false);
        });
      });

    }
  }, [isLoading]);

  const handleClick = () => setLoading(true);

  return (
    <Button
      variant="primary"
      className="btn btn-danger btn-add-remove mr-2"
      disabled={isLoading}
      onClick={!isLoading ? handleClick : null}
    >
      {isLoading ? (typeOfAction.slice(0, -1) + 'ing...') : typeOfAction}
    </Button>
  );
}

export default AddRemoveButton