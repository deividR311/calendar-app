import React from 'react'
import { NavBar } from '../ui/NavBar';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import { CalendarEvent } from './CalendarEvent';
import moment from 'moment';

import 'moment/locale/es';
import 'react-big-calendar/lib/css/react-big-calendar.css';

//this part help with de change idiom
import { Messages } from '../../helpers/calendar-messages-es';


const localizer = momentLocalizer(moment);

const myEventsList = [{
    title: 'mi cumple',
    start: moment().toDate(),
    end: moment().add(2, 'hours').toDate(),
    bgcolor: '#fafafa',
    note: 'comprar el pastel',
    user: {
        _id: '123',
        name: 'Carlos'
    }
}]

export const CalendarScreen = () => {

    const eventStyleGetter = ( event, start, end, isSelected ) => {

        const style = {
            backgroundColor: '#367CF7',
            borderRadius: '0px',
            opacity: '0.8',
            display: 'block',
            color: 'white'
        }

        return{
            style
        }

    }

    return (
        <div className="calendar-screen">
            <NavBar />

            <Calendar
                localizer={ localizer }
                events={ myEventsList }
                startAccessor="start"
                endAccessor="end"
                messages={ Messages }
                eventPropGetter={ eventStyleGetter }
                components={{
                    event: CalendarEvent
                }}
            />
        </div>
    )
}
