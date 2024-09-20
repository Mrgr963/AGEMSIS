import { Navbar, Form, FormControl, Button, Container, Row, Col } from "react-bootstrap";
import { useState, useEffect } from "react";

const AdmNavBar = ({ onFiltroChange, onIdadeMinimaFiltroChange, onIdadeMaximaFiltroChange }) => {
    const [bairros, setBairros] = useState([]);
    const [bairroFiltro, setBairroFiltro] = useState("");
    const [idadeMinimaFiltro, setIdadeMinimaFiltro] = useState("");
    const [idadeMaximaFiltro, setIdadeMaximaFiltro] = useState("");

    useEffect(() => {
        const bairrosList = [
            "Alto da Boa Vista", "Alto São Francisco", "Baviera", "Boto", "Café Campestre", "Califórnia", 
            "Campo Novo", "Campo Velho", "Carrascal", "Cedro", "Centro", "Cipó dos Anjos", "Cohab", 
            "Combate", "Curicaca", "Custódio", "Daniel dos Queirós", "Dom Maurício", "Herval", "Irajá", 
            "Jardim dos Monólitos", "Jatobá", "Juá", "Juatama", "Monte Alegre", "Nova Jerusalém", 
            "Planalto Renascer", "Planalto Universitário", "Putiú", "Riacho do Meio", "Riacho Verde", 
            "São Bernardo", "São Cristovão", "São João", "São João dos Queiroz", "Sitio Veiga", 
            "Tapuiará", "Triângulo", "Várzea da Onça", "Outro"
        ];
        setBairros(bairrosList);
    }, []);

    const handleBairroChange = (e) => {
        setBairroFiltro(e.target.value);
        onFiltroChange(e.target.value);
    };

    const handleIdadeMinimaChange = (e) => {
        setIdadeMinimaFiltro(e.target.value);
        onIdadeMinimaFiltroChange(e.target.value);
    };

    const handleIdadeMaximaChange = (e) => {
        setIdadeMaximaFiltro(e.target.value);
        onIdadeMaximaFiltroChange(e.target.value);
    };

    const limparFiltros = () => {
        setBairroFiltro("");
        setIdadeMinimaFiltro("");
        setIdadeMaximaFiltro("");
        onFiltroChange("");
        onIdadeMinimaFiltroChange("");
        onIdadeMaximaFiltroChange("");
    };

    return (
        <Navbar bg="light" expand="lg" className="py-3 shadow-sm">
            <Container fluid>
                <Navbar.Brand className="fw-bold text-primary">Filtros:</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarFilters" />
                <Navbar.Collapse id="navbarFilters">
                    <Form className="w-100">
                        <Row className="gy-2 gx-3">
                            <Col xs={12} md={4}>
                                {/* Filtro por Bairro */}
                                <FormControl
                                    as="select"
                                    className="form-select"
                                    value={bairroFiltro}
                                    onChange={handleBairroChange}
                                >
                                    <option value="">Selecione o Bairro</option>
                                    {bairros.map((bairro, index) => (
                                        <option key={index} value={bairro}>{bairro}</option>
                                    ))}
                                </FormControl>
                            </Col>
                            <Col xs={6} md={3}>
                                {/* Filtro por Idade Mínima */}
                                <FormControl
                                    type="number"
                                    placeholder="Idade mínima"
                                    className="form-control"
                                    value={idadeMinimaFiltro}
                                    onChange={handleIdadeMinimaChange}
                                    min="0"
                                />
                            </Col>
                            <Col xs={6} md={3}>
                                {/* Filtro por Idade Máxima */}
                                <FormControl
                                    type="number"
                                    placeholder="Idade máxima"
                                    className="form-control"
                                    value={idadeMaximaFiltro}
                                    onChange={handleIdadeMaximaChange}
                                    min="0"
                                />
                            </Col>
                            <Col xs={12} md={2}>
                                {/* Botão de Limpar Filtros */}
                                <Button variant="outline-dark" className="w-100" onClick={limparFiltros}>
                                    <b>Limpar Filtros</b>
                                </Button>
                            </Col>
                        </Row>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default AdmNavBar;
