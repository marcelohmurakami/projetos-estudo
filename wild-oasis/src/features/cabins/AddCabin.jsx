import { useState } from "react";
import Button from "../../ui/Button";
import CreateCabinForm from "./CreateCabinForm";
import Modal from "../../ui/Modal";

function AddCabin() {
    const [openForm, setOpenForm] = useState(false);

    return (
        <Modal>
            <Modal.Open opens="cabin-form">
                <Button>Criar novo quarto</Button>
            </Modal.Open>
            <Modal.Window name="cabin-form">
                <CreateCabinForm />
            </Modal.Window>
        </Modal>

        
        //<div>
           // <Button onClick={() => setOpenForm(!openForm)}>Criar quarto</Button>
            //{openForm && (<Modal onClose={() => setOpenForm(false)}><CreateCabinForm onClose={() => setOpenForm(false)} /></Modal>)}
        //</div>
    )
}