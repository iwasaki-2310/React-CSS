/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";
import styled from "@emotion/styled";

export const Emotion = () => {
  const containerStyle = css`
    border: solid 2px #392eff;
    border-radius: 20px;
    padding: 15px 30px;
    margin: 8px auto;
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 20vw;
  `;
  const titleStyle = css({
    margin: 0,
    color: "#3d84a8",
  });
  return (
    <div css={containerStyle}>
      <p css={titleStyle}>- Emotion -</p>
      <SButton>FIGHT!!</SButton>
    </div>
  );
};

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
