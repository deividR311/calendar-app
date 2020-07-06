import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";
import { LoginScreen } from '../components/auth/LoginScreen';
import { CalendarScreen } from '../components/calendar/CalendarScreen';


export const AppRouter = () => {
    return (
        <Router>
            <div>
                <Switch>
                    <Route exact path="/" component={CalendarScreen} />
                    <Route exact path="/login" component={LoginScreen} />

                    {/* esto por si hay una ruta invalida, lo redirige a la pagina principal */}
                    <Redirect to="/" />
                </Switch>
            </div>
        </Router>
    )
}
