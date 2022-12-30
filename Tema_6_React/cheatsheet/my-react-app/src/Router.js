import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Index from "./pages/Index";
import Dashboard from "./pages/Dashboard";
import Record from "./pages/Record";
import Error from './pages/Error';

export default function Router() {
  return (
    <div>
        <BrowserRouter>

          <Switch>
            <Route exact path="/" component={Index}/>
            <Route path="/dashboard" component={Dashboard}/>
            <Route path="/record" component={Record}/>
            <Route component={Error} />
          </Switch>
       
        </BrowserRouter>
    </div>
  )
}
