import estilos from "../styles/topo.module.css"
import { Container,Row,Col } from "react-bootstrap"

export default function Topo(){
    return(
        <>
            <div className={estilos.background}></div>
            <div className={estilos.texture}></div>
            <Container className={estilos.container}>
                <Row className={estilos.row}>
                    <Col xs={12} md={6}>
                        <img src="/assets/mobile.png" alt="" className="img-fluid" />
                    </Col>
                    <Col xs={12} md={6} className={estilos.direita}>
                        <h6>FOODO</h6>
                        <h2>Get Your Food In</h2>
                        <h1>FOODO</h1>
                        <p>Donec vitae lacus in tellus gravida tempor id ut turpis. Pellentesque fermentum, dui vel malesuada mattis, arcu est elementum lacus, vitae viverra felis turpis at odio.</p>
                        <button className={estilos.botao}>Download App</button>
                    </Col>
                </Row>
            </Container>
        </>
    )
}