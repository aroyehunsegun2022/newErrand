import React from 'react'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import GradeIcon from '@mui/icons-material/Grade';
import './modal.css'

const Modal = ( { setOpenModal } ) => {
  return (
    <div className="modalBackground">
        <div className="modalContainer">
            <div className="titleCloseBtn">
                <button
                    onClick={() => {
                    setOpenModal(false);
                    }}
                >
                    X
                </button>
            </div>
            {/* <div className="title">
                <h1>Are You Sure You Want to Continue?</h1>
            </div> */}
            <div className="body">
                {/* <p>The next page looks amazing. Hope you want to go there!</p> */}
                <div className='er__eacherrandee-container-each-errdetail'>
                    <div className='er__eacherrandee-container-top-info'>
                        <div className='er__eacherrandee-container-top-info-profile'>
                            <img src='' className='' alt='profile pic' />
                        </div>
                        <div className='er__eacherrandee-container-top-info-deets'>
                            <h5>Lorem Ipsum <CheckCircleIcon sx={{ fontSize: 22, marginLeft: 1}} /></h5>
                            <p>Iyana-Ipaja - Bus stop</p>
                            <p><GradeIcon sx={{ fontSize: 16}} /></p>
                            <p className='phone'>07076874532</p>
                            <span className='numerr'>Total errands: 15</span><br />
                            <button className='chatbtn'>Send in chat</button><br />
                            <button className='hirebtn'>Hire Now</button>
                        </div>
                    </div>
                    <div className='er__eacherrandee-container-bottom-reviewss'>
                        <div className='er__eacherrandee-container-bottom-reviews-profile-pic-pic'>
                            <img src='' className='' alt='profile pic' />
                        </div>
                        <div className='er__eacherrandee-container-bottom-reviews-content-cont'>
                            <h6>Lorem Ipsum</h6>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                            <p><GradeIcon sx={{ fontSize: 14}} /></p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer">
                <button
                    onClick={() => {
                    setOpenModal(false);
                    }}
                    id="cancelBtn"
                >
                    Cancel
                </button>
            </div>
      </div>
    </div>
  )
}

export default Modal