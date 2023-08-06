// DeletePlayerButton.jsx

import { useState } from 'react';
import PropTypes from 'prop-types';

function DeletePlayerButton({ onDelete }) {
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleDelete = async () => {
    try {
      await onDelete(); // Call the onDelete callback to perform deletion
      setShowConfirmation(false);
    } catch (error) {
      console.error('Error deleting player:', error);
    }
  };

  return (
    <div>
      {showConfirmation ? (
        <div>
          <p>Are you sure you want to delete? This cannot be undone!</p>
          <button onClick={handleDelete}>Continue and delete</button>
          <button onClick={() => setShowConfirmation(false)}>Cancel</button>
        </div>
      ) : (
        <button onClick={() => setShowConfirmation(true)}>Delete Player</button>
      )}
    </div>
  );
}

DeletePlayerButton.propTypes = {
  onDelete: PropTypes.func.isRequired,
};

export default DeletePlayerButton;
