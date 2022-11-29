import {useState} from "react"
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';


export default function AddNewPatients() {
    
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen} sx={{
         '&:hover':{
backgroundColor: "blueviolet",
         },
        backgroundColor:"#3E4396"  }}>
        Add New Patient
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Subscribe</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To subscribe to this website, please enter your email address here. We
            will send updates occasionally.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Patient Name"
            type="text"
            fullWidth
            variant="standard"
          />
 <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Patient Age"
            type="number"
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            fullWidth
            variant="standard"
          />

<TextField
            autoFocus
            margin="dense"
            id="name"
            label="Phone Number"
            type="tel"
            fullWidth
            variant="standard"
          />

           <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Medical Condition"
            type="text"
            fullWidth
            variant="standard"
          />
           

        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} type="" variant="contained" sx={{backgroundColor:"red"}}>Submit</Button>
          <Button onClick={handleClose} variant="outlined">cancel</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
