import React, {useState} from 'react'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import "bootstrap/dist/css/bootstrap.min.css";

const Contact = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button className="front" variant="dark" onClick={handleShow}>
               Contact Me
            </Button>

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Send Me an Email</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <InputGroup className="mb-3">
                        <InputGroup.Prepend>
                            <InputGroup.Text id="basic-addon1">Email</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl
                            placeholder="Email@email.com"
                            aria-label="Email"
                            aria-describedby="basic-addon1"
                        />
                    </InputGroup>
                    <InputGroup className="mb-3">
                        <InputGroup.Prepend>
                            <InputGroup.Text id="basic-addon1">Subject</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl
                            placeholder="Let's Work Together!"
                            aria-label="Email"
                            aria-describedby="basic-addon1"
                        />
                    </InputGroup>
                    <InputGroup>
                        <InputGroup.Prepend>
                            <InputGroup.Text>Message</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl as="textarea" aria-label="With textarea" />
                    </InputGroup>
        </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cancel
          </Button>
                    <Button variant="warning">Send</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default Contact;
