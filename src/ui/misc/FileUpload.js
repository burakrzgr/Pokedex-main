import React, { useState } from "react";
import { FileUploader } from "react-drag-drop-files";
import { Button, Container, Row,Stack } from "react-bootstrap";
import AddImg from "../../resource/AddImg.png";

const fileTypes = ["JPG", "PNG", "BMP"];
//npm i --save react-drag-drop-files
function FileUpload() {
  const [file, setFile] = useState(null);
  const [tempUrl, setTempUrl] = useState(null);
  const handleChange = (f) => {
    setFile(f);
    setTempUrl(URL.createObjectURL(f));
  };
  const removeImg = () => {
    setFile(null);
    setTempUrl(null);
  };

  return (
    <>
      {tempUrl ? (
        <div
          style={{ height: "25rem" }}
          className="border border-primary rounded dashed ps-1 pe-2 pt-1"
        >
          <img
            src={tempUrl}
            alt=""
            style={{
              height: "100%",
              width: "20rem",
              objectFit: "contain",
            }}
          />
          <div className="d-grid mt-2">
            <Button variant="danger" size="sm" onClick={removeImg}>
              Resmi Kaldır
            </Button>
          </div>
        </div>
      ) : (
        <FileUploader
          handleChange={handleChange}
          name="file"
          children={
            <div
              style={{ height: "28rem", width:"18rem" }}
              className="border border-primary rounded dashed p-1"
            >
              <Stack >
                  <div style={{ height: "8rem" }}></div>
                <div className="text-center">Drag the image of<br/>the pokemon here.</div>
                <div className="text-center pt-4 pb-4">
                  <img
                    src={AddImg}
                    alt="Add Icon"
                    style={{ width: "4rem" }}
                  ></img>
                </div>
                <div className="text-center ">Accepted Formats</div>
                <div className="text-center ">JPG, PNG, BMP</div>
              </Stack>
            </div>
          }
          hoverTitle="Drop Here"
          types={fileTypes}
          multiple={false}
        />
      )}
    </>
  );
}

export default FileUpload;