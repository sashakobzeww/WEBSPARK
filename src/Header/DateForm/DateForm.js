import React, {Component} from 'react'
import './DateForm.css'

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

class DateForm extends Component {

    state = {
        startDate: new Date()
    };

    handleSelectOrChange(date) {
        this.setState({
            startDate: date
        });
    }

    render() {
        return(
            <>
                <p>Date</p>
                <DatePicker
                    dateFormatCalendar={"dd.MM.YYYY"}
                    dateFormat={"dd.MM"}
                    minDate={new Date()}
                    selected={this.state.startDate}
                    onSelect={this.handleSelectOrChange.bind(this)}
                    onChange={this.handleSelectOrChange.bind(this)}
                />
            </>
        )
    }
}

export default DateForm