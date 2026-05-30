import React from "react";
import {  ContainerItens, InputLabel, Input, Button, Imageburger } from "./styles";
import burguerImage from "../../assets/burger1.png"
import H1 from "../../Components/Title"
import { useState, useRef } from "react";
import axios from "axios";
import Container from "../../Components/Background";




const App = () => {

    const [Users, setUsers] = useState([])

    const inputPedido = useRef()
    const inputName = useRef()



   async function AddPedido() {

    const {data: newUser} = await axios.post("http://localhost:3001/order", {
        order: inputPedido.current.value,
        clientName: inputName.current.value
    })
    setUsers([...Users, newUser])

    }

    return <Container>

        <Imageburger src={burguerImage} alt="Imagem-burger-tela-de-fazer-pedidos" />

        <H1>Faça seu pedido!</H1>

        <ContainerItens>


            <InputLabel>Pedido</InputLabel>
            <Input ref={inputPedido} placeholder="1 Coca-Cola, 1 X-Salada" />

            <InputLabel>Nome do Cliente</InputLabel>
            <Input ref={inputName} placeholder="Digite seu Nome" />

            <Button onClick={AddPedido} to="/orders">
                Novo Pedido
            </Button>


        </ContainerItens>

    </Container>


}

export default App;