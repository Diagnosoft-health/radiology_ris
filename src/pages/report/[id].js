import { Box, Button, Container, Grid, Typography } from "@mui/material";
import { EditorState } from "draft-js";
import { convertToRaw } from "draft-js";
import { useRouter } from "next/router";
import draftToHtml from "draftjs-to-html";
import React, { useState } from "react";
import { ReportNavbar } from "src/components/report/report-navbar";
import dynamic from "next/dynamic";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import prisma from "src/utils/prisma";
import Image from "next/image";


const Editor = dynamic(() => import("react-draft-wysiwyg").then((module) => module.Editor), {
  ssr: false,
});
// import TextEditor from 'src/components/report/TextEditor'

function PatientReport(props) {
  const router = useRouter();
  const { patient } = props
  const { id } = router.query;
  const [reportInfo, setReportInfo] = useState([]);
  const [input, setData] = useState({ data: "" });

  const [isError, setError] = useState(null);

  let editorState = EditorState.createEmpty();
  const [description, setDescription] = useState(editorState);
  const onEditorStateChange = (editorState) => {
    setDescription(editorState);
  };

  const addReport = async (e) => {
    e.preventDefault();
    let data = input;
    console.log(data);
    console.log(reportInfo);
    console.log(id);

    try {
      const req = await fetch("/api/order/report", {
        method: "POST",
        body: JSON.stringify({
          ...data,
          Examination_Id: id,
        }),
      });

      const res = await req.json();
    } catch (error) {
      throw error;
    }
  };

  return (
    <div>
      <Box>
        <ReportNavbar />
      </Box>

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 5,
        }}
      >
        <Box sx={{ mt: 3 }}>
          <div className="flex">
            <div className="flex-1 h-screen bg-[#f3f3f3]  p-2 !w-14 !border-r-slate-300">


            <Box sx={{ display: "flex", alignItems: 'center' }}>
                      <Grid item md={6} xs={12}>
                        <Typography variant="subtitle3">Name</Typography>
                      </Grid>
                      <Grid item md={6} xs={12}>
                        <Typography variant="body2">: {patient.Patient.Name}</Typography>
                      </Grid>
                    </Box>

                    <Box sx={{ display: "flex", alignItems: 'center' }}>
                      <Grid item md={6} xs={12}>
                        <Typography variant="subtitle3">Id Number</Typography>
                      </Grid>
                      <Grid item md={6} xs={12}>
                        <Typography variant="body2">: {patient.Patient.Id_Number}</Typography>
                      </Grid>
                    </Box>
                    <Box sx={{ display: "flex", alignItems: 'center' }}>
                      <Grid item md={6} xs={12}>
                        <Typography variant="subtitle3">Gender</Typography>
                      </Grid>
                      <Grid item md={6} xs={12}>
                        <Typography variant="body2">: {patient.Patient.Gender}</Typography>
                      </Grid>
                    </Box>

                    <Box sx={{ display: "flex", alignItems: 'center' }}>
                      <Grid item md={6} xs={12}>
                        <Typography variant="subtitle3">Doctor Name</Typography>
                      </Grid>
                      <Grid item md={6} xs={12}>
                        <Typography variant="body2">: {patient.Doctor_Name}</Typography>
                      </Grid>
                    </Box>
                    <Box sx={{ display: "flex", alignItems: 'center' }}>
                      <Grid item md={6} xs={12}>
                        <Typography variant="subtitle3">Diagnosis</Typography>
                      </Grid>
                      <Grid item md={6} xs={12}>
                        <Typography variant="body2">: {patient.Diagnosis}</Typography>
                      </Grid>
                    </Box>

                    <Box sx={{ display: "flex", alignItems: 'center' }}>
                      <Grid item md={6} xs={12}>
                        <Typography variant="subtitle3">Allergies</Typography>
                      </Grid>
                      <Grid item md={6} xs={12}>
                        <Typography variant="body2">
                          : {patient.Patient.Allergies ? patient.Patient.Allergies : "none"}
                        </Typography>
                      </Grid>
                    </Box>
                    <div className="mt-4">
              <a href="https://diagnosoftdicom.azurewebsites.net/" target={"_blank"}
                rel={"noreferrer"} >
              <Button 
                variant="contained"
              >
                View in Pacs
              </Button>
              </a>

              <img src={`https://chest-predictions.s3.us-east-2.amazonaws.com/${patient.Inspection_code}.png`} alt="No anomaly detected" className="mt-3"/>
              </div>
            </div>
            <div className="flex-none h-screen">
              {isError !== null && <div className="errors">{isError}</div>}
              <form onSubmit={addReport}>
                {/* <TextEditor editorState={description} 
                onEditorStateChange={onEditorStateChange} /> */}
                <div className="bg-[#F8f9fA] h-screen pb-16">
                  <Editor
                    editorState={description}
                    onEditorStateChange={onEditorStateChange}
                    toolbarClassName="flex sticky top-0 z-50 !justify-center mx-auto"
                    editorClassName="mt-1 p-4 bg-white min-h-5xl mx-auto mb-12"
                  />
                </div>

                <textarea
                  style={{ display: "none" }}
                  disabled
                  ref={(val) => (reportInfo.description = val)}
                  value={draftToHtml(convertToRaw(description.getCurrentContent()))}
                />
                <Button
                  variant="contained"
                  type="submit"
                  onClick={() => setData({ data: reportInfo.description.value })}
                >
                  Submit
                </Button>
              </form>
            </div>
          </div>
        </Box>
      </Box>
    </div>
  );
}

export default PatientReport;

export const getServerSideProps = async (context) => {
  try {
    const { id } = context.query;

    const patient = await prisma.examinationRequest.findFirst({
      where: {
        Inspection_code: {
          equals: parseInt(id),
        },
      },
      include: {
        Patient: {
          select: {
            Name: true,
            Id_Number: true,
            Place_of_Birth: true,
            Identity_Type: true,
            Gender: true,
            Mobile_Number: true,
            Allergies: true,
          },
        },
      },
    });
    console.log(patient);
    return {
      props: { patient },
    };
  } catch (error) {
    console.log(error);
  }
};
