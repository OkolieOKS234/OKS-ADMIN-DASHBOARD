import { Box, Button, Typography, useTheme } from "@mui/material";
import Header from "../../components/Header";
import { tokens } from "../../theme";
import { mockTransactions } from "../../data/mockData";
import EmailIcon from "@mui/icons-material/DownloadOutlined";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";

// import BarChart from "../../components/Barchart";
import StatBox from "./../../components/StatBox";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import BadgeOutlinedIcon from "@mui/icons-material/BadgeOutlined";

const Dashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box m="20px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="CLINIC" subtitle="Welcome to the dashboard" />

        {/* Place for buttons */}
        <Box>
          <Button
            sx={{
              backgroundColor: colors.blueAccent[700],
              color: colors.grey[100],
              fontSize: "14px",
              fontWeight: "bold",
              padding: "10px 20px",
            }}
          >
            <DownloadOutlinedIcon sx={{ mr: "10px" }} />
            Download Reports
          </Button>
        </Box>
      </Box>
      {/* Grid system for Material UI */}
      {/* Grid template Columns stands for the total columns  */}
      <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="140px"
        gap="20px"
      >
        {/* 1st Row */}
        {/* 1st Box */}
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="12,361"
            subtitle="Emails Sent"
            progress="0.75"
            increase="14%"
            icon={
              <EmailIcon
                sx={{ color: colors.greenAccent[600], fontSize: "50px" }}
              />
            }
          />
        </Box>
        {/* Second  Box */}
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          {/* 1st StatBox */}
          <StatBox
            title="5,361"
            subtitle="Sales Made"
            progress="0.75"
            increase="10%"
            icon={
              <PointOfSaleIcon
                sx={{ color: colors.greenAccent[600], fontSize: "50px" }}
              />
            }
          />
        </Box>
        {/* 3rd Box */}
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="100 "
            subtitle="Employees"
            progress="0.75"
            increase="4%"
            icon={
              <BadgeOutlinedIcon
                sx={{ color: colors.greenAccent[600], fontSize: "50px" }}
              />
            }
          />
        </Box>
        {/* End of 3rd Item */}
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="100 "
            subtitle="Patients Seen"
            progress="0.75"
            increase="+4%"
            icon={
              <BadgeOutlinedIcon
                sx={{ color: colors.greenAccent[600], fontSize: "50px" }}
              />
            }
          />
        </Box>
      </Box>
      {/* End of 1st Row */}
      {/* 2nd Row */}

      <Box
        gridColumn="span 4"
        gridRow="span 2"
        backgroundColor={colors.primary[400]}
        overflow="auto"
        marginTop="20px"
      >
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          marginTop="20px"
          borderBottom={`4px solid ${colors.primary[500]}`}
          colors={colors.grey[100]}
          p="15px"
        >
          <Typography
            color={colors.grey[100]}
            variant="h5"
            fontWeight="600"
            marginTop="20px"
          >
            Recent Transactions
          </Typography>
        </Box>
        {mockTransactions.map((transaction, i) => (
          <Box
            key={`${transaction.txId}-${i}`}
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            borderBottom={`4px solid ${colors.primary[500]}`}
            p="15px"
          >
            <Box>
              <Typography
                color={colors.greenAccent[500]}
                variant="h5"
                fontWeight="600"
              >
                {transaction.txId}
              </Typography>
              <Typography color={colors.grey[100]}>
                {transaction.user}
              </Typography>
            </Box>
            <Box color={colors.grey[100]}>{transaction.date}</Box>
            <Box
              backgroundColor={colors.greenAccent[500]}
              p="5px 10px"
              borderRadius="4px"
            >
              ₦{transaction.cost}
            </Box>
          </Box>
        ))}
      </Box>
      {/* End of second Row */}

      {/* End of Boxes */}
    </Box>
  );
};
export default Dashboard;
