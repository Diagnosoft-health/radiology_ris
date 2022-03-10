import prisma from "src/utils/prisma";

export default async (req, res) => {
   
    if (req.method === "POST") {
      try {
        const data = JSON.parse(req.body)

        console.log(data)
        const order = await prisma.examinationRequest.create({
          data: {
            Patient_room: data.Patient_Room,
            Doctor_Name: data.Doctor_Name,
            Diagnosis: data.Diagnosis,
            Inspection_code: parseInt(data.Inspection_code),
            Patient: {
              connect: {
                Id: data.Patient_Id
              }
            }
          },
         
        })
        
  
        res.status(200).json(order)
      } catch (err) {
        res.status(400).json({ message: "Something went wrong" })
        console.log(err)
      }
    }
  }