import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Layout from "./components/shared/Layout";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />          
      </Route>
      {/* not rendered inside login page */}
      {/* <Route path="login" element={<div>This is login page</div>}/>  */}
      </Routes>
    </Router>
  );
}

export default App;
