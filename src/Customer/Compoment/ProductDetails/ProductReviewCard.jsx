import React from 'react'
import { Avatar,Grid,Grid2 } from '@mui/material'
import { Rating,Box } from '@mui/material'
import box from '@mui/material/Box';
const ProductReviewCard = () => {
  return (
    <div>
        <Grid2 container spacing={2} gap = {3}>
            <Grid2 item xs={1}>
                <Box>
                    <Avatar className='text-white'sx={{width:65,height:56,bgcolor:"#9155fd"} } ></Avatar>
                </Box>
            </Grid2>
            <Grid2 item xs={9}>
                <div className='space-y-2'>
                    <div>
                        <p className='font-semibold text-lg'>Raam</p>
                        <p className='opacity-70'>Tháng 4,2025</p>
                    </div>
                </div>
                <Rating value={4.5} name='half-rating' readOnly precision={.5}/>
                <p>máy lỏ</p>
            </Grid2>
        </Grid2>
    </div>
  )
}

export default ProductReviewCard