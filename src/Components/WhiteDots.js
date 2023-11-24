function WhiteDots() {
  const dotStyle = {
    width: "9.03px",
    height: "9.03px",
    backgroundColor: "white",
    borderRadius: "50%",
    marginRight: "6.77px", // Adjust the spacing between dots as needed
  };

  return (
    <div style={{ display: "flex", marginTop: "6px" }}>
      <div style={dotStyle}></div>
      <div style={dotStyle}></div>
      <div style={dotStyle}></div>
      <div style={dotStyle}></div>
    </div>
  );
}

export default WhiteDots;
