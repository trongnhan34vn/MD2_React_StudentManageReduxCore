import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { controlToggle, listStudentsSelector, selectedStudentSelector } from '../redux/selector'
import { actAdd, actEdit } from './actions/actions'

export default function Form(props) {
    const toggle = useSelector(controlToggle)
    const selectedStudent = useSelector(selectedStudentSelector)
    const listStudents = useSelector(listStudentsSelector)
    const [inputValue, setInputValue] = useState(
        {
            id: '',
            name: '',
            age: '',
            gender: true,
            birthDate: '',
            birthPlace: '',
            address: '',
        }
    )
    useEffect(() => {
        if (selectedStudent.name) {
            setInputValue(selectedStudent)
        }
    }, [selectedStudent])
    const handleChange = (e) => {
        let key = e.target.name
        let value = e.target.value
        setInputValue({ ...inputValue, [key]: value })
    }
    const validate = () => {
        let checkValidate = false
        if (inputValue.id.trim() === "") {
            checkValidate = false;
            alert("Please enter the id!");
            return false
        } else {
            let checkExist = false;
            for (let i = 0; i < listStudents.length; i++) {
                if (listStudents[i].id === inputValue.id) {
                    checkExist = true;
                    break;
                }
            }
            if (checkExist) {
                checkValidate = false;
                alert('This id is already existed. Please try another!')
                return false
            } else {
                checkValidate = true
            }
        }
        if (inputValue.name.trim() === "") {
            checkValidate = false;
            alert('Please enter the name!')
            return false
        } else {
            checkValidate = true
        }
        if (inputValue.age.trim() === '') {
            checkValidate = false;
            alert('Please enter the age!')
            return false
        } else {
            checkValidate = true
        }
        if (checkValidate) {
            return true
        } else {
            return false
        }
    }

    const validateUpdate = () => {
        let checkValidate = false
        if (inputValue.name.trim() === "") {
            checkValidate = false;
            alert("Please enter the name!")
            return false
        } else {
            checkValidate = true
        }
        if (inputValue.age.toString().trim() === "") {
            checkValidate = false;
            alert("Please enter the age!")
            return false
        } else {
            checkValidate = true
        }
        if (checkValidate) {
            return true
        } else {
            return false
        }
    }

    const dispatch = useDispatch()
    const handleSubmit = (e) => {
        if (toggle.status === 'ADD') {
            if (validate()) {
                dispatch(actAdd(inputValue))
            }
        }
        e.preventDefault()
        if (toggle.action === 'EDIT') {
            if (validateUpdate()) {
                dispatch(actEdit(inputValue))
            }
        }
    }

    return (
        <div className="col-5 grid-margin">
            <div className="card">
                <div className="card-body">
                    <h3 className="card-title">Thông tin sinh viên</h3>
                    <form className="form-sample">
                        <div className="form-group row">
                            <label className="col-sm-3 col-form-label">Mã sinh viên</label>
                            <div className="col-sm-9">
                                <input disabled={toggle.action === "SEEN" || toggle.action === "EDIT" ? true : false} onChange={handleChange} type="text" className="form-control" name='id' value={inputValue.id} />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-sm-3 col-form-label">Tên sinh viên</label>
                            <div className="col-sm-9">
                                <input disabled={toggle.action === "SEEN" ? true : false} onChange={handleChange} type="text" className="form-control" name='name' value={inputValue.name} />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-sm-3 col-form-label">Tuổi</label>
                            <div className="col-sm-9">
                                <input disabled={toggle.action === "SEEN" ? true : false} onChange={handleChange} type="text" className="form-control" name='age' value={inputValue.age} />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-sm-3 col-form-label">Giới tính</label>
                            <div className="col-sm-9">
                                <select disabled={toggle.action === "SEEN" ? true : false} onChange={handleChange} className="form-control" name='gender' value={inputValue.gender} >
                                    <option value={true}>Nam</option>
                                    <option value={false}>Nữ</option>
                                </select>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-sm-3 col-form-label">Ngày sinh</label>
                            <div className="col-sm-9">
                                <input disabled={toggle.action === "SEEN" ? true : false} onChange={handleChange} className="form-control" placeholder="dd/mm/yyyy" name='birthDate' value={inputValue.birthDate} />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-sm-3 col-form-label">Nơi sinh</label>
                            <div className="col-sm-9">
                                <select disabled={toggle.action === "SEEN" ? true : false} onChange={handleChange} className="form-control" name='birthPlace' value={inputValue.birthPlace} >
                                    <option value={'HN'}>Hà Nội</option>
                                    <option value={'HCM'}>TP. Hồ Chí Minh</option>
                                    <option value={'ĐN'}>Đà Nẵng</option>
                                    <option value={'QN'}>Quảng Ninh</option>
                                </select>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-sm-3 col-form-label">Địa chỉ</label>
                            <div className="col-sm-9">
                                <textarea disabled={toggle.action === "SEEN" ? true : false} onChange={handleChange} className="form-control" value={inputValue.address} name='address' />
                            </div>
                        </div>
                        <button disabled={toggle.action === "SEEN" ? true : false} onClick={handleSubmit} type="submit" className="btn btn-primary me-2">
                            {toggle.action === "ADD" ? "ADD" : toggle.action === "SEEN" ? "SEEN" : "UPDATE"}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}
