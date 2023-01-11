import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Error from './pages/404';
import Home from './pages/Home';
import PrivateRoute from './lib/utils/PrivateRoute';

interface Props {};
 
interface State {};
 
class App extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
  }

  render() { 
    return (
      <Routes>
        <Route path="/auth/login" element={<Login />} />
        <Route element={<PrivateRoute />}>
          <Route path="/" index element={<Home />} />
        </Route>
        <Route path="*" element={<Error />} />
      </Routes>
    );
  }
}
 
export default App;
