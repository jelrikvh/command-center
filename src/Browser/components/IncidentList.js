import React from 'react'
import PropTypes from 'prop-types'
import Incident from '../components/Incident'

const IncidentList = ({incidents}) => (
    <ul>
        {incidents.map(incident =>
            <Incident
                incident={incident}
            />
        )}
    </ul>
)

IncidentList.propTypes = {
    incidents: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.bool.isRequired,
        location: PropTypes.string.isRequired
    }).isRequired).isRequired
}

export default IncidentList
