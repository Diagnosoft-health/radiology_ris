
import { executeQuery } from "../../src/utils/db"




const getAllPatients = async (req, res) => {
  try {
    let patientData = await executeQuery("select *, DATE_FORMAT(dateOfBirth, '%Y-%m-%d') dateOfBirth from patient", []);
    res.send(patientData);
  } catch (error) {
    res.status(500).json(error);
  }
};

// get data for a single patient using id

const getPatientById = async (req, res) => {
  //use queury instead of params
  let id = req.query.id;

  try {
    let patientById = await executeQuery(
      `select * from patient where patientId=${id}`,
      []
    );
    res.status(200).json(patientById);
  } catch (error) {
    res.status(500).json(error);
  }
};

const deletePatientById = async (req, res) => {
  //use queury instead of params
  let id = req.query.id;

  try {
    let delPatientById = await executeQuery(
      "delete from patient where patientId=?",
      [id]
    );
    res.status(200).json(delPatientById);
  } catch (error) {
    res.status(500).json(error);
  }
};

const createPatient = async (req, res) => {
  console.log(req.body);

  let firstname = req.body.firstname;
  let lastname= req.body.lastname;
  let middlename = req.body.middlename;
  let mobileNumber = req.body.mobileNumber;
  let dateOfBirth = req.body.dateOfBirth;
  let gender = req.body.gender;
  let identityNumber = req.body.identityNumber;


  try {
    let addPatientData = await executeQuery(
      "insert into patient(firstname, middlename, lastname, dateOfBirth, gender, mobileNumber, identityNumber) values(?,?,?,?,?,?,?)",
      [firstname, middlename, lastname, dateOfBirth, gender,mobileNumber, identityNumber]
    );
    // addEmployeeData = await executeQuery(
    //   `select * from employee where emp_id=${addEmployeeData.insertId}`
    // );
    res.status(201).json(addPatientData);
  } catch (error) {
    res.status(400).json(error);
  }

  
};

const updatePatient = async (req, res) => {
  let id = req.query.id;
  const { firstname, middlename, lastname, dateOfBirth, gender,mobileNumber, identityNumber } = req.body;

  try {
    let patientData = await executeQuery(
      "select * from patient where patientId=?",
      [id]
    );
    console.log(patientData.length);
    if (patientData.length > 0) {
      patientData = await executeQuery(
        "update employee set firstname=?, middlename=?,lastname=?,dateOfBirth=?, gender=?, mobileNumber=?,identityNumber=? where patientId=?",
        [firstname, middlename, lastname, dateOfBirth, gender,mobileNumber, identityNumber,id]
      );
      res.status(200).json(patientData)
    } else {
      res.status(400).json(`Patient not found on this id=${id}`);
    }
  } catch (error) {
    res.status(400).json(error);
  }
};

export {
  getAllPatients,
  getPatientById,
  deletePatientById,
  createPatient,
  updatePatient,
};
