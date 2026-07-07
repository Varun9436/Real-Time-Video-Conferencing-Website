import React from "react";
import "../App.css";
import { useNavigate } from "react-router-dom";
import MouseParticles from "react-mouse-particles";
export default function LandingPage() {
  const router = useNavigate();

  return (
      <>
    <MouseParticles
      g={1}
      color="#8b5cf6"
      cull="col,image-wrapper"
      level={8}
      alpha={0.6}
    />
    <div
  style={{
    position: "absolute",
    width: "500px",
    height: "500px",
    background: "#7c3aed",
    filter: "blur(180px)",
    opacity: 0.25,
    left: "10%",
    top: "20%",
    pointerEvents: "none",
  }}
/>

<div
  style={{
    position: "absolute",
    width: "400px",
    height: "400px",
    background: "#2563eb",
    filter: "blur(160px)",
    opacity: 0.2,
    right: "5%",
    bottom: "5%",
    pointerEvents: "none",
  }}
/>

<div
style={{
minHeight: "100vh",
overflow: "hidden",
background: `
radial-gradient(circle at top left,#7c3aed25,transparent 35%),
radial-gradient(circle at bottom right,#2563eb25,transparent 35%),
linear-gradient(135deg,#020617,#0f172a,#111827)
`,
color: "white",
position: "relative"
}}
>

      <nav
style={{
position:"fixed",
top:0,
left:0,
width:"100%",
display:"flex",
justifyContent:"space-between",
alignItems:"center",
padding:"18px 70px",
background:"rgba(2,6,23,.6)",
backdropFilter:"blur(20px)",
borderBottom:"1px solid rgba(255,255,255,.08)",
zIndex:100,
boxSizing:"border-box"
}}
>
        <h2
          style={{
            margin: 0,
            fontSize: "26px",
            background: "linear-gradient(90deg,#8b5cf6,#3b82f6)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Real Time Video Chat
        </h2>

        <div style={{ display: "flex", gap: 25 }}>
          <p onClick={() => router("/aljk23")} style={{ cursor: "pointer" }}>
            Guest
          </p>
          <p onClick={() => router("/auth")} style={{ cursor: "pointer" }}>
            Login
          </p>
        </div>
      </nav>

      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          minHeight:"100vh",
paddingTop:"120px",
paddingBottom:"60px",
flexWrap:"wrap",
gap:"60px",
          padding: "40px",
        }}
      >

    
        <div style={{ flex:1,
        minWidth:"350px", }}>
          
       
          <h1 style={{ fontSize:"72px",
            fontWeight:"800", lineHeight: 1.2 }}>
            Connect{" "}
            <span style={{ color: "#8b5cf6" }}>Anywhere</span>
            <br />
            Meet{" "}
            <span style={{ color: "#3b82f6" }}>Anyone</span>
          </h1>

       
          <p style={{ color: "#94a3b8", fontSize: "18px", marginTop: 20 }}>
            Fast • Secure • Real-time video calling platform built for modern communication.
          </p>

          <div
            style={{
              display: "flex",
              gap: 30,
              marginTop: 30,
            }}
          >
            <div>
              <h2 style={{ margin: 0, color: "#8b5cf6" }}>550K+</h2>
              <p style={{ margin: 0, color: "#94a3b8" }}>Users</p>
            </div>

            <div>
              <h2 style={{ margin: 0, color: "#3b82f6" }}>99.9%</h2>
              <p style={{ margin: 0, color: "#94a3b8" }}>Uptime</p>
            </div>

            <div>
              <h2 style={{ margin: 0, color: "#22c55e" }}>24/7</h2>
              <p style={{ margin: 0, color: "#94a3b8" }}>Support</p>
            </div>
          </div>

       
         <div
            onClick={()=>router("/auth")}
style={{
marginTop:40,
display:"inline-block",
padding:"18px 40px",
borderRadius:"15px",
fontWeight:"bold",
fontSize:"18px",
cursor:"pointer",
background:"linear-gradient(90deg,#7c3aed,#2563eb)",
transition:".35s",
boxShadow:"0 0 30px rgba(124,58,237,.5)"
}}
onMouseEnter={(e)=>{
e.currentTarget.style.transform="translateY(-5px) scale(1.05)";
e.currentTarget.style.boxShadow="0 0 40px #7c3aed";
}}
onMouseLeave={(e)=>{
e.currentTarget.style.transform="translateY(0)";
e.currentTarget.style.boxShadow="0 0 30px rgba(124,58,237,.5)";
}}
>

            Get Started →
          </div>
        </div>

        {/* RIGHT */}
        <div style={{ flex:1,
minWidth:"400px",
display:"flex",
justifyContent:"center" }}>
          <img
            src="/image2.png"
            alt="hero"
            style={{
              width: "100%",
              borderRadius: "25px",
              boxShadow: "0 0 50px rgba(124,58,237,.5)",
              animation: "float 4s ease-in-out infinite",
            }}
          />
        </div>

        </div>   

  </div>     

</>
);
}