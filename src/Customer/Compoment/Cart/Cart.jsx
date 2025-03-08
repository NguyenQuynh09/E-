import React, { useEffect } from 'react'
import CartItem from './CartItem'
import { Button, Divider } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getCart } from '../../../State/Cart/Action';


const Cart = () => {
    const navigate=useNavigate();
    const {cart} = useSelector(store=>store)
    const dispatch = useDispatch()
    const handleCheckout=()=>{
        navigate("/checkout?step=2")
    }
    useEffect(()=>{
        dispatch(getCart())
    },[cart.updateCartItem,cart.deleteCartItem])
    return (
        <div>
            <div className='lg:grid grid-cols-3 lg:px-16 relative'>

                <div className='col-span-2'>    
                    {cart.cart?.cartItems.map((item) => <CartItem item={item} />)}
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
                                <span className="font-semibold text-black">{cart.cart?.totalPrice}VNĐ</span>
                            </div>
                            <div className="flex justify-between pt-3">
                                <span>Giảm Giá</span>
                                <span className="font-semibold text-red-500">{cart.cart?.discount}VNĐ</span>
                            </div>
                            <div className="flex justify-between pt-3">
                                <span>Phí vận chuyển</span>
                                <span className="font-semibold text-blue-500">FREE</span>
                            </div>
                            <hr className="border-gray-300" />
                            <div className="flex justify-between pt-3 text-xl font-bold text-green-600">
                                <span>Tổng tiền</span>
                                <span>{cart.cart?.totalDiscountedPrice}</span>
                            </div>
                        </div>
                        <Button onClick={handleCheckout} variant="contained" className='w-full mt-5' sx={{ px: "2.5rem", py: ".7rem", bgcolor: "#9155fd" }}>
                            Thanh toán ngay
                        </Button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Cart;