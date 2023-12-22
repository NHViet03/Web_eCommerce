import React from 'react'
import profileImg from '../images/profileimg.jpg'
import {Box} from '@mui/material'

function Profile() {
  const user={
    nickname:"HVietdz",
    fullname:"Nguyễn Hoàng Việt",
    title: "CEO/Co-Founder",
    mobile: "090 chiên bò viên 0 chiên 09",
    email: "Hvietdz@gmail.com",
    location: "Hồ Chí Minh, Việt Nam",
  }
  
  return (
    <div className='profile_container'>
      <div className='profile_cover'></div>
      <div className='profile_card_cover'>
        <div className='profile_card_header'>
          <div className='cover_component'>
              <div className='avatar'>
                <img src={profileImg} alt="profile image" className='profile_image'/>
              </div>
          </div>
          <div className='cover_component'>
            <h4 className='profile_name'>{user.nickname}</h4>
            <span className='profile_title'>{user.title}</span>
          </div>
        </div>
        <div className='profile_card_footer'>
          <div className='profile_information'>
            <div className='profile_information_header'>
                <h5 className='title'>Thông tin Quản trị viên</h5>
            </div>
            <div className='profile_information_body'>
                <div className='profile_description'>
                    <span className='description'>
                      Đẹp trai, giàu, chí lớn, chung tình, chăm chỉ, tốt bụng, hiền lành, dễ thương, hài hước, tài năng, thông minh 
                    </span>
                </div>
                <div className='profile_detail_item'>
                    <span className='detail_title'> Tên: </span>
                    <span className='detail_content'> {user.nickname}</span>
                </div>
                <div className='profile_detail_item'>
                    <span className='detail_title'> Social: </span>
                    <a class="icon_cover" href="https://www.facebook.com/NgyenHoangViet/" target="_blank" rel="noreferrer">
                      <svg class="icon" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="FacebookIcon">
                        <path d="M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2m13 2h-2.5A3.5 3.5 0 0 0 12 8.5V11h-2v3h2v7h3v-7h3v-3h-3V9a1 1 0 0 1 1-1h2V5z"></path>
                      </svg>
                    </a>
                    <a class="icon_cover" href="https://www.instagram.com/hviet613/" target="_blank" rel="noreferrer">
                      <svg class="icon" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="InstagramIcon">
                        <path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3z"></path>
                      </svg>
                    </a>
                </div>
            </div>
          </div>
          <div className='profile_detail'>
              <div>
                <h5 className='title'>Chi tiết</h5>
              </div>
              <div className='profile_detail_body'>
                <div className='profile_detail_item'>
                  <i className="fas fa-user"></i>
                  <span className='detail_title'> Họ và tên: </span>
                  <span className='detail_content'> {user.fullname}</span>
                </div>
                <div className='profile_detail_item'>
                  <i className="fas fa-phone-alt"></i>
                  <span className='detail_title'> Điện thoại: </span>
                  <span className='detail_content'> {user.mobile}</span>
                </div>
                <div className='profile_detail_item'>
                  <i className="fas fa-envelope"></i>
                  <span className='detail_title'> Email: </span>
                  <span className='detail_content'> {user.email}</span>
                </div>
                <div className='profile_detail_item'>
                  <i className="fas fa-map-marker-alt"></i>
                  <span className='detail_title'> Địa chỉ: </span>
                  <span className='detail_content'> {user.location}</span>
                </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile
