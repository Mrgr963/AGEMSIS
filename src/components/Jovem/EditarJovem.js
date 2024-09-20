import { useEffect, useState, useContext } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { Container, Card, Form, Button } from "react-bootstrap";

import FirebaseContext from "../utils/FirebaseContext"
import JovemFirebaseService from "../services/JovemFirebaseService"

const EditarJovem = () => {

    const [nome, setNome] = useState("")
    const [email, setEmail] = useState("")
    const [birth, setBirth] = useState("")
    const [bairro, setBairro] = useState("")
    const [num, setNum] = useState("")
    const [rg, setRg] = useState("")
    const [cpf, setCpf] = useState("")
    const navigate = useNavigate();

    const { id } = useParams()
    const firebase = useContext(FirebaseContext)

    useEffect(
        () => {
            JovemFirebaseService.getById(
                firebase.getFirestoreDb(),
                (jovem) => {
                    const { nome, email, birth, bairro, num, rg, cpf } = jovem;
                    setNome(nome)
                    setEmail(email)
                    setBirth(birth)
                    setBairro(bairro)
                    setNum(num)
                    setRg(rg)
                    setCpf(cpf)
                },
                id
            )
        }
        ,
        []
    )

    const handleSubmit = (event) => {
        event.preventDefault()
        const jovemEditado = { nome, email, birth, bairro, num, rg, cpf }
        JovemFirebaseService.atualizar(
            firebase.getFirestoreDb(),
            (jovem) => {
                console.log(jovem)
            },
            id,
            jovemEditado
        )
        alert("Cadastro atualizado com sucesso!")
        navigate('/login')
    }

    const handleNome = (event) => {
        setNome(event.target.value)
    }

    const handleEmail = (event) => {
        setEmail(event.target.value)
    }

    const handleBirth = (event) => {
        setBirth(event.target.value)
    }

    const handleBairro = (event) => {
        setBairro(event.target.value)
    }

    const handleNum = (event) => {
        setNum(event.target.value)
    }

    const handleRg = (event) => {
        setRg(event.target.value)
    }

    const handleCpf = (event) => {
        setCpf(event.target.value)
    }

    return (
        <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: "100vh", paddingTop: "60px" }}>
            <Card style={{ width: "40rem", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)", borderRadius: "10px" }}>
                <Card.Header className="text-center" style={{ backgroundColor: "#106cfc", color: "#fff" }}>
                    <h2>Editar Jovem</h2>
                </Card.Header>
                <Card.Body>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="inputNome">
                            <Form.Label><b>Nome:</b></Form.Label>
                            <Form.Control type="text" value={nome} onChange={(e) => setNome(e.target.value)} required />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="inputEmail">
                            <Form.Label><b>Email:</b></Form.Label>
                            <Form.Control type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="inputBirth">
                            <Form.Label><b>Data de Nascimento:</b></Form.Label>
                            <Form.Control type="date" value={birth} onChange={(e) => setBirth(e.target.value)} required />
                        </Form.Group>

                        <Form.Group controlId="formBairro" className="mb-3">
                            <Form.Label>
                                <b>Bairro:</b>
                            </Form.Label>
                            <Form.Select
                                multiple
                                value={bairro}
                                onChange={(e) => {
                                    const options = e.target.options;
                                    let selectedValues = [];
                                    for (let i = 0; i < options.length; i++) {
                                        if (options[i].selected) {
                                            selectedValues.push(options[i].value);
                                        }
                                    }
                                    setBairro(selectedValues); // Armazena os bairros selecionados como um array
                                }}
                                required
                            >
                                <option value="Alto da Boa Vista">Alto da Boa Vista</option>
                                <option value="Alto São Francisco">Alto São Francisco</option>
                                <option value="Baviera">Baviera</option>
                                <option value="Boto">Boto</option>
                                <option value="Café Campestre">Café Campestre</option>
                                <option value="Califórnia">Califórnia</option>
                                <option value="Campo Novo">Campo Novo</option>
                                <option value="Campo Velho">Campo Velho</option>
                                <option value="Carrascal">Carrascal</option>
                                <option value="Cedro">Cedro</option>
                                <option value="Centro">Centro</option>
                                <option value="Cipó dos Anjos">Cipó dos Anjos</option>
                                <option value="Cohab">Cohab</option>
                                <option value="Combate">Combate</option>
                                <option value="Curicaca">Curicaca</option>
                                <option value="Custódio">Custódio</option>
                                <option value="Daniel dos Queirós">Daniel dos Queirós</option>
                                <option value="Dom Maurício">Dom Maurício</option>
                                <option value="Herval">Herval</option>
                                <option value="Irajá">Irajá</option>
                                <option value="Jardim dos Monólitos">Jardim dos Monólitos</option>
                                <option value="Jatobá">Jatobá</option>
                                <option value="Juá">Juá</option>
                                <option value="Juatama">Juatama</option>
                                <option value="Monte Alegre">Monte Alegre</option>
                                <option value="Nova Jerusalém">Nova Jerusalém</option>
                                <option value="Planalto Renascer">Planalto Renascer</option>
                                <option value="Planalto Universitário">Planalto Universitário</option>
                                <option value="Putiú">Putiú</option>
                                <option value="Riacho do Meio">Riacho do Meio</option>
                                <option value="Riacho Verde">Riacho Verde</option>
                                <option value="São Bernardo">São Bernardo</option>
                                <option value="São Cristovão">São Cristovão</option>
                                <option value="São João">São João</option>
                                <option value="São João dos Queiroz">São João dos Queiroz</option>
                                <option value="Sitio Veiga">Sitio Veiga</option>
                                <option value="Tapuiará">Tapuiará</option>
                                <option value="Triângulo">Triângulo</option>
                                <option value="Várzea da Onça">Várzea da Onça</option>
                                <option value="Outro">Outro</option>
                            </Form.Select>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="inputNum">
                            <Form.Label><b>Número para Contato:</b></Form.Label>
                            <Form.Control type="text" value={num} onChange={(e) => setNum(e.target.value)} required />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="inputRg">
                            <Form.Label><b>RG:</b></Form.Label>
                            <Form.Control type="text" value={rg} onChange={(e) => setRg(e.target.value)} required />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="inputCpf">
                            <Form.Label><b>CPF:</b></Form.Label>
                            <Form.Control type="text" value={cpf} onChange={(e) => setCpf(e.target.value)} required />
                        </Form.Group>

                        <Button variant="primary" type="submit" className="w-100">
                            <b>ATUALIZAR</b>
                        </Button>
                    </Form>
                </Card.Body>
            </Card>
        </Container>
    )
}

export default EditarJovem