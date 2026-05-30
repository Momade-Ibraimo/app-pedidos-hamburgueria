import styled from "styled-components";




export const ContainerItens = styled.div`
  display:flex;
  flex-direction:column;
  width: 350px;
    gap: 25px;

  
`
export const Imageburger = styled.img`
    width: 135px;
    height: 150px;
    object-fit: contain;


`



export const Button = styled.button`

    width: 100%;
    height: 60px;
    background: #D9385F;
    color: white;
    font-weight: 700;
    font-size: 14px;
    margin-top: 38px;
    cursor: pointer;
    &:hover{
        opacity: 0.9;
    }
`

export const UserBack = styled.li`
  display: flex;
  padding: 10px;
  background: #36353d;
  border-radius: 12px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.25);
  margin-bottom: 10px;
  gap: 91px;

  button {
    cursor: pointer;
    background: none;
    border: none;
        margin-left: auto;
    &:hover {
      opacity: 0.8;
    }
    &:active {
      opacity: 0.6;
    }
  }
  .ordertxt {
    font-size: 14px;
    font-weight: 400;
    line-height: 16px;
    color: #ffffff;
    opacity: 0.8;
  }

  .nametxt {
    font-size: 14px;
    font-weight: 700;
    line-height: 16px;
    color: #ffffff;
    margin-top: 35px;
  }
  

`