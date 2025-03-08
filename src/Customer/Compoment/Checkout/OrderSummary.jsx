import React, { useEffect } from 'react'
import AddressCard from '../AddressCard/AddressCard'
import { Button } from '@mui/material'
import CartItem from '../Cart/CartItem'
import { useDispatch, useSelector } from 'react-redux'
import { getOrderById } from '../../../State/Order/Action'
import { useLocation } from 'react-router-dom'
const OrderSummary = () => {
    const dispatch = useDispatch();
    const location = useLocation();
    const {order} = useSelector(store=>store);
    const searchParamms = new URLSearchParams(location.search);
    const orderId = searchParamms.get("order_Id")
    useEffect(()=>{
        dispatch(getOrderById(orderId))
    },[orderId])

  return (
    <div>
        <div className='p-5 shadow-lg rounded-s-md border'>
            <AddressCard address={order.order?.shippingAddress}/>
        </div>
        <div>
            <div className='lg:grid grid-cols-3 relative'>

                <div className='col-span-2'>
                    {order.order?.orderItems.map((item) => (<CartItem  item={item}/>))}
                </div>

                <div className="px-5 sticky top-0 h-[100vh] mt-5 lg:mt-0">
                    <div className="border rounded-lg shadow-md p-5 bg-white">
                        <p className="uppercase font-bold opacity-70 pb-4 text-lg text-gray-700">
                            Price Details
                        </p>
                        <hr className="border-gray-300" />
                        <div className="space-y-4 font-medium text-gray-700 mb-6">
                            <div className="flex justify-between pt-3">
                                <span>Giá</span>
                                <span className="font-semibold text-black">{order.order?.totalPrice} VNĐ</span>
                            </div>
                            <div className="flex justify-between pt-3">
                                <span>Giảm Giá</span>
                                <span className="font-semibold text-red-500">{order.order?.discounte} VNĐ</span>
                            </div>
                            <div className="flex justify-between pt-3">
                                <span>Phí vận chuyển</span>
                                <span className="font-semibold text-blue-500">30,000 VNĐ</span>
                            </div>
                            <hr className="border-gray-300" />
                            <div className="flex justify-between pt-3 text-xl font-bold text-green-600">
                                <span>Tổng tiền</span>
                                <span>{order.order?.totalDiscountedPrice} VNĐ</span>
                            </div>
                        </div>
                        <Button variant="contained" className='w-full mt-5' sx={{ px: "2.5rem", py: ".7rem", bgcolor: "#9155fd" }}>
                            Thanh toán ngay
                        </Button>
                    </div>
                </div>
            </div>

        </div>
    </div>
  )
}

export default OrderSummary