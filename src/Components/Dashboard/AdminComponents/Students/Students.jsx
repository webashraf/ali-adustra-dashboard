import { useQuery } from "@tanstack/react-query";
import moment from "moment";
import { useEffect, useRef, useState } from "react";
import Swal from "sweetalert2";



const Students = () => {
const [students, setStudents] = useState([])
const [refetch, setRefetch] = useState(true);

const studentSerchRef = useRef(null);
    
    // console.log('STUDENTSSSSSSSSSSSSSSS');



    useEffect(() => {
        fetch('http://localhost:3000/getStudent')
        .then(res => res.json())
        .then(data => setStudents(data))
    }, [refetch])



const searchStudent = () => {

    console.log(studentSerchRef.current.value);
    const studentID = studentSerchRef.current.value;
    fetch(`http://localhost:3000/studentSearchById/${studentID}`)
    .then(res => res.json())
    .then(data => {
        console.log(data)
        setStudents(data)
    })
  !studentID && setRefetch(!refetch)
    
}




    const deleteUser = uId => {



        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:3000/delete-student/${uId}`,{ method: 'DELETE' })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data?.acknowledged) {
                            setRefetch(!refetch)
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                              )
                            
                        }
                    })
                
            }
          })




    }

    console.log("students", students);

    return (
        <div>
            <div className="overflow-x-auto py-20">
                <form className="form-control">
                    <div className="input-group flex justify-end">
                        <input onKeyUp={searchStudent} ref={studentSerchRef} type="text" style={{outline: 0}} placeholder="Search…" className="input input-bordered input-info " />
                        <button className="btn btn-square bg-cyan-700 hover:bg-cyan-500 text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                        </button>
                    </div>
                </form>
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                <label>
                                    Serial
                                </label>
                            </th>
                            <th>Name And Email</th>
                            <th>Subject</th>
                            <th>Joining Date</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            students.map((student, i) => <tr key={student?._id}>
                                <th>
                                    <label>
                                        {i + 1}
                                    </label>
                                </th>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={student?.userPhoto} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">{student?.userName}</div>
                                            <div className="text-sm opacity-50">{student?.userEmail}</div>
                                            <div className="text-sm opacity-50">Id: {student?.id}</div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    Zemlak, Daniel and Leannon
                                    <br />
                                    <span className="badge badge-ghost badge-sm">Desktop Support Technician</span>
                                </td>
                                <td>
                                    {moment(student?.registerDate).format("MM Do YYYY")}
                                </td>
                                <th>
                                    <button onClick={() => deleteUser(student?._id)} className="btn btn-primary btn-xs">Delete</button>
                                </th>
                            </tr>)
                        }


                    </tbody>

                </table>
            </div>
        </div>
    );
};
export default Students;