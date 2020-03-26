import React from "react";
import PropTypes from "prop-types";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";

export default function Search({ handleSearch }) {
    return (
        <>
        <h1 className="Header">Games Overview</h1>
        <InputGroup className="search">
            <FormControl
                placeholder="Search by name..."
                onChange={event => handleSearch(event)}
            />
        </InputGroup>
        </>
    );
}

Search.propTypes = {
    handleSearch: PropTypes.func.isRequired,
};