import { Box, Grid, Typography, Paper } from "@mui/material";


function Results({ predictions, image }) {
  const overlay = {
    filter: "invert(1) ",
    position: "absolute",
    // top: '146px',
    right: "164px",
    opacity: 0.4,
    zIndex: 100,
  };

  const imge = {
    width: '100%',
  }

 
  if (!predictions.length) {
    return null;
  } else {
    const reversed = [...predictions].reverse();
    console.log(reversed)
    return (
      <>
        <Box textAlign="center">
          <Typography variant="h5">Predictions</Typography>
        </Box>
        {reversed.map((prediction, i) => {
          return (
            <Box container
             direction="column" 
             key={i}>
              <br />
              <div >
                {/* <img src={`data:image/png;base64,${prediction.prediction}`} 
                alt="prediction" 
                style={overlay} /> */}
                <div >
                  <img src={prediction.prediction} 
                  alt="prediction"  
                  style={imge} />
                  
                  
                </div>
              </div>
            </Box>
          );
        })}
      </>
    );
  }
}

export default Results;
