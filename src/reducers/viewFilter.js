const viewFilter = (state = 'ShowAll', action) => {
    switch (action.type) {
        case 'SetVisibleFilter':
            return action.filter
        default:
            return state
    }
}

export default viewFilter