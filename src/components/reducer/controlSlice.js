const initValue = {
    search: '',
    sort: {
        sortBy: '',
        sortDir: '',
    },
    toggle: {
        status: false,
        action: ''
    }
}

const controlReducer = (state = initValue, action) => {
    switch (action.type) {
        case 'CONTROL/SEARCH':
            state = { ...state, search: action.payload }
            return state
        case 'CONTROL/SORT':
            state = {
                ...state, sort: {
                    sortBy: action.payload.sortBy,
                    sortDir: action.payload.sortDir
                }
            }
            return state
        case 'CONTROL/TOGGLE':
            return state = {
                ...state, toggle: {
                    ...action.payload
                }
            }
        case 'STUDENT/SEEN':
            if (action.payload.action === 'SEEN') {
                return state = {
                    ...state, toggle: {
                        ...action.payload
                    }
                }
            } else {
                return state
            }
        default:
            return state
    }
}

export default controlReducer