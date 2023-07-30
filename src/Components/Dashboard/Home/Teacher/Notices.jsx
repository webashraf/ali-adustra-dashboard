import { useContext, useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import 'react-tabs/style/react-tabs.css';
import { AuthContext } from "../../../../Firebase/AuthProvider/AuthProvider";
import './Teacher.css';
import { useQuery } from "@tanstack/react-query";


const Notices = () => {
    const { user } = useContext(AuthContext);
    const [mUser, setMUser] = useState(null);
    const { control, handleSubmit, errors } = useForm();


     const {refetch, data: myNotice = []} = useQuery({
        queryKey: [],
        queryFn: async () => {
            const res = await fetch(`http://localhost:3000/my-notice?email=${user?.email}`)
            return res.json()
        }
    })


    const onSubmit = (data) => {
        refetch()

        const teacherNotice = {
            title: data?.title,
            notice: data?.notice,
            name: mUser?.userName,
            userPhoto: mUser?.userPhoto,
            email: mUser?.userEmail,
            role: mUser?.role,
            postTime: new Date()
        }


        fetch(`http://localhost:3000/addNotice`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(teacherNotice)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
        })


    };


    const  handleDeleteNotice = noticeId => {
        console.log('clicked delete', noticeId);
        refetch()
        fetch(`http://localhost:3000/delete-notice/${noticeId}`, {
            method: 'DELETE',
        })
        .then(res => res.json())
        .then(data => console.log(data))
        
    }



    useEffect(() => {

        fetch(`http://localhost:3000/user?email=${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setMUser(data);
            })        


    }, [user, setMUser])


    return (
        <div className="pb-20">
            <h2 className="text-7xl text-sky-500 font-serif text-center my-10">Manage Notices</h2>
            <Tabs className={"shadow-xl shadow-sky-300 p-10 "}>
                <TabList >
                    <Tab>All Notice</Tab>
                    <Tab>Add a Notice</Tab>
                </TabList>

                <TabPanel>
                    <div className="overflow-x-auto">
                        <table className="table">
                            {/* head */}
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>Title</th>
                                    <th>Notice</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>

                                {
                                    myNotice.map((notice, index) => <tr key={notice._id} className="hover">
                                         <th>{index + 1}</th>
                                    <td>{notice.title}</td>
                                    <td>{notice.notice}</td>
                                    <td className="space-x-2">
                                        <button className="btn btn-xs btn-primary">Update</button>
                                        <button onClick={() => handleDeleteNotice(notice._id)} className="btn btn-xs btn-primary">Delete</button>
                                    </td>
                                    </tr>)
                                }
                            </tbody>
                        </table>
                    </div>
                </TabPanel>

                <TabPanel>

                    <div className="flex justify-center addNotice">
                        <form className="w-full max-w-lg mt-8" onSubmit={handleSubmit(onSubmit)}>
                            <div className="-mx-3 mb-6">

                                <div className="w-full px-3">
                                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                        Title
                                    </label>
                                    <Controller
                                        name="title"
                                        control={control}
                                        rules={{ required: 'Title is required' }}
                                        render={({ field }) => (
                                            <input
                                                {...field}
                                                type="text"
                                                placeholder="Enter your title"
                                                className="appearance-none block w-full bg-white text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                                            />
                                        )}
                                    />
                                    {errors?.title && (
                                        <p className="text-red-500 text-xs italic">{errors?.title?.message}</p>
                                    )}
                                </div>
                            </div>

                            <div className="-mx-3 mb-6">

                                <div className="w-full px-3 mb-6 md:mb-0">
                                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                        Notice
                                    </label>
                                    <Controller
                                        name="notice"
                                        control={control}
                                        rules={{ required: 'Notice is required' }}
                                        render={({ field }) => (
                                            <textarea
                                                {...field}
                                                placeholder="Enter notice"
                                                className="appearance-none block w-full bg-white text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                                rows={4} // You can adjust the number of rows as needed
                                            />
                                        )}
                                    />
                                    {errors?.notice && (
                                        <p className="text-red-500 text-xs italic">{errors?.notice?.message}</p>
                                    )}
                                </div>

                            </div>

                            <div className="flex justify-center">
                                <button
                                    type="submit"
                                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                >
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>

                </TabPanel>
            </Tabs>
        </div>
    );
};

export default Notices;