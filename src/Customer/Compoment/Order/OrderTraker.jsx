
import { Step, StepLabel, Stepper } from '@mui/material'
import React from 'react'

const steps=[
    "Xác nhận đơn hàng",
    "Đang được đóng gói",
    "Bộ Phân Giao Hàng Đã Nhận Được Hàng",
    "Đang Trong Quá Trình Vận Chuyển",
    "Đã Giao Thành Công"
]

const OrderTracker = ({activeStep}) => {
  return (
    <div className='w-full'>
        <Stepper activeStep={activeStep} alternativeLabel>

{steps.map((label)=> <Step>
    <StepLabel sx={{color:"#9155FD", fontSize:"44px"}}>{label}</StepLabel>
</Step>)}
        </Stepper>
    </div>
  )
}

export default OrderTracker