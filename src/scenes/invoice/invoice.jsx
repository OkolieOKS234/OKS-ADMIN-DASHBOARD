import {
  Box,
  Typography,
  Button,
  Card,
  CardContent,
  TextField,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  FormHelperText,
  Input,
  InputAdornment,
} from "@mui/material";
import { useState } from "react";

const Payment = () => {
  const [state, setState] = useState("");
  const [paymentType, setPaymentType] = useState("");

  const handleChange = (event) => {
    setState(event.target.value);
  };
  const paymentChange = (event) => {
    setPaymentType(event.target.value);
  };

  return (
    <>
      <Box
        textAlign="center"
        // border="2px solid black"
        width="50%"
        margin="100px 300px "
      >
        <Card sx={{ minWidth: 275 }}>
          <CardContent>
            <Typography sx={{ marginBottom: "30px" }} variant="h3">
              Patient Invoice
            </Typography>
            <TextField variant="standard" label="First Name" />
            <TextField
              variant="standard"
              label="Last Name"
              sx={{ marginBottom: "30px" }}
            />
            <Box sx={{ minWidth: "50px", marginBottom: "30px" }}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">State</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={state}
                  label="State"
                  onChange={handleChange}
                >
                  <MenuItem value={1}>Abia State (Umuahia)</MenuItem>
                  <MenuItem value={2}>Adamawa State (Yola)</MenuItem>
                  <MenuItem value={3}>Akwa Ibom State(Uyo)</MenuItem>
                  <MenuItem value={4}>Anambra State (Awka)</MenuItem>
                  <MenuItem value={5}>Bauchi State (Bauchi)</MenuItem>
                  <MenuItem value={6}>Bayelsa State(Yenagoa)</MenuItem>
                  <MenuItem value={7}>Benue State (Makurdi)</MenuItem>
                  <MenuItem value={8}>Borno State (Maiduguri)</MenuItem>
                  <MenuItem value={9}>Cross River State (Calabar)</MenuItem>
                  <MenuItem value={10}>Delta State (Asaba)</MenuItem>
                  <MenuItem value={11}>Ebonyi State(Abakaliki)</MenuItem>
                  <MenuItem value={12}>Edo State (Benin City)</MenuItem>
                  <MenuItem value={13}> Ekiti State (Ado Ekiti)</MenuItem>
                  <MenuItem value={14}>Enugu State (Enugu)</MenuItem>
                  <MenuItem value={15}> Gombe State (Gombe)</MenuItem>
                  <MenuItem value={16}>Imo State (Owerri)</MenuItem>
                  <MenuItem value={17}>Jigawa State (Dutse)</MenuItem>
                  <MenuItem value={18}>Kaduna State (Kaduna)</MenuItem>
                  <MenuItem value={19}>Kano State (Kano)</MenuItem>
                  <MenuItem value={20}>Katsina State (Katsina)</MenuItem>
                  <MenuItem value={21}>Kebbi State (Birnin Kebbi)</MenuItem>
                  <MenuItem value={22}>Kogi State (Lokoja)</MenuItem>
                  <MenuItem value={23}>Kwara State (Ilorin)</MenuItem>
                  <MenuItem value={24}>Lagos State (Ikeja)</MenuItem>
                  <MenuItem value={25}>Nasarawa State (Lafia)</MenuItem>
                  <MenuItem value={26}>Niger State (Minna)</MenuItem>
                  <MenuItem value={27}>Ogun State (Abeokuta)</MenuItem>
                  <MenuItem value={28}>Ondo State (Akure)</MenuItem>
                  <MenuItem value={29}>Osun State (Oshogbo)</MenuItem>
                  <MenuItem value={30}>Oyo State (Ibadan)</MenuItem>
                  <MenuItem value={31}>Plateau State (Jos)</MenuItem>
                  <MenuItem value={32}>Rivers State (Port Harcourt)</MenuItem>
                  <MenuItem value={33}>Sokoto State (Sokoto)</MenuItem>
                  <MenuItem value={34}>Taraba State (Jalingo)</MenuItem>
                  <MenuItem value={35}>Yobe State (Damaturu)</MenuItem>
                  <MenuItem value={36}>Zamfara State (Gusau)</MenuItem>
                </Select>
              </FormControl>
            </Box>
            {/* Payment Type */}
            <Box sx={{ minWidth: "50px" }}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">
                  Payment Type
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={paymentType}
                  label="payment type"
                  onChange={paymentChange}
                >
                  <MenuItem value={1}>Cash</MenuItem>
                  <MenuItem value={2}>Transfer</MenuItem>
                </Select>
              </FormControl>
            </Box>
            {/* amount transfered and cash paid */}
            <TextField
              label="With normal TextField"
              id="standard-start-adornment"
              type="number"
              sx={{ m: 1, width: "25ch" }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">₦</InputAdornment>
                ),
              }}
              variant="standard"
            />
          </CardContent>
          <Button outlined sx={{ backgroundColor: "red" }}>
            Calculate Bill
          </Button>
        </Card>
      </Box>
    </>
  );
};
export default Payment;
