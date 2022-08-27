import { FormRow, FormRowSelect } from './index'
import Wrapper from '../assets/wrappers/SearchContainer';
import { useAppContext } from '../context/appContext';

const SearchContainer = () => {
  const { isLoading, search, searchStatus,
    searchType, sort, sortOptions,
    statusOptions, jobTypeOptions,
    clearFilters, handleChange
  } = useAppContext()

  const handleSearch = (e) => {
    if (isLoading) return;
    handleChange({ name: e.target.name, value: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    clearFilters()
  }

  return <Wrapper>
    <form className="form">
      <h4>搜索</h4>
      <div className="form-center">
        <FormRow labelText="搜索" type="text" name="search" value={search} handleChange={handleSearch} />
        <FormRowSelect
          labelText='状态'
          name='searchStatus'
          value={searchStatus}
          handleChange={handleSearch}
          list={['所有', ...statusOptions]}
        />

        <FormRowSelect
          labelText='类型'
          name='searchType'
          value={searchType}
          handleChange={handleSearch}
          list={['所有', ...jobTypeOptions]}
        />

        <FormRowSelect
          labelText='排序'
          name='sort'
          value={sort}
          handleChange={handleSearch}
          list={sortOptions}
        />

        <button
          className='btn btn-block btn-danger'
          disabled={isLoading}
          onClick={handleSubmit}
        >
          清除
        </button>
      </div>
    </form>
  </Wrapper>
}

export default SearchContainer
