import React from "react";
import { Container as Containe } from "./styles"

const Container = ({children, isMore}) => {
    return <Containe isMore={isMore}>{children}</Containe>
}


export default Container