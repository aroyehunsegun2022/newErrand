import React, {useState} from 'react'
import "./withcard.css"

const Withcard = () => {
    const [currentRadioValue, setCurrentRadioValue] = useState()

    const handleRadioChange = (e) => {
        setCurrentRadioValue(e.target.value);
      };
  return (
    <div className='er__withcard'>
        <h1>Pay with Card</h1>
        <form>
            <div className='topup_amount'>
                <input type='text' placeholder='Enter amount' className='top_amount' />
            </div>
            <div className='existing_card'>
                <input type='radio' value='existing card' onChange={handleRadioChange}
          checked={currentRadioValue === 'existing card'}  /><label>Existing Card</label>
            </div>
            <div className='new_card'>
                <input type='radio' value='Use a new card' onChange={handleRadioChange}
          checked={currentRadioValue === 'Use a new card'} /><label>Use a new Card</label>
            </div>
            <button>Top up</button>
        </form>
    </div>
  )
}

export default Withcard