import styled from "styled-components";
import background from "../../assets/bg.png";
import { Link } from "react-router-dom";

export const Container = styled.div`
  height:100vh;
  /* height: auto; */

  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 400px;
  align-items: center;

  background: url("${background}");
  background-size: cover;
  margin-top: 1px;
  margin-bottom: 1px;
`;

export const ContainerItens = styled.div`
  display: flex;
  flex-direction: column;
  width: 350px;
  gap: 25px;
`;
export const Imageburger = styled.img`
  width: 291px;
  object-fit: contain;
`;

export const InputLabel = styled.label`
  font-size: 14px;
  color: white;
  font-weight: 600;
  margin-bottom: -25px;
  margin-left: 7px;
`;

export const Input = styled.input`
  width: 100%;
  height: 41px;
  background: #fff3f3;
  color: black;
  border: none;
  border-radius: 14px;
  padding-left: 16px;
`;

export const Button = styled(Link)`
    align-items: center;
    flex-direction: column;
    justify-content: center;
    display: flex;
    text-decoration: none;
  width: 100%;
  height: 60px;
  background: #d9385f;
  color: white;
  font-weight: 700;
  font-size: 14px;
  margin-top: 38px;
  cursor: pointer;
  &:hover {
    opacity: 0.9;
  }
  &:active {
    opacity: 0.7;
  }
`;

