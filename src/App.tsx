import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Registration from "./routes/registration/Registration";
import Confirmation from "./routes/confirmation-email/ConfirmationEmail";
import Hierachy from "./routes/hierarchy/Hierarchy";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/registrationPage" element={<Registration />} />
          <Route path="/confirmationPage" element={<Confirmation />} />
          <Route path="/hierachy" element={<Hierachy />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
