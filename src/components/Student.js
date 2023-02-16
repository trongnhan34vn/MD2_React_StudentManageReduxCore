import React from 'react'
import { useDispatch } from 'react-redux';
import { actDelete, actSeen, actToggle } from './actions/actions';

export default function Student(props) {
    const { student, stt } = props;
    const dispatch = useDispatch()
    const handleSubmit = (student, action) => {
        if (action === 'Seen') {
            dispatch(actSeen(student))
            dispatch(actToggle({ status: true, action: "SEEN" }))
        }
        if (action === 'Edit') {
            dispatch(actToggle({ status: true, action: "EDIT" })) 
            dispatch(actSeen(student))
        }
        if (action === 'Delete') {
            dispatch(actDelete(student))
        }
    }
    return (
        <tr>
            <td>{stt}</td>
            <td>{student.id}</td>
            <td>{student.name}</td>
            <td>{student.age}</td>
            <td>{student.gender ? "Nam" : "Nữ"}</td>
            <td>
                <div className="template-demo">
                    <button
                        onClick={() => handleSubmit(student, 'Seen')}
                        type="button"
                        className="btn btn-danger btn-icon-text"
                    >
                        Xem
                    </button>
                    <button
                        onClick={() => handleSubmit(student, 'Edit')}
                        type="button"
                        className="btn btn-warning btn-icon-text"
                    >
                        Sửa
                    </button>
                    <button
                        onClick={() => handleSubmit(student,"Delete")}
                        type="button"
                        className="btn btn-success btn-icon-text"
                    >
                        Xóa
                    </button>
                </div>
            </td>
        </tr>
    )
}
