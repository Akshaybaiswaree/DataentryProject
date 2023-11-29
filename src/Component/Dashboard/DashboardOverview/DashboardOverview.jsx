import React from "react";

const DashboardOverview = () => {
  const boxColorsSet1 = [" #ffe6ff", "#EBE9EB", "#e6ffe6", "#ffddcc"];
  const boxColorsSet2 = ["#ffddcc", "#e6ffe6", "#EBE9EB", "#ffe6ff"];
  const boxContentSet1 = [
    "Total Users",
    "Total Registration",
    "Pending Registration",
    "Cancel Users",
  ];
  const boxContentSet2 = [
    "Active Users",
    "Inactive Users",
    "Today's Recovery",
    "Total Recovery",
  ];

  return (
    <div style={{ width: "100%", display: "flex", gap: "0px" }}>
      <div style={{ display: "flex", flexWrap: "wrap", padding: "20px", gap: "15%", textAlign: "center",}}>
        {boxColorsSet1.map((color, index) => (
          <div
            key={index}
            style={{
              backgroundColor: color,
              border: "#ebe9eb",
              margin: "20px",
              padding: "40px",
              fontWeight: "800",
              borderRadius: "10px",
              width: "150px",
              height: "150px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <span style={{ marginTop: "5px",marginBottom:"5px", height: "10px", fontSize: "20px", marginRight: "0%" }}>
              100
            </span>
            <p style={{ color: "gray", fontWeight: "600", marginLeft: "0px", textAlign: "center", marginTop: "10px" }}>
              {boxContentSet1[index]}
            </p>
          </div>
        ))}
      </div>
      <div style={{ display: "flex", flexWrap: "wrap", padding: "20px", gap: "15%", textAlign: "center" }}>
        {boxColorsSet2.map((color, index) => (
          <div
            key={index}
            style={{
              backgroundColor: color,
              border: "#ebe9eb",
              margin: "20px",
              padding: "40px",
              fontWeight: "800",
              borderRadius: "10px",
              width: "150px",
              height: "150px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <span style={{ marginTop: "5px",  marginBottom:"5px", height: "10px", fontSize: "20px", marginRight: "0%" }}>100</span>
            <p style={{ color: "gray", fontWeight: "600", marginLeft: "0px", textAlign: "center", marginTop: "10px" }}>
              {boxContentSet2[index]}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DashboardOverview;
