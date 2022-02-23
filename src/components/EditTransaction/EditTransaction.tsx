import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { Button } from 'react-bootstrap';
import edit from '../../edit.svg';

import { useContext } from 'react';
import {GlobalContext} from '../../context/GlobalState';

type Props = {
    transaction: {
        id: number, 
        text: string, 
        amount: number
    }
}

export default function EditTransaction({transaction}:Props) {
    const [show, setShow] = useState(false);
    const [text, setText] = useState(transaction.text)
    const [amount, setAmount] = useState(transaction.amount)
    const [modalText, setModalText] = useState('Edite')

    const {editTransaction} = useContext(GlobalContext);
  
    const handleClose = () => setShow(false);
    const handleShow = () => {
        setShow(true)
        setModalText('Edite')
    };
    const handleSaveEdit = () =>{
      if(text && amount){
        editTransaction(transaction.id, text, amount)
        setShow(false)
      }else{
        setModalText('Preencha todos os campos!')
      }
    }
  
    return (
      <>
        <Button className="editButton" onClick={handleShow}>
          <img style={{position:"absolute", top:"2px", right: "1px", width:"20px"}} src={edit} />
        </Button>
  
        <Modal show={show} onHide={handleClose} centered>
          <Modal.Header closeButton>
            <Modal.Title>{modalText}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
              <input type="text" onChange={(e)=>setText(e.target.value)} value={text} placeholder="texto..." />
              <input type="number" onChange={(e)=>setAmount(e.target.valueAsNumber)} value={amount} placeholder="valor..." />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleSaveEdit}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
}
