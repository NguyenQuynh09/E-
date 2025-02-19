import React from 'react'
import MainCrose from '../../Compoment/HomeCarosel/MainCrose'
import HomeSectionCarosel from '../../Compoment/HomeSectionCarosel/HomeSectionCarose'
import {Sm_Tablet} from '..//..//../Data/Sm_Tablet'

const HomePage = () => {
  return (
    <div>
        <MainCrose/>
 
        <div className='space-y-10 py-20 flex flex-col justify-center px-5 lg:px-10'>
            <HomeSectionCarosel data={Sm_Tablet} sectionName={" Máy tính "}/>
            <HomeSectionCarosel data={Sm_Tablet} sectionName={" Điện thoại "}/>
            <HomeSectionCarosel data={Sm_Tablet} sectionName={" Máy tính bảng "}/>
            <HomeSectionCarosel data={Sm_Tablet} sectionName={" Linh kiện "}/>
        </div>
    </div>
  )
}

export default HomePage