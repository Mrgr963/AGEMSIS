import { useState, useContext } from "react"
import { Container, Card, Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import FirebaseContext from "../utils/FirebaseContext"
import JovemFirebaseService from "../services/JovemFirebaseService"

const CriarJovem = () => {

    const [nome, setNome] = useState("")
    const [email, setEmail] = useState("")
    const [birth, setBirth] = useState("")
    const [bairro, setBairro] = useState("")
    const [num, setNum] = useState("")
    const [rg, setRg] = useState("")
    const [cpf, setCpf] = useState("")
    const navigate = useNavigate();

    const firebase = useContext(FirebaseContext)

    const handleSubmit = (event) => {
        event.preventDefault()

        const novoJovem = { nome, email, birth, bairro, num, rg, cpf }
        JovemFirebaseService.criar(
            firebase.getFirestoreDb(),
            (jovemSimples) => console.log(jovemSimples),
            novoJovem
        )

        alert("Seu cadastro foi concluido com sucesso!")
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
        <Container
            className="d-flex justify-content-center align-items-center"
            style={{ height: "100vh", marginTop: "180px", marginBottom: "0px" }} // Adiciona margem superior para ajustar com a navbar
        >
            <Card
                style={{
                    width: "30rem",
                    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                    borderRadius: "10px",
                }}
            >
                <Card.Header
                    style={{ backgroundColor: "#106cfc", color: "#fff" }}
                    className="text-center"
                >
                    <h1>Cadastrar Jovem</h1>
                </Card.Header>
                <Card.Body>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group controlId="formNome" className="mb-3">
                            <Form.Label>
                                <b>Nome Completo:</b>
                            </Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Nome completo"
                                value={nome}
                                onChange={(e) => setNome(e.target.value)}
                                required
                            />
                        </Form.Group>

                        <Form.Group controlId="formEmail" className="mb-3">
                            <Form.Label>
                                <b>Email:</b>
                            </Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="exemplo@email.com"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </Form.Group>

                        <Form.Group controlId="formBirth" className="mb-3">
                            <Form.Label>
                                <b>Data de Nascimento:</b>
                            </Form.Label>
                            <Form.Control
                                type="date"
                                placeholder="DD/MM/AAAA"
                                value={birth}
                                onChange={(e) => setBirth(e.target.value)}
                                required
                            />
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

                        <Form.Group controlId="formNum" className="mb-3">
                            <Form.Label>
                                <b>Número de Contato:</b>
                            </Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="(00) 00000-0000"
                                value={num}
                                onChange={(e) => setNum(e.target.value)}
                                required
                            />
                        </Form.Group>

                        <Form.Group controlId="formRg" className="mb-3">
                            <Form.Label>
                                <b>Registro Geral (RG):</b>
                            </Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="00.000.000-0"
                                value={rg}
                                onChange={(e) => setRg(e.target.value)}
                                required
                            />
                        </Form.Group>

                        <Form.Group controlId="formCpf" className="mb-3">
                            <Form.Label>
                                <b>Certificado de Pessoa Física (CPF):</b>
                            </Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="000.000.000-00"
                                value={cpf}
                                onChange={(e) => setCpf(e.target.value)}
                                required
                            />
                        </Form.Group>

                        <Button
                            type="submit"
                            style={{ backgroundColor: "#106cfc", borderColor: "#106cfc" }}
                            className="w-100"
                        >
                            <b>Cadastrar</b>
                        </Button>
                    </Form>
                </Card.Body>
            </Card>
        </Container>
    )
}

export default CriarJovem