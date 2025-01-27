import React from 'react';
import { toast } from "react-hot-toast";
import { useDispatch, useSelector } from 'react-redux';
import OrderInvoice from '../components/OrderInvoice';
import { PDFViewer } from "@react-pdf/renderer";
import { remove } from "../redux/Slices/CartSlice";
import { useNavigate } from 'react-router-dom';

const OrderPage = () => {
    const { cart } = useSelector((state) => state);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const removeFromCart = (id) => {
        dispatch(remove(id)); // Pass the item ID to remove the specific cart item
        toast.error("Item removed from Cart");
        navigate('/'); // Navigate to the home page
    };

    return (
        <div>
            {cart.map((order) => (
                <PDFViewer key={order.id} style={{ width: "100%", height: "100vh" }}>
                    <OrderInvoice order={order} onClick={() => removeFromCart(order.id)} />
                </PDFViewer>
            ))}
        </div>
    );
};

export default OrderPage;
