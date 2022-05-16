import prisma from "src/utils/prisma";

export default async (req, res) => {
   
    if (req.method === "POST") {
      try {
        const data = JSON.parse(req.body)

        // console.log(data)
        const order = await prisma.detailedReport.create({
          data: {
            Report_Content: data.data,
            ExaminationRequest: {
              connect: {
                Inspection_code: parseInt(data.Examination_Id)
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