import { useState } from 'react';
import axios from 'axios';
import config from '../../utils/config';
import Input from './Input';
// import Results from './Results';

import { Box, Container, Grid } from '@mui/material';


const uploadImage = async ({ filename, contents }) => {
  if (contents) {

    
    try {
      const resp = await axios.post(
        `${config.api_address}${config.route_path}`,
        {
          name: filename,
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
  const {  Inspection_code } = props
  // let inspection_code = toString(Inspection_code)
  const [input, setInput] = useState();
  const [predictions, setPredictions] = useState([]);
  const [open, setOpen] = useState(false);
  const[fileBase64String, setFileBase64String] = useState("")

  console.log(input)
  // console.log(typeof inspection_code)

  return (
    
     
      <Box>
      <Container >
            <Input
            predictions={predictions}
            Inspection_code={Inspection_code}
              onChange={setInput}
              onSubmit={async () => {
                const result = await uploadImage(input);
                if (result) {
                  const [filename, prediction] = Object.entries(result)[0];
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

