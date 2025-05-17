import React from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/store';

import ProtectedRoute from './routes/ProtectedRoute';
import DashboardLayout from './assets/components/layout/DashboardLayout/DashboardLayout';
import Wellcome from './pages/Wellcome';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Domains from './pages/Domains';
import Mailboxes from './pages/Mailboxes';
import Settings from './pages/Settings';
import NotFound from './pages/NotFound';
import Register from './pages/Register';


function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<Wellcome/>} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route element={<ProtectedRoute />}>
            <Route element={<DashboardLayout />}>
              <Route path="/dashboard" element={<Dashboard />} />
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