import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import "../src/component/assets/global.css";
import reportWebVitals from './reportWebVitals';
import "../src/component/assets/global.css"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './component/screens/pages/homepage/Index';
import LoginPage from './component/screens/authendication/loginPage/Index';
import ProjectsPage from './component/screens/pages/projects.js/Index.js';
import { Provider } from "react-redux";
import AppProvider from "./component/AppProvider/AppProvider.js"
import store from "./component/redux/Store.js";
import ProjectDetails from './component/screens/pages/projects.js/projectDetails/Index.js';
import InvestorPage from "./component/screens/pages/investor/Index.js";
import InvestorDetails from './component/screens/pages/investor/investerDetails.js/Index.js';
import CoProducers from './component/screens/pages/CoProducers/Index.js';
import CoProducersDetails from './component/screens/pages/CoProducers/coProducersDetails.js/Index.js';
import MasterAdmin from './component/screens/pages/masterAdmin/index.js';
import MasterAdminDetails from './component/screens/pages/masterAdmin/masterAdminDetails/Index.js';
import MasterAdminLogin from './component/screens/authendication/masterAdminLogin/Index.js';
import SuperAdminDashboard from './component/screens/pages/superAdmin/dashboard/Index.js';
import Producers from './component/screens/pages/superAdmin/producers/Index.js';
import ProducerDetails from './component/screens/pages/superAdmin/producers/producersDetails/Index.js';
import Subscriptions from './component/screens/pages/superAdmin/subscriptions/Index.js';
import SubscriptionDetails from './component/screens/pages/superAdmin/subscriptions/subscriptionDetails/Index.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AppProvider>
  <React.StrictMode>
   <BrowserRouter>
   <Provider store={store}>
      <Routes> <Route path="/" element={<LoginPage />} />
      {/* <Route path="/signin" element={<LoginPage />} /> */}
        <Route path="/homePage" element={<HomePage  />} />
        <Route path="/investor" element={<InvestorPage  />} />
        <Route path="/projects" element={<ProjectsPage  />} />
        <Route path="/project_details" element={<ProjectDetails  />} />
        <Route path="/investors_details" element={<InvestorDetails  />} />
        <Route path="/co_producers" element={<CoProducers  />} />
        <Route path="/co_producers_details" element={<CoProducersDetails  />} />
        <Route path="/admin" element={<MasterAdmin  />} />
        <Route path="/admin_details" element={<MasterAdminDetails  />} />
        <Route path="/master_admin_login" element={<MasterAdminLogin  />} />
        <Route path="/master_admin_dashboard" element={<SuperAdminDashboard  />} />
        <Route path="/producers" element={<Producers  />} />
        <Route path="/producers_details" element={<ProducerDetails  />} />
        <Route path="/subscription" element={<Subscriptions  />} />
        <Route path="/subscription_details" element={<SubscriptionDetails  />} />
      </Routes>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
  </AppProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
