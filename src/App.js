import "./index.css";
import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import Topbar from "./scenes/global/Topbar";
import Sidebar from "./scenes/global/LeftBar";

import { Routes, Route } from "react-router-dom";
import Dashboard from "./scenes/dashboard/index";
import ManagePatients from "./scenes/patients/managepatients";
// import Invoice from "./scenes/invoice/invoice";
// import Contacts from "./scenes/contacts";
// import Bar from "./scenes/bar";
import Form from "./scenes/form/index";
// import Line from "./scenes/line";
// import Pie from "./scenes/pie";
import Faq from "./scenes/faqs/faq";
// import Geography from "./scenes/geography";
import Calendar from "./scenes/calendar/calendar";

function App() {
  const [theme, colorMode] = useMode();
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar />
          <main className="content">
            <Topbar />
            <Routes>
               <Route path="/" element={<Dashboard />} /> 
              <Route path="/managepatients" element={<ManagePatients />} />
               {/* <Route path="/form" element={<Form />} />
              <Route path="/bar" element={<Bar />} />
              <Route path="/pie" element={<Pie />} />
              <Route path="/line" element={<Line />} /> */}
              <Route path="/faq" element={<Faq/>} />
              <Route path="/form" element={<Form/>} />
              {/* <Route path="/geography" element={<Geography />} />   */}
               <Route path="/calendar" element={<Calendar />} />  
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
