import React from 'react'
import InputField from '../components/InputField'

const JobPostingData = ({handleChange}) => {
    const now = new Date();
    const dayAgo = new Date(now - 24 * 60 * 60 * 1000);
    const sevenDaysAgo = new Date(now - 7 * 24 * 60 * 60 * 1000);
    const monthAgo = new Date(now - 30 * 24 * 60 * 60 * 1000);

    // convert date 
    const dayDate = dayAgo.toISOString().slice(0,10);
    const sevenDaysDate = sevenDaysAgo.toISOString().slice(0,10);
    const monthDate = monthAgo.toISOString().slice(0,10);
  return (
    <div>
      <h4 className='text-lg font-medium mb-2'>Date of Posting</h4>

      <div>
        <label className='sidebar-label-container'>
          <input type='radio' name='test' id='test' value='' onChange={handleChange} />
          <span className='checkmark'></span>ALL time
        </label>
        <InputField handleChange={handleChange} value={dayDate} title="Last 24 hours" name="test" />
        <InputField handleChange={handleChange} value={sevenDaysDate} title="Last 7 days" name="test" />
        <InputField handleChange={handleChange} value={monthDate} title="Last 30 days" name="test" />
        

      </div>
    </div>
  )
}

export default JobPostingData