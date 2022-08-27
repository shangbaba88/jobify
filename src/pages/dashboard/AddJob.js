import { FormRow, Alert, FormRowSelect } from '../../components'
import { useAppContext } from '../../context/appContext'
import Wrapper from '../../assets/wrappers/DashboardFormPage'

function AddJob() {
  const {
    isEditing,
    showAlert,
    displayAlert,
    position,
    company,
    jobLocation,
    jobType,
    jobTypeOptions,
    status,
    statusOptions,
    handleChange,
    clearValues,
    createJob,
    editJob,
  } = useAppContext()

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!position || !company || !jobLocation) {
      displayAlert()

      return
    }

    if (isEditing) {
      editJob()
      return
    }

    createJob()
  }

  const handleJobInput = (e) => {
    const name = e.target.name
    const value = e.target.value
    handleChange({ name, value })
  }

  return (
    <Wrapper>
      <form className="form">
        <h3>{isEditing ? '编辑工作' : '添加工作'}</h3>
        {showAlert && <Alert />}
        <div className="form-center">
          <FormRow
            labelText="职位"
            type="text"
            name="position"
            value={position}
            handleChange={handleJobInput}
          />
          <FormRow
            labelText="公司"
            type="text"
            name="company"
            value={company}
            handleChange={handleJobInput}
          />
          <FormRow
            labelText="地点"
            type="text"
            name="jobLocation"
            value={jobLocation}
            handleChange={handleJobInput}
          />

          {/* 面试状态 */}
          <FormRowSelect
            labelText="面试状态"
            name="status"
            value={status}
            handleChange={handleJobInput}
            list={statusOptions}
          />

          {/* 工作类型 */}
          <FormRowSelect
            labelText="工作类型"
            name="jobType"
            value={jobType}
            handleChange={handleJobInput}
            list={jobTypeOptions}
          />

          <div className="btn-container">
            <button
              className="btn btn-block clear-btn"
              type="button"
              onClick={() => clearValues()}
            >
              重置
            </button>
            <button
              className="btn btn-block submit-btn"
              type="submit"
              onClick={handleSubmit}
            >
              提交
            </button>
          </div>
        </div>
      </form>
    </Wrapper>
  )
}

export default AddJob
