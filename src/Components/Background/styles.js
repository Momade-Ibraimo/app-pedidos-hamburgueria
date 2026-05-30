import styled from "styled-components";
import background from "../../assets/bg.png";

export const Container = styled.div`
 ${Propos => Propos.isMores? "min-height: 100vh;" : " height:100vh;"}
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