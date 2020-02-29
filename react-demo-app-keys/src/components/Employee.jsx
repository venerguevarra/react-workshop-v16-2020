import React from 'react';

// Employee Component
export class Employee extends React.Component {
    render() {
        return (
            <li className="employee">
                <div>
                    <b>Full Name:</b> {this.props.fullName}
                </div>
                <div>
                    <b>Gender:</b> {this.props.gender}
                </div>
            </li>
        );
    }
}

// EmployeeList Component
export class EmployeeList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            employees: [
                { empId: 1, fullName: "Trump", gender: "Male" },
                { empId: 2, fullName: "Ivanka", gender: "Female" },
                { empId: 3, fullName: "Kushner", gender: "Male" }
            ]
        };
    }

    render() {
        // Array of <Employee>
        var listItems = this.state.employees.map(e => (
            <Employee key={e.empId} fullName={e.fullName} gender={e.gender} />
        ));
        return (
            <ul className="employee-list">
                {listItems}
            </ul>
        );
    }
}
