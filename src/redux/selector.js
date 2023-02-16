import { createSelector } from "reselect"

export const listStudentsSelector = (state => state.listStudents.listStudents)

export const controlSearchSelector = (state => state.control.search)

export const controlSortSelector = (state => state.control.sort)

export const selectedStudentSelector = (state => state.listStudents.selectedStudent)

export const controlToggle = (state => state.control.toggle)

export const remainListStudents = createSelector(listStudentsSelector, controlSearchSelector, controlSortSelector, (listStudents, searchText, sortValue) => {
    if (sortValue.sortBy === '') {
        listStudents.sort((a, b) => (a.id.slice(-1) - b.id.slice(-1)))
    }
    if (sortValue.sortBy === 'name')
        if (sortValue.sortDir === 'ASC') {
            listStudents.sort((a, b) => (a.name > b.name) ? 1 : -1)
        } else {
            listStudents.sort((a, b) => (a.name > b.name) ? -1 : 1)
        }

    if(sortValue.sortBy === 'age') {
        if (sortValue.sortDir === 'ASC') {
            listStudents.sort((a, b) => (a.age - b.age))
        } else {
            listStudents.sort((a, b) => (b.age - a.age))
        }
    }
    return listStudents.filter((student) => {
        return student.name.toLowerCase().includes(searchText.toLowerCase());
    })
})
