import Accordian from "@mui/material/Accordion";
import AccordianSummary from "@mui/material/AccordionSummary";
import AccordianDetails from "@mui/material/AccordionDetails";
import { Box, Typography } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const Faq = () => {
  return (
    <Box width="50%" marginLeft="20%">
      <Accordian>
        <AccordianSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panella-content"
          id="panel1a-header"
        >
          <Typography>How do you find Patient data</Typography>
        </AccordianSummary>
        <AccordianDetails>
          <Typography fontSize="15px">
            Click on the Manage patients on the sidebar. In that page you can
            filter out the patient data based on your choice of preference
          </Typography>
        </AccordianDetails>
      </Accordian>
      {/* second accordian */}
      <Accordian>
        <AccordianSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panella-content"
          id="panel1a-header"
        >
          <Typography>How do you find Transactions made</Typography>
        </AccordianSummary>
        <AccordianDetails>
          <Typography fontSize="15px">
            Click on the Invoices Balance on the sidebar. In that page you can
            check the transactions per day or person. This data is in a tabular
            form
          </Typography>
        </AccordianDetails>
      </Accordian>
      {/* third accordian */}
      <Accordian>
        <AccordianSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panella-content"
          id="panel1a-header"
        >
          <Typography>How to check calendar and book a date/ event</Typography>
        </AccordianSummary>
        <AccordianDetails>
          <Typography fontSize="15px">
            Click on Calendar on the sidebar. In that page you can check the
            calendar and book a date/ event.
          </Typography>
        </AccordianDetails>
      </Accordian>
      {/* fourth accordian */}
    </Box>
  );
};
export default Faq;
