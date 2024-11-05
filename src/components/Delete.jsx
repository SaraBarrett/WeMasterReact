import {useState} from 'react';


export default function Delete(){
    const [deleteStatus, setDelete] = useState(false);
    
    function confirmDelete(){
        setDelete(true);
    }

    function confirmProceed(){
        setDelete(false);
    }

    return (
        <div>
        {deleteStatus ? 
          <div data-testid="alert" id="alert">
            <h2>Are you sure?</h2>
            <p>These changes can't be reverted!</p>
            <button onClick={confirmProceed}>Proceed</button>
          </div> :
            <button onClick={confirmDelete}>Delete</button>
            }
        </div>    
      );
}