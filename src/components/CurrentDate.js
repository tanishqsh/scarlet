import React from 'react';

const Months = [
    {no:1, name: 'January'},
    {no:2, name: 'February'},
    {no:3, name: 'March'},
    {no:4, name: 'April'},
    {no:5, name: 'May'},
    {no:6, name: 'June'},
    {no:7, name: 'July'},
    {no:8, name: 'August'},
    {no:9, name: 'September'},
    {no:10, name: 'October'},
    {no:11, name: 'November'},
    {no:12, name: 'December'},
    ];

const Day = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
];

function CurrentDate(props) {
    return(
        <div className={'current-date-container-'+props.theme}>
            {Day[new Date().getDay()]},  {new Date().getDate()} {Months[new Date().getMonth()].name} {new Date().getFullYear() }
        </div>
    );
}


export default CurrentDate;