import React from 'react'
import { Button, Grid, TextField } from '@mui/material'
import AddressCard from '../AddressCard/AddressCard'
import Box from '@mui/material/Box';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { createOrder } from '../../../State/Order/Action';
const DeliveryAddressForm = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit=(e)=>{
            e.preventDefault=()=>{
            const data = new FormData(e.curentTarget);
            const address={
                firstName:data.get("firstName"),
                lastName:data.get("lastName"),
                streetAddress:data.get("address"),
                city:data.get("city"),
                state:data.get("state"),
                mobile:data.get("phoneNumber")
            }
            const orderData = {address,navigate}
            dispatch(createOrder(orderData))

            console.log("address",orderData)
        }
        
    }


    return (
        <div>
            <Grid container spacing={4}>
                <Grid xs={12} lg={5} className='border rounded-e-md shadow-md h-[30.5rem] overflow-y-scroll'>
                    <div className='p-5 py-7 border-b cursor-pointer'>
                        <AddressCard />
                        <Button sx={{ mt: 2, bgcolor: "RGB(145 85 252)" }} size='large' variant='contained'>
                            Xác nhận
                        </Button>
                    </div>
                </Grid>
                <Grid item xs={12} lg={7}>
                    <Box className="border rounded-s-md shadow-md p-5">
                        <form onSubmit={handleSubmit}>
                            <Grid container spacing={3}>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        required
                                        id="firstName"
                                        name="firstName"
                                        label="Họ"
                                        fullWidth
                                        autoComplete="given-name"

                                    />

                                </Grid>

                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        required
                                        id="lastName"
                                        name="lastName"
                                        label="Tên"
                                        fullWidth
                                        autoComplete="given-name"

                                    />

                                </Grid>
                                <Grid item xs={12} >
                                    <TextField
                                        required
                                        id="address"
                                        name="address"
                                        label="Địa chỉ"
                                        fullWidth
                                        autoComplete="given-name"
                                        multiline
                                        rows={4}

                                    />

                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        required
                                        id="city"
                                        name="city"
                                        label="Thành phố"
                                        fullWidth
                                        autoComplete="given-name"

                                    />

                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        required
                                        id="state"
                                        name="state"
                                        label="Quận/Huyện"
                                        fullWidth
                                        autoComplete="given-name"

                                    />

                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        required
                                        id="phoneNumber"
                                        name="phoneNumber"
                                        label="SĐT"
                                        fullWidth
                                        autoComplete="given-name"

                                    />

                                </Grid>
                                <Grid item xs={12} sm={6}>
                                <Button sx={{ py:1.5 ,mt: 2, bgcolor: "RGB(145 85 252)" }} size='large' variant='contained' >
                                Xác nhận
                                </Button>
                                </Grid>

                            </Grid>
                        </form>
                    </Box>
                </Grid>
            </Grid>
        </div>
    )
}

export default DeliveryAddressForm