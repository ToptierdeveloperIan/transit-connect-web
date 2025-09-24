import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Download from './components/Download';
import Footer from './components/Footer';
import AboutUs from "./components/Aboutus.tsx";
import Forms from "./components/Forms.tsx"
import {FormProvider} from "./components/FormContext.tsx";
//import { useFormModal } from "./components/FormContext";


function App() {

  return (
      <FormProvider>

    <Router>
      <div className="App">

        <Navbar />

        <Routes>
          {/* Homepage content */}
          <Route
            path="/"
            element={
              <>
                <Hero />
                <Features />
                <Download />
              </>
            }
          />

          {/* About page */}
          <Route path="/Aboutus" element={<AboutUs />} />


        </Routes>
          <Forms/>
        <Footer />
      </div>
    </Router>
          </FormProvider>
  );
}

export default App;
