import React, { useContext, useState } from "react";
import withAuth from "../utils/withAuth";
import { useNavigate } from "react-router-dom";
import "../App.css";

import { Button, TextField } from "@mui/material";
import RestoreIcon from "@mui/icons-material/Restore";
import { AuthContext } from "../contexts/Authcontext";

function HomeComponent() {
  const navigate = useNavigate();
  const [meetingCode, setMeetingCode] = useState("");

  const { addToUserHistory } = useContext(AuthContext);

  const handleJoinVideoCall = async () => {
    if (!meetingCode) return;

    await addToUserHistory(meetingCode);
    navigate(`/${meetingCode}`);
  };

  return (
    <>


      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "20px 60px",
          background: "rgba(15,23,42,.75)",
          backdropFilter: "blur(20px)",
          borderBottom: "1px solid rgba(255,255,255,.08)",
        }}
      >
        <h2
          style={{
            margin: 0,
            fontSize: "32px",
            fontWeight: "700",
            background: "linear-gradient(90deg,#8b5cf6,#3b82f6)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Real Time Video Chat
        </h2>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "18px",
          }}
        >
          <Button
            startIcon={<RestoreIcon />}
            sx={{
              color: "white",
              textTransform: "none",
              fontSize: "16px",
            }}
            onClick={() => navigate("/history")}
          >
            History
          </Button>

          <Button
            variant="contained"
            sx={{
              textTransform: "none",
              borderRadius: "12px",
              background: "#ef4444",

              "&:hover": {
                background: "#dc2626",
              },
            }}
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
          minHeight: "90vh",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "70px",
          background: "linear-gradient(135deg,#0f172a,#1e293b)",
          color: "white",
        }}
      >
        {/* LEFT */}

        <div style={{ width: "48%" }}>
          <div
            style={{
              display: "inline-block",
              padding: "8px 20px",
              borderRadius: "40px",
              border: "1px solid #4f46e5",
              color: "#8b5cf6",
              marginBottom: "30px",
            }}
          >
            🚀 HD • Secure • Reliable
          </div>

          <h1
            style={{
              fontSize: "64px",
              lineHeight: "1.1",
              marginBottom: "25px",
            }}
          >
            Join{" "}
            <span style={{ color: "#8b5cf6" }}>
              Secure
            </span>

            <br />

            Video{" "}
            <span style={{ color: "#3b82f6" }}>
              Meetings
            </span>
          </h1>

          <p
            style={{
              color: "#94a3b8",
              fontSize: "22px",
              lineHeight: "35px",
              marginBottom: "40px",
            }}
          >
            HD video calls, crystal-clear voice, live chat,
            screen sharing and secure meetings from anywhere.
          </p>

          {/* INPUT */}

          <div
            style={{
              display: "flex",
              gap: "18px",
            }}
          >
            <TextField
              label="Meeting Code"
              variant="outlined"
              onChange={(e) =>
                setMeetingCode(e.target.value)
              }
              sx={{
                width: 360,

                "& .MuiOutlinedInput-root": {
                  borderRadius: "15px",
                  color: "white",

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
                textTransform: "none",
                fontSize: "17px",
                fontWeight: "bold",

                background:
                  "linear-gradient(90deg,#7c3aed,#2563eb)",

                boxShadow:
                  "0px 0px 20px rgba(124,58,237,.45)",

                "&:hover": {
                  background:
                    "linear-gradient(90deg,#8b5cf6,#3b82f6)",

                  transform: "translateY(-2px)",
                },
              }}
            >
              Join Meeting
            </Button>
          </div>

      

          <div
            style={{
              display: "flex",
              gap: "60px",
              marginTop: "60px",
            }}
          >
            <div>
              <h2
                style={{
                  color: "#8b5cf6",
                  marginBottom: 5,
                }}
              >
                HD
              </h2>

              <p style={{ color: "#94a3b8" }}>
                Video Quality
              </p>
            </div>

            <div>
              <h2
                style={{
                  color: "#3b82f6",
                  marginBottom: 5,
                }}
              >
                Live
              </h2>

              <p style={{ color: "#94a3b8" }}>
                Chat
              </p>
            </div>

            <div>
              <h2
                style={{
                  color: "#22c55e",
                  marginBottom: 5,
                }}
              >
                Secure
              </h2>

              <p style={{ color: "#94a3b8" }}>
                Rooms
              </p>
            </div>
          </div>
        </div>

     

        <div
          style={{
            width: "45%",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <img
            src="/videocall.png"
            alt="meeting"
            style={{
              width: "100%",
              maxWidth: "650px",
              borderRadius: "25px",
              boxShadow:
                "0px 0px 40px rgba(124,58,237,.45)",
              animation:
                "float 4s ease-in-out infinite",
            }}
          />
        </div>
      </div>
    </>
  );
}

export default withAuth(HomeComponent);
