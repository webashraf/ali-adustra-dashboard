import { useQuery } from "@tanstack/react-query";
import moment from "moment";

const Teacher = () => {



    const { data: teachers = [], refetch } = useQuery({
        queryKey: [],
        queryFn: async () => {
            const res = await fetch('http://localhost:3000/teachers-or-student?user=teacher')
            return res.json()
        }
    })



    const deleteUser = uId => {
        fetch(`http://localhost:3000/delete-user/${uId}`, { method: 'DELETE' })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                refetch();
            })

    }


    console.log(teachers);
    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <th>Name And Email</th>
                            <th>Subject</th>
                            <th>Joining Date</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}


                        {/* <tr>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <td>
                                <div className="flex items-center space-x-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src="/tailwind-css-component-profile-2@56w.png" alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-bold">Hart Hagerty</div>
                                        <div className="text-sm opacity-50">United States</div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                Zemlak, Daniel and Leannon
                                <br />
                                <span className="badge badge-ghost badge-sm">Desktop Support Technician</span>
                            </td>
                            <td>Purple</td>
                            <th>
                                <button className="btn btn-ghost btn-xs">details</button>
                            </th>
                        </tr> */}
                        {
                            teachers.map(teacher => <tr key={teacher?._id}>
                                <th>
                                    <label>
                                        <input type="checkbox" className="checkbox" />
                                    </label>
                                </th>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={teacher?.userPhoto} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">{teacher?.userName}</div>
                                            <div className="text-sm opacity-50">{teacher?.userEmail}</div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    Zemlak, Daniel and Leannon
                                    <br />
                                    <span className="badge badge-ghost badge-sm">Desktop Support Technician</span>
                                </td>
                                <td>{moment(teacher?.registerDate).format("dddd, MM Do YYYY, h:mm:ss A")}</td>
                                <th>
                                    <button onClick={() => deleteUser(teacher?._id)} className="btn btn-primary btn-xs">Delete</button>
                                </th>
                            </tr>)
                        }


                    </tbody>

                </table>
            </div>        </div>
    );
};

export default Teacher;