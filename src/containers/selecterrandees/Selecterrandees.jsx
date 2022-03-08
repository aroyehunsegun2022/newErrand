import React, { useState } from 'react'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import GradeIcon from '@mui/icons-material/Grade';
import { Modal } from "../../components"
import './selecterrandees.css'

const Selecterrandees = () => {
    const [modalOpen, setModalOpen] = useState(false);
    
  return (
    <div className='er__selecterrandees'>
    {modalOpen && <Modal setOpenModal={setModalOpen} />}
        <div className='er__selecterrandees-container'>
            <div className='er__selecterrandees-each'>
                <div className='er__sidebar-container-each-profile'>
                    <img src='' className='' alt='profile pic' />
                </div>
                <div className='er__sidebar--container-deets'>
                    <h5>Lorem Ipsum <CheckCircleIcon sx={{ fontSize: 18, marginLeft: 1}} /></h5>
                    <p>View Profile <span>20m away</span></p>
                    <p><GradeIcon sx={{ fontSize: 18}} /></p>
                    <button className="openModalBtn mybtn" onClick={() => {setModalOpen(true);}}>Request</button>
                    {/* {modalOpen && <Modal setOpenModal={setModalOpen} />} */}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Selecterrandees