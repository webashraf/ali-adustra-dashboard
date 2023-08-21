import { useRef, useState } from "react";

const TModal = ({ currentNotice, nRefetch }) => {
    const [singleNotice, setSingleNotice] = useState(null);

    console.log(currentNotice);

    const titleRef = useRef(null);
    const noticeRef = useRef(null);
    // console.log('REF',titleRef, noticeRef);
    const updateNotice = () => {

        const updatedNotice = {
            title: titleRef.current.value,
            notice: noticeRef.current.value
        }
        console.log(updatedNotice);

        fetch(`http://localhost:3000/update-single-notice/${currentNotice?._id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updatedNotice)
        })
        .then(res => res.json())
        .then(data => console.log(data))
        nRefetch();



    }


    return (
        <form method="dialog" className="modal-box">
            <h3 className="font-bold text-lg">Update Notice!</h3>

            <div className="card-body">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Title</span>
                    </label>
                    <input type="text" name="title" ref={titleRef} defaultValue={currentNotice?.title} placeholder="Title" className="input input-bordered input-info" />
                    
                </div>                
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Notice</span>
                    </label>
                    <textarea placeholder="Notice" ref={noticeRef} name="notice" defaultValue={currentNotice?.notice} className="textarea textarea-info textarea-bordered textarea-lg w-[100%] outline-[0px]" ></textarea>
                    
                </div>
            </div>


            <div className="modal-action">
                <input type="submit" onClick={updateNotice} className="btn" value="Submit" />
                <button className="btn">Close</button>
            </div>
        </form>
    );
};

export default TModal;