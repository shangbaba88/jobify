import {
    DISPLAY_ALERT,
    CLEAR_ALERT,
    SETUP_USER_BEGIN,
    SETUP_USER_SUCCESS,
    SETUP_USER_ERROR,
    TOGGLE_SIDEBAR,
    LOGOUT_USER,
    UPDATE_USER_BEGIN,
    UPDATE_USER_SUCCESS,
    UPDATE_USER_ERROR,
    HANDLE_CHANGE,
    CLEAR_VALUES,
    CREATE_JOB_BEGIN,
    CREATE_JOB_SUCCESS,
    CREATE_JOB_ERROR,
    GET_JOBS_BEGIN,
    GET_JOBS_SUCCESS,
    DELETE_JOB_BEGIN,
    SET_EDIT_JOB,
    EDIT_JOB_BEGIN,
    EDIT_JOB_SUCCESS,
    EDIT_JOB_ERROR,
    SHOW_STATS_BEGIN,
    SHOW_STATS_SUCCESS,
    CLEAR_FILTERS,
    CHANGE_PAGE
  } from './actions'
  
  import { initialState } from './appContext'
  
  const reducer = (state, action) => {
    if (action.type === DISPLAY_ALERT) {
      return {
        ...state,
        showAlert: true,
        alertType: 'danger',
        alertText: '请填写所有必填项',
      }
    }
  
    if (action.type === CLEAR_ALERT) {
      return {
        ...state,
        showAlert: false,
        alertType: '',
        alertText: '',
      }
    }
  
    // 处理注册派发的任务
    if (action.type === SETUP_USER_BEGIN) {
      return { ...state, isLoading: true }
    }
  
    if (action.type === SETUP_USER_SUCCESS) {
      return {
        ...state,
        user: action.payload.user,
        token: action.payload.token,
        userLocation: action.payload.location,
        jobLocation: action.payload.location,
        isLoading: false,
        showAlert: true,
        alertType: 'success',
        alertText: action.payload.alertText,
      }
    }
  
    if (action.type === SETUP_USER_ERROR) {
      return {
        ...state,
        isLoading: false,
        showAlert: true,
        alertType: 'danger',
        alertText: action.payload.msg,
      }
    }
  
    // 侧边栏
    if (action.type === TOGGLE_SIDEBAR) {
      return {
        ...state,
        showSidebar: !state.showSidebar,
      }
    }
  
    // 退出
    if (action.type === LOGOUT_USER) {
      return {
        ...initialState,
        user: null,
        token: '',
        userLocation: '',
        jobLocation: '',
      }
    }
  
    if (action.type === UPDATE_USER_BEGIN) {
      return { ...state, isLoading: true }
    }
  
    if (action.type === UPDATE_USER_SUCCESS) {
      return {
        ...state,
        user: action.payload.user,
        token: action.payload.token,
        userLocation: action.payload.location,
        jobLocation: action.payload.location,
        isLoading: false,
        showAlert: true,
        alertType: 'success',
        alertText: '用户更新成功',
      }
    }
  
    if (action.type === UPDATE_USER_ERROR) {
      return {
        ...state,
        isLoading: false,
        showAlert: true,
        alertType: 'danger',
        alertText: action.payload.msg,
      }
    }
  
    if (action.type === HANDLE_CHANGE) {
      return {
        ...state,
        [action.payload.name]: action.payload.value,
      }
    }
  
    if (action.type === CLEAR_VALUES) {
      const initialState = {
        jobLocation: state.userLocation,
        isEditing: false,
        editJobId: '',
        position: '',
        company: '',
        jobType: '全职',
        status: '待定',
      }
      return {
        ...state,
        ...initialState,
      }
    }
  
    // 创建工作
    if (action.type === CREATE_JOB_BEGIN) {
      return { ...state, isLoading: true }
    }
  
    if (action.type === CREATE_JOB_SUCCESS) {
      return {
        ...state,
        isLoading: false,
        showAlert: true,
        alertType: 'success',
        alertText: '新的工作机会已创建',
      }
    }
  
    if (action.type === CREATE_JOB_ERROR) {
      return {
        ...state,
        isLoading: false,
        showAlert: true,
        alertType: 'danger',
        alertText: action.payload.msg,
      }
    }
  
    // 获取所有数据
    if (action.type === GET_JOBS_BEGIN) {
      return { ...state, isLoading: true, showAlert: false }
    }
  
    if (action.type === GET_JOBS_SUCCESS) {
      return {
        ...state,
        isLoading: false,
        jobs: action.payload.jobs,
        totalJobs: action.payload.totalJobs,
        numOfPages: action.payload.numOfPages,
      }
    }
  
    // 删除工作
    if (action.type === DELETE_JOB_BEGIN) {
      return { ...state, isLoading: true }
    }
  
    // 编辑工作跳转
    if (action.type === SET_EDIT_JOB) {
      const job = state.jobs.find((job) => job._id === action.payload.id)
      const { _id, position, company, jobLocation, status, jobType } = job
      return {
        ...state,
        isEditing: true,
        editJobId: _id,
        position,
        company,
        jobLocation,
        status,
        jobType,
      }
    }
  
    // 编辑工作
    if (action.type === EDIT_JOB_BEGIN) {
      return { ...state, isLoading: true }
    }
  
    if (action.type === EDIT_JOB_SUCCESS) {
      return {
        ...state,
        isLoading: false,
        showAlert: true,
        alertType: 'success',
        alertText: '工作已更新',
      }
    }
  
    if (action.type === EDIT_JOB_ERROR) {
      return {
        ...state,
        isLoading: false,
        showAlert: true,
        alertType: 'danger',
        alertText: action.payload.msg,
      }
    }
  
    // 获取数据统计
    if (action.type === SHOW_STATS_BEGIN) {
      return { ...state, isLoading: true, showAlert: false }
    }
  
    if (action.type === SHOW_STATS_SUCCESS) {
      return {
        ...state,
        isLoading: false,
        stats: action.payload.stats,
        monthlyApplications: action.payload.monthlyApplications,
      }
    }
  
    if (action.type === CLEAR_FILTERS) {
      return {
        ...state,
        search: "",
        searchStatus: "所有",
        searchType: "所有",
        sort: "最新",
      }
    }
  
    if (action.type === CHANGE_PAGE) {
      return { ...state, page: action.payload.page }
    }
  
    throw new Error(`no such action : ${action.type}`)
  }
  
  export default reducer
  