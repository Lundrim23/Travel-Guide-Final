import React, { useState } from "react";
import AddEventModal from "./AddEventModal";

const AddEvent = () => {
    const [showMyModal, setShowMyModal] = useState(false);

    const handleOnClose = () => setShowMyModal(false)

    return(
        <div className="container bg-blue-400 bg-opacity-30">
            <div className="max-w-3xl mx-auto">
                <div className="text-center py-3">
                <button onClick={() => setShowMyModal(true)} className="bg-red-400 text-white px-3 py-2 rounded hover:scale-95 transition text-xl">
                    Add Event
                </button>
                </div>
            </div>
            <AddEventModal onClose={handleOnClose} visible={showMyModal} />
        </div>
    )
}

export default AddEvent;