import { Grid } from '@mui/material';
import React from 'react';
import AdjustIcon from '@mui/icons-material/Adjust';
import { useNavigate } from 'react-router-dom';

const OrderCard = () => {
    const navigate = useNavigate();
    return (
        <div onClick={() => navigate(`/account/order/${5}`)} className='p-5 shadow-md shadow-black hover:shadow-2xl border'>
            <Grid container spacing={2} sx={{ justifyContent: "space-between" }}>
                <Grid item xs={6}>
                    <div className='flex cursor-pointer'>
                        <img src="" alt="" />
                        <div className='ml-5 space-y-2'>
                            <p className=''>Men Slim Mid Rise Black Jean</p>
                            <p className='opacity-50 text-xs font-semibold'>Size: M</p>
                            <p className='opacity-50 text-xs font-semibold'>Color: Black</p>
                        </div>
                    </div>
                </Grid>

                <Grid item xs={2}>
                    <p>200,000 VND</p>
                </Grid>

                <Grid item xs={4}>
                    <div>
                        {true ? (
                            <div>
                                <p>
                                    <AdjustIcon sx={{ width: "15px", height: "15px" }} className='text-green-600 mr-2 text-sm' />
                                    <span>
                                        Đơn hàng của bạn sẽ được giao hàng vào ngày 25/3
                                    </span>
                                </p>
                                <p className='text-xs'>
                                    Đơn hàng của bạn đã được giao thành công.
                                </p>
                            </div>
                        ) : (
                            <p>
                                <span>
                                    Đơn hàng của bạn dự kiến giao hàng vào ngày 30/3
                                </span>
                            </p>
                        )}
                    </div>
                </Grid>
            </Grid>
        </div>
    )
}

export default OrderCard;
