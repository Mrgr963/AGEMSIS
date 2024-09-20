import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.js"

import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form, Button, Container, Card } from 'react-bootstrap';

import FirebaseContext from "../utils/FirebaseContext";
import JovemFirebaseService from "../services/JovemFirebaseService";

import AdmNavBar from "../NavBar/AdmNavBar";


const Login = () => {

    const [rg, setRg] = useState("");
    const [cpf, setCpf] = useState("");
    const firebase = useContext(FirebaseContext);
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();

        if (rg === "AGEMADM" && cpf === "AGEMADM") {
            alert("Agente Administrativo identificado, redirecionando para a listagem de jovens!");
            navigate("/listar");
        } else {
            JovemFirebaseService.buscarRgCpf(
                firebase.getFirestoreDb(),
                (jovem) => {
                    if (jovem) {
                        navigate(`/editar/${jovem.id}`)
                    } else {
                        alert("Nenhum jovem encontrado com este RG e CPF!");
                    }
                }
                ,
                rg,
                cpf
            )
        }
    }

    return (
        <div>
            <Container className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
                <Card style={{ width: '25rem', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', borderRadius: '10px' }}>
                    <Card.Header style={{ backgroundColor: '#106cfc', color: '#fff' }} className="text-center">
                        <h1>AGEMSIS</h1>
                    </Card.Header>
                    <Card.Body>
                        <Form onSubmit={handleLogin}>
                            <Form.Group controlId="formRg" className="mb-3">
                                <Form.Label><i className="fas fa-user"></i><b>RG:</b></Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="00.000.000-0"
                                    value={rg}
                                    onChange={(e) => setRg(e.target.value)}
                                />
                            </Form.Group>

                            <Form.Group controlId="formCpf" className="mb-3">
                                <Form.Label><i className="fas fa-lock"></i><b>CPF:</b></Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="000.000.000-00"
                                    value={cpf}
                                    onChange={(e) => setCpf(e.target.value)}
                                />
                            </Form.Group>

                            <Button style={{ backgroundColor: '#106cfc', borderColor: '#106cfc' }} type="submit" className="w-100 mb-2">
                                <b>ACESSAR CADASTRO</b>
                            </Button>
                        </Form>

                        <Link to="/criar">
                            <Button style={{ backgroundColor: '#106cfc', borderColor: '#106cfc' }} className="w-100">
                                <b>CADASTRAR-SE</b>
                            </Button>
                        </Link>
                    </Card.Body>
                </Card>
            </Container>
        </div>
    )
}

export default Login