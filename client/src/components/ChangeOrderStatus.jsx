import { useState } from "react";
import PropTypes from "prop-types"; // Import PropTypes
import STATUS from "../common/status";
import { IoMdClose } from "react-icons/io";
import SummaryApi from "../common";
import { toast } from "react-toastify";

// eslint-disable-next-line react/prop-types
const ChangeOrderStatus = ({ role, userId, onClose, callFunc }) => {
    const [userStatus, setUserStatus] = useState(role);

    const handleOnChangeSelect = (e) => {
        setUserStatus(e.target.value);
        console.log(e.target.value);
    };

    const updateUserStatus = async () => {
        const fetchResponse = await fetch(SummaryApi.updateUser.url, {
            method: SummaryApi.updateUser.method,
            credentials: "include",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify({
                userId: userId,
                role: userStatus,
            }),
        });

        const responseData = await fetchResponse.json();

        if (responseData.success) {
            toast.success(responseData.message);
            onClose();
            callFunc();
        }

        console.log("status updated", responseData);
    };

    return (
        <div className="fixed top-0 bottom-0 left-0 right-0 w-full h-full z-10 flex justify-between items-center bg-slate-200 bg-opacity-50">
            <div className="mx-auto bg-white shadow-md p-4 w-full max-w-sm">
                <button className="block ml-auto" onClick={ onClose }>
                    <IoMdClose />
                </button>

                <h1 className="pb-4 text-lg font-medium">Change Status</h1>

                <div className="flex items-center justify-between my-4">
                    <p>Status :</p>
                    <select
                        className="border px-4 py-1"
                        value={ userStatus }
                        onChange={ handleOnChangeSelect }
                    >
                        { Object.values(STATUS).map((el) => {
                            return (
                                <option value={ el } key={ el }>
                                    { el }
                                </option>
                            );
                        }) }
                    </select>
                </div>

                <button
                    className="w-fit mx-auto block  py-1 px-3 rounded-full bg-red-600 text-white hover:bg-red-700"
                    onClick={ updateUserStatus }
                >
                    Change Status
                </button>
            </div>
        </div>
    );
};

// Add PropTypes validation
ChangeOrderStatus.propTypes = {
    name: PropTypes.string,
    email: PropTypes.string,
    role: PropTypes.string.isRequired,
    userId: PropTypes.string.isRequired, // Mark userId as required
    onClose: PropTypes.func.isRequired,
    callFunc: PropTypes.func.isRequired,
};

export default ChangeOrderStatus;