import { useState } from 'react';
import './App.css';
import Modal from './Modal';

function App() {

  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () =>{
    setModalOpen(true);
  };

  return (
    <div className="App">
       <h1>User Details Modal</h1>
       <button type="button" className="button" onClick={()=>openModal()}>Open Form</button>
        {modalOpen &&
        <div className="modal" onClick={()=>setModalOpen(false)}>
          <div className="modal-content" onClick={(e)=>e.stopPropagation()}>
            <Modal />
          </div>
        </div>
        }

    </div>
  );
}

export default App;
