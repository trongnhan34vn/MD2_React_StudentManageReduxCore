
const initValue = {
    listStudents: [
        {
            id: 'SV001',
            name: 'Nguyễn Văn A',
            age: 20,
            gender: true,
            birthDate: '09/03/1998',
            birthPlace: 'HN',
            address: 'số 1 Trần Duy Hưng'
        },
        {
            id: 'SV002',
            name: 'Nguyễn Thị B',
            age: 19,
            gender: false,
            birthDate: '09/03/2001',
            birthPlace: 'HN',
            address: 'số 1 Trần Duy Hưng'
        },
        {
            id: 'SV003',
            name: 'Nguyễn Văn C',
            age: 25,
            gender: true,
            birthDate: '09/03/1998',
            birthPlace: 'HN',
            address: 'số 1 Trần Duy Hưng'
        },
    ],
    selectedStudent: {}
}
const listProductsReducer = (state = initValue, action) => {
    switch (action.type) {
        case 'CONTROL/ADD':
            return { ...state, listStudents: [...state.listStudents, action.payload] }
        case 'STUDENT/SEEN':
            return { ...state, selectedStudent: action.payload }
        case 'CONTROL/TOGGLE':
            if (action.payload.action === 'ADD') {
                return { ...state, selectedStudent: {} }
            } else {
                return state
            }
        case 'STUDENT/DELETE':
            return { ...state, listStudents: state.listStudents.filter(student => student.id !== action.payload.id) }
        case 'STUDENT/EDIT':
            let newArr = []
            state.listStudents.forEach(student => {
                if(student.id === action.payload.id) {
                    student = {
                        id: action.payload.id,
                        name: action.payload.name,
                        age: action.payload.age,
                        gender: action.payload.gender,
                        birthDate: action.payload.birthDate,
                        birthPlace: action.payload.birthPlace,
                        address: action.payload.address
                    }
                }
                newArr.push(student)
            })
            return {...state, listStudents: newArr}
        default:
            return state
    }
}
export default listProductsReducer