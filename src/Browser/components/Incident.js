import React from 'react'
import PropTypes from 'prop-types'

const Incident = ({ incident }) => (
    <li>
        {incident.title} ({incident.location})
    </li>
)

Incident.propTypes = {
    incident: PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.bool.isRequired,
        location: PropTypes.string.isRequired
    }).isRequired,
}

export default Incident
