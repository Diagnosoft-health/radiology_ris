import { useState } from 'react';
import axios from 'axios';
import config from '../../utils/config';
import Input from './Input';
// import Results from './Results';

import { Box, Container, Grid } from '@mui/material';


const uploadImage = async ({ filename, contents, inspection_code,patient_name }) => {
  if (contents) {

    
    try {
      const resp = await axios.post(
        `${config.api_address}${config.route_path}`,
        {
          name: filename,
          patient_name,
          inspection_code,
          contents,
          
        }
      );
      
      return resp.data;
    } catch (error) {
      if (error.response) {
        console.log(error.response.status);
        console.log(error.response);
      } else {
        console.log(error);
      }
    }
  }
};




function UploadTest(props) {
  const {  Inspection_code, patient_name } = props
  
  const [input, setInput] = useState();
  const [predictions, setPredictions] = useState([]);
  const [open, setOpen] = useState(false);
  const[fileBase64String, setFileBase64String] = useState("")

  console.log(input)
  console.log("return",predictions)
  console.log(typeof Inspection_code)

  return (
    
     
      <Box>
      <Container >
            <Input
            predictions={predictions}
            Inspection_code={Inspection_code}
            patient_Name={patient_name}
              onChange={setInput}
              onSubmit={async () => {
                const result = await uploadImage(input);
                console.log('retuned result',result)
                if (result) {
                  const [filename, prediction] = Object.entries(result)[1];
                  // const [filename, prediction] = result;
                  setPredictions((predictions) => {
                    const new_predictions = [...predictions];
                    new_predictions.push({ filename, prediction });
                    return new_predictions;
                  });
                 
                }
              }} 
            />
      </Container>
      </Box>
   
  );
}

export default UploadTest;

