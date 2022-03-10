import { useState } from "react";
import { Box, Grid, Typography, Paper, Button } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Results from "./Results";
import { styled } from "@mui/styles";
import UploadButton from "./UploadButton";
import XrayIcon from "./xray";

const CustomButton = styled(Button)({
  background: "linear-gradient(90deg, rgba(26,162,81,1) 0%, rgba(0,76,153,1) 100%)",
  color: "#fff",
});

const useStyles = makeStyles((theme) => ({
  image: {
    maxWidth: "100%",
    maxHeight: "100%",
  },
  box: {
    height: "300px",
    width: "250px",
    alignContent: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#e3e3e3",
    border: "1px dashed #000",
    borderRadius: 2,
  },
}));

const getImage = async (e) => {
  const filename = e.target.files[0].name;
  const file = await new Promise((resolve, reject) => {
    var fr = new FileReader();
    fr.onload = () => {
      resolve(fr.result);
    };
    fr.readAsDataURL(e.target.files[0]);
  });
  const base64result = file.split(",")[1];

  return { filename, contents: base64result };
};

function Input({ onChange, onSubmit, predictions }) {
  const classes = useStyles();
  const [filename, setFilename] = useState();
  const [image, setImage] = useState();
  const [submitting, setSubmitting] = useState(false);

  
  if (filename) {
    return (
      <>
        <Grid container spacing={2} textAlign="center">
          <Grid item container xs={6} direction="column" alignItems="center">
            <Grid item xs={6} textAlign="center">
              <Typography variant="h5">Input Image</Typography>
              <img
                className={classes.image}
                alt="uploaded"
                src={`data:image/png;base64,${image}`}
              />
            </Grid>

            <Grid item container alignItems="center">
              <Grid item xs>
                <UploadButton
                  name="Upload New File"
                  onChange={async (e) => {
                    const image = await getImage(e);
                    setImage(image.contents);
                    setFilename(image.filename);
                    onChange(image);
                  }}
                />
              </Grid>
              <Grid item xs>
                <CustomButton
                  variant="contained"
                  // color='primary'
                  icon="send"
                  disabled={submitting}
                  startIcon={<XrayIcon width={20} height={20} color={"#fff"} />}
                  onClick={async (e) => {
                    e.preventDefault();
                    setSubmitting(true);
                    await onSubmit();
                    setSubmitting(false);
                  }}
                >
                  Get Prediction
                </CustomButton>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={6} justifyContent="center">
            {predictions ? <Results predictions={predictions} image={image} /> : undefined}
          </Grid>
        </Grid>
      </>
    );
  } else {
    return (
      <Box
        sx={{
          border: "1px dashed #909090",
          p: 4,
          width: "250px",
          height: "300px",
          alignItems: "center",
          justifyContent: "center",
          display: "flex",
          background: "#e3e3e3",
        }}
      >
        <UploadButton
          name="Upload Scan File"
          onChange={async (e) => {
            const image = await getImage(e);
            setImage(image.contents);
            setFilename(image.filename);
            onChange(image);
          }}
        />
      </Box>
    );
  }
}

export default Input;
