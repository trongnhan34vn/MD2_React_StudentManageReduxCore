import React, { useState } from 'react'
import { actSearch, actSeen, actSort, actToggle } from './actions/actions'
import { useDispatch, useSelector } from 'react-redux'
import { controlToggle } from '../redux/selector'

export default function Control(props) {
    const toggle = useSelector(controlToggle)
    const [inputValue, setInputValue] = useState('')
    const handleAddStudent = () => {
        dispatch(actToggle({status: !toggle.status, action: "ADD"}))
    }
    const dispatch = useDispatch()
    const handleSubmitSearch = (e) => {
        e.preventDefault()
        dispatch(actSearch(inputValue))
    }
    const handleSort = (e) => {
        let sort = e.target.value;
        let sortArr = sort.split('-')
        let sortBy = sortArr[0]
        let sortDir = sortArr[1]
        dispatch(actSort(sortBy, sortDir))
    }
    return (
        <div className="card-header">
            <div className="row">
                <div className="col-3">
                    <button onClick={handleAddStudent} type="button" className="btn btn-primary btn-icon-text">
                        Thêm mới sinh viên
                    </button>
                </div>
                <div className="col-6">
                    <form className="search-form" action="#">
                        <i className="icon-search" />
                        <input
                            type="search"
                            className="form-control"
                            placeholder="Search Here"
                            title="Search here"
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                        />
                        <button onClick={handleSubmitSearch} className="btn btn-primary btn-icon-text">
                            Tìm kiếm
                        </button>
                    </form>
                </div>
                <div className="col-3 d-flex align-items-center">
                    <select onChange={handleSort} className="form-control">
                        <option value="">Sắp xếp</option>
                        <option value="name-ASC">Tên-tăng dần</option>
                        <option value="name-DSC">Tên-giảm dần</option>
                        <option value="age-ASC">Tuổi-tăng dần</option>
                        <option value="age-DSC">Tuổi-giảm dần</option>
                    </select>
                </div>
            </div>
        </div>
    )
}
