import styled from "styled-components";

export const StyledComponents = () => {
  return (
    <SContainer>
      <STitle>- Styled Components -</STitle>
      <SButton>FIGHT!!</SButton>
    </SContainer>
  );
};

const SContainer = styled.div`
  border: solid 2px #392eff;
  border-radius: 20px;
  padding: 15px 30px;
  margin: 8px auto;
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 20vw;
`;

const STitle = styled.p`
  margin: 0;
  color: #3d84a8;
`;

const SButton = styled.button`
  cursor: pointer;
  background: #abedd8;
  border: none;
  padding: 8px;
  border-radius: 8px;
  &:hover {
    background: #46cdcf;
    color: #fff;
    transition: all 0.3s;
  }
`;
