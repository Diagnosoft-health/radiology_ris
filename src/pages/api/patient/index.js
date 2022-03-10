import prisma from "src/utils/prisma";

export default async (req, res) => {
   
    if (req.method === "POST") {
      try {
        const data = JSON.parse(req.body)

        console.log(data)
        const order = await prisma.patient.create({
          data: {
            Id: parseInt(data.id),
            Name: data.name,                             
            Place_of_Birth: data.birthPlace ,                       
            Id_Number: data.identityNumber  ,                      
            Identity_Type: data.identityType,                   
            Gender: data.gender     ,                      
            Profession: data.profession  ,                     
            Address: data.address   ,                                                
            District : data.district   ,                                            
            Email: data.email      ,                      
            Marriage_Status: data.marriageStatus  ,                                        
            Mobile_Number: data.mobileNumber    ,                
            Emergency_Contact: data.emergencyNo ,               
            Citizenship: data.citizenship      ,   
            
          },
         
        })
        
  
        res.status(200).json(order)
      } catch (err) {
        res.status(400).json({ message: "Something went wrong" })
        console.log(err)
      }
    }
  }