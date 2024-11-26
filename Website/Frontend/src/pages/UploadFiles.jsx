import { PostAdd } from "@mui/icons-material";
import { Container, Paper, Typography, Button, Box } from "@mui/material";
import Dropzone from "react-dropzone";
import { useState } from "react";
import { useNavigate } from "react-router";

export default function UploadFiles() {
  const navigate = useNavigate();


  const [files, setFiles] = useState([]);
  const handleDrop = (acceptedFiles) => {
    setFiles(acceptedFiles);
    console.log(acceptedFiles);
    navigate("/preview", { state: { file: acceptedFiles[0] } });
  };

  return (
    <Container maxWidth="md" sx={{ }}>
      <Paper
        elevation={5}
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 2,
          p: 4,
          my: 2,
          textAlign: "center",
        }}
      >
        {/* Title */}

        <Box>
          <Typography variant="h4" color="primary" gutterBottom>
            In Tài Liệu
          </Typography>
          <Typography variant="body1">
            Hãy tải file bạn cần in và bắt đầu công việc
          </Typography>
        </Box>

        {/* Upload Button */}
        <Dropzone onDrop={handleDrop}>
          {({ getRootProps, getInputProps }) => (
            <Box {...getRootProps()} sx={{ mt: 2, textAlign: "center" }}>
              <input {...getInputProps()} />
              <Button variant="contained" color="primary" size="large">
                Tải File
              </Button>
            </Box>
          )}
        </Dropzone>

        {/* Drag-and-Drop Section */}
        <Box>
          <Dropzone onDrop={handleDrop}>
            {({ getRootProps, getInputProps }) => (
              <Box
                {...getRootProps()}
                sx={{
                  border: "2px dashed",
                  borderColor: "primary.main",
                  borderRadius: 2,
                  p: 3,
                  mt: 3,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: 1,
                  cursor: "pointer", // Indicate the area is clickable
                }}
              >
                <input {...getInputProps()} />
                <PostAdd fontSize="large" color="primary" />
                <Typography variant="body2" color="textSecondary">
                  Hoặc kéo thả file vào đây
                </Typography>
              </Box>
            )}
          </Dropzone>
  
          {/* Supported Formats */}
          <Typography variant="body2" color="textSecondary" sx={{ mt: 2 }}>
            Các định dạng được hỗ trợ: .doc, .dox, .pdf, .xlsx
          </Typography>
        </Box>
      </Paper>
    </Container>
  );
}
