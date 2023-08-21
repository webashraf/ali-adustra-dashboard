import { useRef, useState } from "react";

const ClassModal = ({ currentClass, refetch }) => {
    const [singleNotice, setSingleNotice] = useState(null);

    console.log(currentClass);

    const photoRef = useRef(null);
    const TClassRef = useRef(null);
    const titleRef = useRef(null);
    const noticeRef = useRef(null);
    // console.log('REF',titleRef, noticeRef);


    const updateNotice = () => {

        const updatedClass = {
            title: titleRef?.current?.value,
            notice: noticeRef?.current?.value,
            classPhoto: photoRef?.current?.value,
            TClass: TClassRef?.current?.value
        }
        console.log(updatedClass);

        fetch(`http://localhost:3000/update-single-class/${currentClass?._id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updatedClass)
        })
        .then(res => res.json())
        .then(data => console.log(data))
        refetch();



    }


    return (
        <form method="dialog" className="modal-box">
            <h3 className="font-bold text-lg">Update Notice!</h3>

            <div className="card-body">
            <div className="-mx-3 mb-6 flex gap-1">
                                <div className="w-full px-3">
                                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                        Class Photo
                                    </label>
                                    <input type="url" name="title" ref={photoRef} defaultValue={currentClass?.classPhoto} placeholder="Title" className="input input-bordered input-info" />
                                    
                                </div>
                                <div className="w-full px-3 mb-6 md:mb-0">
                                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                        Class Type
                                    </label>
                                    <select
                                        name="classNumber"
                                        ref={TClassRef}
                                        required
                                        className="select select-bordered w-full max-w-xs"
                                        
                                    >
                                        <option disabled value={currentClass?.TClass} selected>Select a Class</option>
                                        <option value="6">6</option>
                                        <option value="7">7</option>
                                        <option value="8">8</option>
                                        <option value="9">9</option>
                                        <option value="10">10</option>
                                    </select>
                                </div>
                            </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Title</span>
                    </label>
                    <input type="text" name="title" ref={titleRef} defaultValue={currentClass?.title} placeholder="Title" className="input input-bordered input-info" />
                    
                </div>                
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Notice</span>
                    </label>
                    <textarea placeholder="Notice" ref={noticeRef} name="notice" defaultValue={currentClass?.description } className="textarea textarea-info textarea-bordered textarea-lg w-[100%] outline-[0px]" ></textarea>
                    
                </div>
            </div>


            <div className="modal-action">
                <input type="submit" onClick={updateNotice} className="btn" value="Submit" />
                <button className="btn">Close</button>
            </div>
        </form>
    );
};

export default ClassModal;