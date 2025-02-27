import { IconButton } from '@mui/material';
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { Button } from "@mui/material";

import React from 'react'

const CartItem = () => {
    return (
        <div className='p-5 shadow-lg border rounded-md'>
            <div className='flex items-center'>
                <div className='w-[5rem] h-[5rem] lg:w-[9rem] lg:h-[9rem]'>
                    <img
                        src="https://i.postimg.cc/hP3gw2X3/dab0befd-00f6-482c-b036-96326585b08f-1.png"
                        alt="Product image"
                        className="w-full h-full object-cover object-top"
                    />
                </div>
                <div className='ml-5 space-y-1'>
                    <p className='font-semibold'>Máy tính dỏm</p>
                    <p className='opacity-70'>123</p>
                    <p className='opacity-70 mt-2'>sấdsad</p>
                    <div className="flex space-x-5 items-center text-gray-900 mt-6">
                    <p className="font-semibold">2000000 VNĐ</p>
                    <p className="opacity-50 line-through">200000</p>
                    <p className="text-green-600 font-semibold">10% Off</p>
                    </div>
                </div>
                </div>
                <div className='lg:flex items-center lg:space-x-10 pt-4'>
                    <div className='flex items-center space-x-2'>
                        <IconButton >
                            <RemoveCircleOutlineIcon/>
                        </IconButton>
                        <span className='py-1 px-7 border rounded-sm'>3</span>
                        <IconButton sx={{color:"RGB(145 85 253) "}} >
                            <AddCircleOutlineIcon/>
                        </IconButton>
                        
                    </div>
                    <div>
                        <Button sx={{color:"RGB(145 85 253) "}} >remove</Button>
                    </div>
                </div>
            </div>
    
    )
}

export default CartItem;