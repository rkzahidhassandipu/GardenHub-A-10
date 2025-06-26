import React from "react";
import { FaTrash } from "react-icons/fa";
import { toast } from "react-toastify";

const Delete = ({ id, onDelete }) => {
  const handleDelete = () => {
    const confirmed = window.confirm("Are you sure you want to delete this tip?");
    if (!confirmed) return;

    fetch(`https://garden-hub-server-six.vercel.app/shareTips/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount) {
          toast.success("Successfully deleted the tip");
          onDelete(id); // Tell parent to update the list
        } else {
          toast.error("Failed to delete the tip");
        }
      })
      .catch(() => {
        toast.error("Something went wrong");
      });
  };

  return (
    <button onClick={handleDelete} className="text-red-500 hover:text-red-600">
      <FaTrash />
    </button>
  );
};

export default Delete;
