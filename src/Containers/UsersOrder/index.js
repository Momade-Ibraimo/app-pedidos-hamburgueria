import React from "react";
import { ContainerItens, Button, Imageburger, UserBack } from "./styles";
import burguerImage from "../../assets/burgerBacklist.png"
import H1 from "../../Components/Title"
import Lixoic from "../../assets/Lixoic.png"
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Container from "../../Components/Background"


function GetOrders() {

    const [Users, setUsers] = useState([])
    const navigate = useNavigate()


    useEffect(() => {
        async function GetOrders() {
            const { data } = await axios.get("http://localhost:3001/order")

            setUsers(data.orders)

        }

        GetOrders()
    }, [])



    async function DeleteOrder(id) {

        await axios.delete(`http://localhost:3001/order/${id}`)

        const FilteredUsers = Users.filter(user => user.id !== id)
        setUsers(FilteredUsers)
    }

    function BackToHome() {
        navigate("/")
    }


    return <Container isMOre={true}>

        <Imageburger src={burguerImage} alt="Imagem-burger-tela-de-pedidos" />

        <H1>pedidos</H1>

        <ContainerItens>


            <ul>
                {Users.map((user) => (
                    <UserBack key={user.id}>

                        <div>
                            <p className="ordertxt">{user.order}</p> <p className="nametxt">{user.clientName}</p>

                        </div>

                        <button onClick={() => DeleteOrder(user.id)}><img src={Lixoic} alt="icone-de-Lixo-delete" /></button>

                    </UserBack>
                ))}
            </ul>





            <Button onClick={BackToHome}>
                Voltar
            </Button>

        </ContainerItens>

    </Container>


}

export default GetOrders;