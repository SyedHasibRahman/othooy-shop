import moment from "moment";
import { useState } from "react";
import { MdModeEdit } from "react-icons/md";
import ChangeOrderStatus from "../components/ChangeOrderStatus";

const AllOrders = () => {
    const [openUpdateStatus, setOpenUpdateStatus] = useState(false);
    const [updateOrdersDetails, setUpdateOrdersDetails] = useState({
        status: "",
    });

    const staticOrders = [
        {
            id: "101",
            name: "John Doe",
            number: "123-456-7890",
            date: "2024-12-23T10:00:00Z",
            status: "Pending",
            paymentStatus: "Paid",
            shippingAddress: "123 Elm St, City, 12345",
            shippingMethod: "Standard",
            trackingNumber: "N/A",
            discountApplied: 0.00,
            tax: 1.50,
            totalAmount: 21.50,
            paymentMethod: "Credit Card",
            products: [
                {
                    title: "Widget A",
                    quantity: 2,
                    price: 10.00
                }
            ]
        },
        {
            id: "102",
            name: "Jane Smith",
            number: "987-654-3210",
            date: "2024-12-22T15:30:00Z",
            status: "Shipped",
            paymentStatus: "Unpaid",
            shippingAddress: "456 Oak St, City, 67890",
            shippingMethod: "Express",
            trackingNumber: "123XYZ456",
            discountApplied: 0.00,
            tax: 2.00,
            totalAmount: 27.00,
            paymentMethod: "PayPal",
            products: [
                {
                    title: "Gadget B",
                    quantity: 1,
                    price: 25.00
                },
                {
                    title: "Widget A",
                    quantity: 3,
                    price: 10.00
                }
            ]
        }
    ];


    return (
        <div className="bg-white pb-4">
            <div className="overflow-x-auto">
                <table className="min-w-full userTable border-collapse border border-slate-300">
                    <thead>
                        <tr className="bg-black text-white">
                            <th className="border border-slate-300 px-4 py-2">Order ID</th>
                            <th className="border border-slate-300 px-4 py-2">Customer Name & Number</th>
                            <th className="border border-slate-300 px-4 py-2">Order Date</th>
                            <th className="border border-slate-300 px-4 py-2">Product Title</th>
                            <th className="border border-slate-300 px-4 py-2">Quantity</th>
                            <th className="border border-slate-300 px-4 py-2">Unit Price</th>
                            <th className="border border-slate-300 px-4 py-2">Total Price</th>
                            <th className="border border-slate-300 px-4 py-2">Status</th>
                            <th className="border border-slate-300 px-4 py-2">Payment Status</th>
                            <th className="border border-slate-300 px-4 py-2">Shipping Address</th>
                            <th className="border border-slate-300 px-4 py-2">Shipping Method</th>
                            <th className="border border-slate-300 px-4 py-2">Tracking Number</th>
                            <th className="border border-slate-300 px-4 py-2">Discount Applied</th>
                            <th className="border border-slate-300 px-4 py-2">Tax</th>
                            <th className="border border-slate-300 px-4 py-2">Total Amount</th>
                            <th className="border border-slate-300 px-4 py-2">Payment Method</th>
                            <th className="border border-slate-300 px-4 py-2">Admin Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        { staticOrders.map((order, index) => {
                            // Check if it's a multi-product order
                            return order.products.map((product, productIndex) => (
                                <tr key={ order.id + '-' + productIndex } className="text-center">
                                    <td className="border border-slate-300 px-4 py-2">{ order.id }</td>
                                    <td className="border border-slate-300 px-4 py-2">
                                        { order.name } <br />
                                        <span className="text-gray-500">{ order.number }</span>
                                    </td>
                                    <td className="border border-slate-300 px-4 py-2">{ moment(order.date).format("YYYY-MM-DD HH:mm") }</td>
                                    <td className="border border-slate-300 px-4 py-2">{ product.title }</td>
                                    <td className="border border-slate-300 px-4 py-2">{ product.quantity }</td>
                                    <td className="border border-slate-300 px-4 py-2">${ product.price }</td>
                                    <td className="border border-slate-300 px-4 py-2">${ product.quantity * product.price }</td>
                                    <td className="border border-slate-300 px-4 py-2">{ order.status }</td>
                                    <td className="border border-slate-300 px-4 py-2">{ order.paymentStatus }</td>
                                    <td className="border border-slate-300 px-4 py-2">{ order.shippingAddress }</td>
                                    <td className="border border-slate-300 px-4 py-2">{ order.shippingMethod }</td>
                                    <td className="border border-slate-300 px-4 py-2">{ order.trackingNumber }</td>
                                    <td className="border border-slate-300 px-4 py-2">${ order.discountApplied }</td>
                                    <td className="border border-slate-300 px-4 py-2">${ order.tax }</td>
                                    <td className="border border-slate-300 px-4 py-2">${ order.totalAmount }</td>
                                    <td className="border border-slate-300 px-4 py-2">{ order.paymentMethod }</td>
                                    <td className="border border-slate-300 px-4 py-2">
                                        <button
                                            className="bg-green-100 p-2 rounded-full cursor-pointer hover:bg-green-500 hover:text-white"
                                            onClick={ () => {
                                                setOpenUpdateStatus(true);
                                                setUpdateOrdersDetails(order);
                                            } }
                                        >
                                            <MdModeEdit />
                                        </button>
                                    </td>
                                </tr>
                            ));
                        }) }
                    </tbody>
                </table>
            </div>

            { openUpdateStatus && (
                <ChangeOrderStatus
                    onClose={ () => setOpenUpdateStatus(false) }
                    role={ updateOrdersDetails.status }
                    userId={ updateOrdersDetails.id }
                    callFunc={ () => console.log("Static data refreshed") }
                />
            ) }
        </div>



    );
};

export default AllOrders;