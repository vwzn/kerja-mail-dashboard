import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/store';

import PrivateRoute from './routes/PrivateRoute';
import DashboardLayout from './assets/components/layout/DashboardLayout/DashboardLayout';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Domains from './pages/Domains';
import Mailboxes from './pages/Mailboxes';
import Settings from './pages/Settings';
import NotFound from './pages/NotFound';


function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route element={<PrivateRoute />}>
            <Route element={<DashboardLayout/>}>
              <Route path="/" element={<Dashboard />} />
              <Route path="domains" element={<Domains />} />
              <Route path="mailboxes" element={<Mailboxes />} />
              <Route path="settings" element={<Settings />} />
            </Route>
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;