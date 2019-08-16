import React, {Component} from 'react'
import './DateForm.css'

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

class DateForm extends Component {

    state = {
        startDateFrom: new Date(),
        startDateTo: new Date()
    };

    handleSelectOrChangeFrom(date) {
        this.setState({
            startDateFrom: date
        });
    }

    handleSelectOrChangeTo(date) {
        this.setState({
            startDateTo: date
        });
    }

    render() {
        return(
            <>
                <div className="dateFormContainer">
                    <p>Date</p>
                    <DatePicker
                        dateFormat={"dd.MM"}
                        selected={this.state.startDateFrom}
                        onSelect={this.handleSelectOrChangeFrom.bind(this)}
                        onChange={this.handleSelectOrChangeFrom.bind(this)}
                        className="DatePickerFrom"
                    />
                    <DatePicker
                        dateFormat={"dd.MM"}
                        maxDate={new Date()}
                        selected={this.state.startDateTo}
                        onSelect={this.handleSelectOrChangeTo.bind(this)}
                        onChange={this.handleSelectOrChangeTo.bind(this)}
                        className="DatePickerTo"
                    />
                </div>
            </>
        )
    }
}

export default DateForm