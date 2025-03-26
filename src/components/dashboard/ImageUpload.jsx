import * as React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "@mui/joy/Button";
import { styled, Typography } from "@mui/joy";
import { CloudUploadOutlined } from "@mui/icons-material";
import axios from "axios";
import CircularProgress from "@mui/joy/CircularProgress";

const VisuallyHiddenInput = styled("input")`
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: 0;
  cursor: pointer;
`;

export default function InputFileUpload() {
  const [file, setFile] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
    }
  };

  const handleUpload = async () => {
    if (!file) {
      alert("Please select an image first.");
      return;
    }

    setIsLoading(true); // Start loading
    const formData = new FormData();
    formData.append("image", file);
    const token = localStorage.getItem("token");

    try {
      const response = await axios.post(
        "https://dermacare-group.vercel.app/skin-analysis/analyze/",
        formData,
        {
          headers: {
            Authorization: `Token ${token}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );

      navigate("/assessments", { state: { results: response.data } });
    } catch (error) {
      console.error("Error uploading image:", error);
      alert("Upload failed. Try again.");
    } finally {
      setIsLoading(false); // Stop loading after request completes
    }
  };

  return (
    <div style={{ paddingRight: '2rem', textAlign: "center", display: "flex", flexDirection: "column", gap: "1rem" }}>
      <Button
        component="label"
        variant="outlined"
        color="neutral"
        sx={{
          width: "100%",
          height: "100%",
          borderStyle: "dashed",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          gap: "0.5rem",
          borderRadius: "10px",
        }}
        startDecorator={<CloudUploadOutlined sx={{ fontSize: "2rem" }} />}
      >
        Upload a Skin Photo for Instant Analysis
        <Typography sx={{ fontSize: ".9rem", fontWeight: "300", opacity: "0.7" }}>
          Upload a photo to detect skin conditions and get personalized skincare advice
        </Typography>
        <VisuallyHiddenInput type="file" accept="image/*" onChange={handleFileChange} />
      </Button>

      {file && (
        <Typography sx={{ fontSize: ".9rem", fontWeight: "500", opacity: "0.8" }}>
          Selected File: <strong>{file.name}</strong>
        </Typography>
      )}

      <Button onClick={handleUpload} disabled={!file || isLoading} sx={{ marginTop: "1rem" }}>
        {isLoading ? <CircularProgress size="sm" /> : "Analyze Skin"}
      </Button>
    </div>
  );
}
