const incidents = (state = [], action) => {
    switch (action.type) {
        case 'REGISTER_INCIDENT':
            return [
                ...state,
                {
                    key: action.key,
                    title: action.title,
                    location: action.location,
                    active: action.active
                }
            ]
        default:
            return state
    }
}

export default incidents
