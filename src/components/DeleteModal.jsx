import React, { useEffect, useState } from 'react'

function DeleteModal({confirmDelete}) {
   

  return (
    
    <div className="modal fade" id="deleteModal" tabIndex="-1" aria-labelledby="deleteModalLabel" aria-hidden="true">
      <div className="modal-dialog modal-lg">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5 modal-heading" id="exampleModalLabel">Confirm Delete</h1>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
          Are You sure to delete this task?
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
            <button type="button" className="btn btn-danger" onClick={()=>confirmDelete()} data-bs-dismiss="modal">Delete</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DeleteModal
