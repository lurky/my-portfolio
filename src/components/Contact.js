import React, {useState} from 'react'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import emailjs from 'emailjs-com';
import "bootstrap/dist/css/bootstrap.min.css";

const Contact = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
        <>

            <style type="text/css">
                {`
                .btn-c {
                background-color: rgba(35, 35, 127, 0.2);
                color: white;
                }

                .btn-xxl {
                padding: 1rem 1rem;
                font-size: 1.5rem;
                }
                `}
            </style>
            
            <Button variant="c" size="xl" onClick={handleShow}>
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
                <form id="contact">
                <Modal.Body>
                
                    <InputGroup className="mb-3">
                        <InputGroup.Prepend>
                            <InputGroup.Text name="user_email" id="basic-addon1">Email</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl
                            placeholder="Email@email.com"
                            aria-label="Email"
                            aria-describedby="basic-addon1"
                        />
                    </InputGroup>
                    <InputGroup className="mb-3">
                        <InputGroup.Prepend>
                            <InputGroup.Text name="subject" id="basic-addon1">Subject</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl
                            placeholder="Let's Work Together!"
                            aria-label="Email"
                            aria-describedby="basic-addon1"
                        />
                    </InputGroup>
                    <InputGroup>
                        <InputGroup.Prepend>
                            <InputGroup.Text name="mesaage" id="message">Message</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl as="textarea" aria-label="With textarea" />
                    </InputGroup>
                    
                 </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cancel
          </Button>
                    <Button id="sendMail" variant="warning">Send</Button>
                </Modal.Footer>
                </form>
            </Modal>
     
        </>
    );

    

}

export default Contact;
