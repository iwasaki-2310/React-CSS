export const InlineStyle = () => {
    const containerStyle = {
        border:"solid 2px #392eff",
        borderRadius:"20px",
        padding:"15px 30px",
        margin:"8px auto",
        display:"flex",
        justifyContent:"space-around",
        alignItems:"center",
        width:"20vw",
    };
    const titleStyle = {
        margin:"0",
        color:"#3d84a8"
    };
    const buttonStyle = {
        background:"#abedd8",
        border:"none",
        padding:"8px",
        borderRadius:"8px"
    };
  return(
    <div style={containerStyle}>
        <p style={titleStyle}>- Inline Styles</p>
        <button style={buttonStyle}>FIGHT!!</button>
    </div>
  );
} 