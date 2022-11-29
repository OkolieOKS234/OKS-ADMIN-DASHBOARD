import {Box,Button, TextField} from "@mui/material";
import {Formik} from 'formik';
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../../components/Header";

// the values in the form
const initialValues = {
  Name:"",
  Age: "",
  PhoneNumber: "",
  Email: "",
  MedicalCondition: "",

}
// Regex for checking what the value is
const RegexExp = /^((\+[1-9]{1,4}[-]?)|(\([0-9]{2,3}\)[-]?)|([0-9]{2,4})[-]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;


// schema for validation
const userSchema = yup.object().shape({
Name: yup.string().required("required"),

Age: yup.string().required("required"),
// to check the pattern for the phoneNumber
PhoneNumber: yup.string().matches(RegexExp, "Phone Number is not valid").required("required"),
// Validation for email you don't need to write .matches
Email: yup.string().email("Email is not valid").required("required"),
MedicalCondition: yup.string().required("required")
});




const Form = () => {
const isNonMobile = useMediaQuery(("min-width:600px"))



const handleSubmit = ()=>{
    console.log("submitted")
}

  return <Box m="20px">
<Header titlle="CREATE USER" subtitle="Create a New User profile"/>
 <Formik
 onSubmit={handleSubmit}
 initialValues={initialValues}
 validationSchema={userSchema}
 >

{({values, errors, touched, handleBlur,handleChange,handleSubmit})=>(
<form onSubmit={handleSubmit}>
<Box 
display="grid" 
gap="30px" 
gridTemplateColumns="repeat(4, minmax(0, 1fr))"
sx={{
  "& > div":{gridColumn: isNonMobile ? undefined :"span 4"}
}}
>
  {/* Name field */}
<TextField
fullWidth
variant="filled"
type="text"
label="Full Name"
onBlur={handleBlur}
onChange={handleChange}
value={values.Name}
name="Name"
errors={!!touched.Name && !!errors.Name}
helperText={touched.Name && errors.Name}
sx={{gridColumn: "span 2"}}
/>
{/* Age */}
<TextField
fullWidth
variant="filled"
type="number"
label="Age"
onBlur={handleBlur}
onChange={handleChange}
value={values.Age}
name="Age"
errors={!!touched.Age && !!errors.Age}
helperText={touched.Age && errors.Age}
sx={{gridColumn: "span 4"}}
/>
{/* Phone Number */}
<TextField
fullWidth
variant="filled"
type="text"
label="Phone Number"
onBlur={handleBlur}
onChange={handleChange}
value={values.PhoneNumber}
name="PhoneNumber"
errors={!!touched.PhoneNumber && !!errors.PhoneNumber}
helperText={touched.PhoneNumber && errors.PhoneNumber}
sx={{gridColumn: "span 2"}}
/>
{/* Email */}
<TextField
fullWidth
variant="filled"
type="email"
label="Email Address"
onBlur={handleBlur}
onChange={handleChange}
value={values.Email}
name="Email"
errors={!!touched.Email && !!errors.Email}
helperText={touched.Email && errors.Email}
sx={{gridColumn: "span 4"}}
/>
{/* Medical Condition */}
<TextField
fullWidth
variant="filled"
type="text"
label="Medical Condition"
onBlur={handleBlur}
onChange={handleChange}
value={values.MedicalCondition}
name="MedicalCondition"
errors={!!touched.MedicalCondition && !!errors.MedicalCondition}
helperText={touched.MedicalCondition && errors.MedicalCondition}
sx={{gridColumn: "span 4"}}
/>



</Box>
<Box display="flex" justifyContent="end" mt="20px">
<Button variant="contained" sx={{backgroundColor:"red"}} type="submit">Submit</Button>
</Box>
</form>

)}

 </Formik>
 
  </Box>  
}
export default Form;