export const StyledJsx = () => {
  return (
    <>
      <div className="container">
        <p className="title">- Styled JSX -</p>
        <button className="button">FIGHT!!</button>
      </div>
      <style jsx="true">{`
        .container {
          border: solid 2px #392eff;
          border-radius: 20px;
          padding: 15px 30px;
          margin: 8px auto;
          display: flex;
          justify-content: space-around;
          align-items: center;
          width: 20vw;
        }
        .title {
          margin: 0;
          color: #3d84a8;
        }

        .button {
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
        }
      `}</style>
    </>
  );
};
