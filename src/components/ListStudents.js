import React from 'react'
import Student from './Student'
import { useSelector } from 'react-redux'
import { remainListStudents } from '../redux/selector'

export default function ListStudents() {
    const listStudents = useSelector(remainListStudents)
    const elementStudent = listStudents.map((student,index) => {
        return <Student key={student.id} stt={index + 1} student={student} />
    })
    return (
        <div>
            <div className="card-body">
                <h3 className="card-title">Danh sách sinh viên</h3>
                <div className="table-responsive pt-3">
                    <table className="table table-bordered">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Mã sinh viên</th>
                                <th>Tên sinh viên</th>
                                <th>Tuổi</th>
                                <th>Giới tính</th>
                                <th>Hành động</th>
                            </tr>
                        </thead>
                        <tbody>
                            {elementStudent}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
