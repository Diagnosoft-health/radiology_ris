import { useState } from "react";
import { useRouter } from "next/router";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  TextField,
} from "@mui/material";

const gender = [
  {
    value: "F",
    label: "Female",
  },
  {
    value: "M",
    label: "Male",
  },
  {
    value: "O",
    label: "Other",
  },
];

const marriageStatus = [
  {
    value: "S",
    label: "Single",
  },
  {
    value: "M",
    label: "Married",
  },
  {
    value: "D",
    label: "Divorced",
  },
  {
    value: "O",
    label: "Other",
  },
];

const identityType = [
  {
    value: "N_ID",
    label: "National ID"
  }
]

export const AddPatientForm = (props) => {
  const router = useRouter();
  const [patientValues, setPatient] = useState({
    id: "",
    name: "",
    birthPlace: "",
    dateOfBirth: "",
    email: "",
    mobileNumber: "",
    gender: "",
    identityNumber: "",
    identityType: "",
    emergencyNo: "",
    citizenship: "",
    address: "",
    district: "",
    marriageStatus: "",
    profession: "",
  });

  const handleChange = (event) => {
    console.log("value", event.target.value);
    setPatient({
      ...patientValues,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let data = patientValues
    // console.log(data)

    try {
      const  req = await fetch("/api/patient", {
          method: "POST",
          body: JSON.stringify({
              ...data,
          })
      })

      const res = await req.json()
      await router.push("/patients");
      setPatient({
        id: "",
        name: "",
        birthPlace: "",
        dateOfBirth: "",
        email: "",
        mobileNumber: "",
        gender: "",
        identityNumber: "",
        identityType: "",
        emergencyNo: "",
        citizenship: "",
        address: "",
        district: "",
        marriageStatus: "",
        profession: "",
      })
  } catch (error) {
      console.log(error)
  }
 
    // console.log("data", data.data);
  
  };


  return (
    <form autoComplete="off" noValidate  onSubmit={handleSubmit} {...props} >
      <Card>
        <CardHeader
          subheader="The information about specific patient"
          title="Patient Details"
          sx={{ padding: "8px 24px" }}
        />

        <CardContent>
          <Grid container spacing={3}>
          <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Patient Id"
                name="id"
                onChange={handleChange}
                required
                value={patientValues.id}
                variant="outlined"
                size="small"
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Patient name"
                name="name"
                onChange={handleChange}
                required
                value={patientValues.name}
                variant="outlined"
                size="small"
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Place of birth"
                name="birthPlace"
                onChange={handleChange}
                required
                value={patientValues.birthPlace}
                variant="outlined"
                size="small"
              />
            </Grid>
            <Grid item md={6} xs={12}>
            <TextField
                fullWidth
                label="Gender"
                name="gender"
                onChange={handleChange}
                required
                select
                SelectProps={{ native: true }}
                value={patientValues.gender}
                variant="outlined"
                size="small"
              >
                <option>Choose Gender</option>
                {gender.map((option) => (
              
                  
                  <option key={option.value} value={option.label}>
                     
                    {option.label}
                  </option>
                  
                ))}
              </TextField>
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Identity number"
                name="identityNumber"
                onChange={handleChange}
                type="text"
                value={patientValues.identityNumber}
                variant="outlined"
                size="small"
              />
            </Grid>

            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Identity type"
                name="identityType"
                onChange={handleChange}
                
                select
                SelectProps={{ native: true }}
                value={patientValues.identityType}
                variant="outlined"
                size="small"
              >
                <option>Identity type</option>
                {identityType.map((option) => (
                  
                  <option key={option.value} value={option.label}>
                    {option.label}
                  </option>
                ))}
              </TextField>
            </Grid>
          </Grid>
        </CardContent>

        <CardHeader subheader="Distinct information about a patient" 
        title="Demographics" />

        <CardContent>
          <Grid container spacing={3}>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Mobile number"
                name="mobileNumber"
                onChange={handleChange}
                required
                value={patientValues.mobileNumber}
                variant="outlined"
                size="small"
              />
            </Grid>
            <Grid item md={6} xs={12}>
            <TextField
                fullWidth
                label="Emergency Contact"
                name="emergencyNo"
                onChange={handleChange}
                required
                value={patientValues.emergencyNo}
                variant="outlined"
                size="small"
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Email"
                name="email"
                onChange={handleChange}
                required
                value={patientValues.email}
                variant="outlined"
                size="small"
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Citizenship"
                name="citizenship"
                onChange={handleChange}
                required
                value={patientValues.citizenship}
                variant="outlined"
                size="small"
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Address"
                name="address"
                onChange={handleChange}
                required
                value={patientValues.address}
                variant="outlined"
                size="small"
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="District"
                name="district"
                onChange={handleChange}
                required
                value={patientValues.district}
                variant="outlined"
                size="small"
              />
            </Grid>
            <Grid item md={6} xs={12}>
            <TextField
                fullWidth
                label="Marriage Status"
                name="marriageStatus"
                onChange={handleChange}
                required
                select
                SelectProps={{ native: true }}
                value={patientValues.marriageStatus}
                variant="outlined"
                size="small"
              >
                <option>Choose Marriage Status</option>
                {marriageStatus.map((option) => (
                  <option key={option.value} value={option.label}>
                    {option.label}
                  </option>
                ))}
              </TextField>
            </Grid>

            <Grid item md={6} xs={12}>
            <TextField
                fullWidth
                label="Profession"
                name="profession"
                onChange={handleChange}
                required
                value={patientValues.profession}
                variant="outlined"
                size="small"
              />
            </Grid>
          </Grid>
        </CardContent>

        <Divider />

        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
            p: 2,
          }}
        >
          <Button
            color="secondary"
            variant="outlined"
            size="small"
            sx={{
              mx: 2,
            }}
          >
            Cancel
          </Button>

          <Button color="primary" variant="contained" size="small" type="submit">
            Save details
          </Button>
        </Box>
      </Card>
    </form>
  );
};
