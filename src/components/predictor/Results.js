import { Box, Grid, Typography, Paper } from "@mui/material";
import WarningIcon from '@mui/icons-material/Warning';

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
    console.log("reverse", reversed)
    return (
      <>
        <Box textAlign="center">
          <Typography variant="h5">Predictions</Typography>
        </Box>
        {reversed.map((p, i) => {
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
                  {/* <img src={p.image} 
                  alt="prediction"  
                  style={imge} /> */}
                  
                  {p.prediction.map((prediction, i) => {
                    return (
                      <div key={i}>
                        <p>{prediction.text}</p>
                        
                        
                        { prediction['Reconstruction error'] > 1.0 ? (<p><WarningIcon  color="error" fontSize="medium"/> Critical anomaly detected</p>): prediction['Reconstruction error'] > 0.1 ? (<p><WarningIcon color="action" fontSize="medium"/> Major anomaly detected</p>): prediction['Reconstruction error'] > 0.01 ?  (<p><WarningIcon color="warning" fontSize="medium"/> Moderate anomaly detected</p>): prediction['Reconstruction error'] > 0.003 ? (<p><WarningIcon color="info" fontSize="medium"/> Slight anomaly detected</p>): (<p><WarningIcon fontSize="medium"/> No anomaly detected</p>) }
                        
                        </div>
                    )
                  })}
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
