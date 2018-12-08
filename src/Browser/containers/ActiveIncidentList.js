import { connect } from 'react-redux'
import IncidentList from '../components/IncidentList'
import { VisibilityFilters } from '../actions'

const getActiveIncidents = (incidents) => {
    return incidents.filter(incident => incident.active);
}

const mapStateToProps = state => ({
    incidents: getActiveIncidents(state.todos)
})


export default connect(
    mapStateToProps
)(IncidentList)
