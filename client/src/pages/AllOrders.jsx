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
            id: 1,
            name: "John Doe",
            number: "1234567890",
            title: "Product A",
            quantity: 2,
            price: "$50",
            status: "Delivered",
            date: "2023-12-10",
        },
        {
            id: 2,
            name: "Jane Smith",
            number: "0987654321",
            title: "Product B",
            quantity: 1,
            price: "$30",
            status: "Pending",
            date: "2023-12-12",
        },
        {
            id: 3,
            name: "Michael Brown",
            number: "1122334455",
            title: "Product C",
            quantity: 3,
            price: "$90",
            status: "Shipped",
            date: "2023-12-15",
        },
    ];

    return (
        <div className="bg-white pb-4">
            <table className="w-full userTable border-collapse border border-slate-300">
                <thead>
                    <tr className="bg-black text-white">
                        <th className="border border-slate-300 px-4 py-2">Sr.</th>
                        <th className="border border-slate-300 px-4 py-2">Name & Number</th>
                        <th className="border border-slate-300 px-4 py-2">Title</th>
                        <th className="border border-slate-300 px-4 py-2">
                            Quantity & Price
                        </th>
                        <th className="border border-slate-300 px-4 py-2">Status</th>
                        <th className="border border-slate-300 px-4 py-2">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    { staticOrders.map((order, index) => (
                        <tr key={ order.id } className="text-center">
                            <td className="border border-slate-300 px-4 py-2">{ index + 1 }</td>
                            <td className="border border-slate-300 px-4 py-2">
                                { order.name } <br />
                                <span className="text-gray-500">{ order.number }</span>
                            </td>
                            <td className="border border-slate-300 px-4 py-2">
                                { order.title }
                            </td>
                            <td className="border border-slate-300 px-4 py-2">
                                { order.quantity } x { order.price }
                            </td>
                            <td className="border border-slate-300 px-4 py-2">
                                { order.status } <br />
                                <span className="text-gray-500">
                                    { moment(order.date).format("LL") }
                                </span>
                            </td>
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
                    )) }
                </tbody>
            </table>

            { openUpdateStatus && (
                <ChangeOrderStatus
                    onClose={ () => setOpenUpdateStatus(false) }
                    role={ updateOrdersDetails.status }
                    userId={ updateOrdersDetails.id }
                    callFunc={ () =>
                        console.log("Static data refreshed") }
                />
            ) }
        </div>
    );
};

export default AllOrders;