import { useEffect, useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button, Table, Container, Row, Col } from "react-bootstrap";

import JovemFirebaseService from "../services/JovemFirebaseService";
import FirebaseContext from "../utils/FirebaseContext";
import AdmNavBar from "../NavBar/AdmNavBar";



const ListarJovem = () => {
  const [jovens, setJovens] = useState([]);
  const [filtroBairro, setFiltroBairro] = useState("");
  const [filtroIdadeMinima, setFiltroIdadeMinima] = useState("");
  const [filtroIdadeMaxima, setFiltroIdadeMaxima] = useState("");
  const navigate = useNavigate();

  const firebase = useContext(FirebaseContext);

  useEffect(() => {
    JovemFirebaseService.listar(firebase.getFirestoreDb(), (jovens) => {
      setJovens(jovens);
    });
  }, [firebase]);

  const handleDeletar = (id) => {
    if (window.confirm(`Deseja excluir este jovem do banco de dados?`)) {
      JovemFirebaseService.deletar(
        firebase.getFirestoreDb(),
        (response) => {
          const result = jovens.filter((jovem) => jovem.id !== id);
          setJovens(result);
        },
        id
      );
      alert("Jovem excluído com sucesso!");
      navigate("/listar");
    }
  };

  const calcularIdade = (dataNascimento) => {
    const hoje = new Date();
    const nascimento = new Date(dataNascimento);
    let idade = hoje.getFullYear() - nascimento.getFullYear();
    const mes = hoje.getMonth() - nascimento.getMonth();
    if (mes < 0 || (mes === 0 && hoje.getDate() < nascimento.getDate())) {
      idade--;
    }
    return idade;
  };

  const renderJovens = () => {
    const jovensFiltrados = jovens.filter((jovem) => {
      const idade = calcularIdade(jovem.birth);
      const bairroJovem = String(jovem.bairro || "").toLowerCase().trim();
      const filtroBairroNormalizado = filtroBairro.toLowerCase().trim();

      return (
        (filtroBairro === "" || bairroJovem === filtroBairroNormalizado) &&
        (filtroIdadeMinima === "" || idade >= filtroIdadeMinima) &&
        (filtroIdadeMaxima === "" || idade <= filtroIdadeMaxima)
      );
    });

    return jovensFiltrados.map((jovem) => (
      <tr key={jovem.id}>
        <td>{jovem.nome}</td>
        <td>{jovem.email}</td>
        <td>{jovem.birth}</td>
        <td>{jovem.bairro}</td>
        <td>{jovem.num}</td>
        <td>{jovem.rg}</td>
        <td>{jovem.cpf}</td>
        <td>
          <Link to={`/editar/${jovem.id}`} className="btn btn-warning btn-sm">
            <b>Editar</b>
          </Link>
        </td>
        <td>
          <Button
            variant="danger"
            size="sm"
            onClick={() => handleDeletar(jovem.id)}
          >
            <b>Deletar</b>
          </Button>
        </td>
      </tr>
    ));
  };

  return (
    <div>
      <AdmNavBar
        onFiltroChange={setFiltroBairro}
        onIdadeMinimaFiltroChange={setFiltroIdadeMinima}
        onIdadeMaximaFiltroChange={setFiltroIdadeMaxima}
      />
      <Container fluid className="page-content py-4">
        <Row className="mb-3">
        </Row>
        <Row>
          <Col>
            <Table striped bordered hover responsive className="table-content">
              <thead className="table-dark">
                <tr>
                  <th>Nome</th>
                  <th>E-Mail</th>
                  <th>Data de Nascimento</th>
                  <th>Bairro</th>
                  <th>Número de Contato</th>
                  <th>RG</th>
                  <th>CPF</th>
                  <th>Ações</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>{renderJovens()}</tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ListarJovem;
