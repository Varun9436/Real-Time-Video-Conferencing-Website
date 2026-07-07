import React, { useContext, useState } from 'react'
import withAuth from '../utils/withAuth'
import { useNavigate } from 'react-router-dom'
import "../App.css";
import { Button, IconButton, TextField } from '@mui/material';
import RestoreIcon from '@mui/icons-material/Restore';
import { AuthContext } from '../contexts/Authcontext';

function HomeComponent() {


    let navigate = useNavigate();
    const [meetingCode, setMeetingCode] = useState("");


    const {addToUserHistory} = useContext(AuthContext);
    let handleJoinVideoCall = async () => {
        await addToUserHistory(meetingCode)
        navigate(`/${meetingCode}`)
    }

  return (
  <div
    style={{
      minHeight: "100vh",
      background:
        "linear-gradient(135deg,#020617,#0f172a,#1e1b4b)",
      color: "white",
    }}
  >

    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "20px 60px",
        background: "rgba(15,23,42,.6)",
        backdropFilter: "blur(20px)",
        borderBottom: "1px solid rgba(255,255,255,.08)",
      }}
    >
      <h2
        style={{
          margin: 0,
          background:
            "linear-gradient(90deg,#8b5cf6,#3b82f6)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          fontSize: "32px",
        }}
      >
        Real Time Video Chat
      </h2>

      <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
        <Button
          startIcon={<RestoreIcon />}
          sx={{ color: "white" }}
          onClick={() => navigate("/history")}
        >
          History
        </Button>

        <Button
          variant="contained"
          color="error"
          onClick={() => {
            localStorage.removeItem("token");
            navigate("/auth");
          }}
        >
          Logout
        </Button>
      </div>
    </div>


    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        height: "85vh",
        padding: "40px",
      }}
    >

      <div style={{ width: "45%" }}>
        <h1
          style={{
            fontSize: "55px",
            marginBottom: "20px",
            lineHeight: 1.2,
          }}
        >
          Connect
          <span style={{ color: "#8b5cf6" }}> Anywhere </span>
          <br />
          Meet
          <span style={{ color: "#3b82f6" }}> Everyone </span>
        </h1>

        <p
          style={{
            color: "#94a3b8",
            fontSize: "20px",
            marginBottom: "35px",
          }}
        >
          HD Video Meetings • Live Chat • Screen Sharing • Secure Rooms
        </p>

        <div style={{ display: "flex", gap: 15 }}>
          <TextField
            label="Meeting Code"
            variant="outlined"
            onChange={(e) => setMeetingCode(e.target.value)}
            sx={{
              width: 350,

              "& .MuiOutlinedInput-root": {
                color: "white",
                borderRadius: "15px",

                "& fieldset": {
                  borderColor: "#475569",
                },

                "&:hover fieldset": {
                  borderColor: "#8b5cf6",
                },

                "&.Mui-focused fieldset": {
                  borderColor: "#3b82f6",
                },
              },

              "& label": {
                color: "#94a3b8",
              },
            }}
          />

          <Button
            variant="contained"
            onClick={handleJoinVideoCall}
            sx={{
              px: 5,
              borderRadius: "15px",
              fontWeight: "bold",
              background:
                "linear-gradient(90deg,#7c3aed,#2563eb)",

              "&:hover": {
                background:
                  "linear-gradient(90deg,#8b5cf6,#3b82f6)",
                transform: "translateY(-2px)",
              },
            }}
          >
            JOIN
          </Button>
        </div>
      </div>


      <div style={{ width: "45%" }}>
        <img
          src="/videocall.png"
          alt="video"
          style={{
            width: "100%",
            borderRadius: "25px",
            boxShadow: "0 0 40px rgba(124,58,237,.5)",
            animation: "float 4s ease-in-out infinite",
          }}
        />
      </div>
    </div>
  </div>
);
}


export default withAuth(HomeComponent)