export const actToggle = (value) => {
    return (
        {
            type: 'CONTROL/TOGGLE',
            payload: value
        }
    )
}

export const actSearch = (value) => {
    return (
        {
            type: 'CONTROL/SEARCH',
            payload: value
        }
    )
}

export const actSort = (sortBy, sortDir) => {
    return (
        {
            type: 'CONTROL/SORT',
            payload: { sortBy, sortDir }
        }
    )
}

export const actAdd = (student) => {
    return (
        {
            type: 'CONTROL/ADD',
            payload: student
        }
    )
}

export const actSeen = (value) => {
    return (
        {
            type: 'STUDENT/SEEN',
            payload: value
        }
    )
}

export const actEdit = (student) => {
    return (
        {
            type: 'STUDENT/EDIT',
            payload: student
        }
    )
}

export const actDelete = (student) => {
    return (
        {
            type: 'STUDENT/DELETE',
            payload: student
        }
    )
}
