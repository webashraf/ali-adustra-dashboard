import { useQuery } from "@tanstack/react-query";
import moment from "moment";
import { useContext, useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import { AuthContext } from "../../../../Firebase/AuthProvider/AuthProvider";
import ClassModal from "./ClassModal/ClassModal";

const Resources = () => {
    const { user } = useContext(AuthContext);
    const [mUser, setMUser] = useState(null);
    const [singleClass, setSingleClass] = useState(null);
    const { control, handleSubmit, errors, register } = useForm();

    console.log("singleClass", singleClass);

    const { data: allClass = [], refetch } = useQuery({
        queryKey: [],
        queryFn: async () => {
            const res = await fetch(`http://localhost:3000/allClass`)
            return res.json();
        }
    })
    // console.log("Public Class", allClass);
    const onSubmit = (data) => {
        refetch();
        const TClass = data?.classNumber //? data?.classNumber : "All"

        console.log("TClass", TClass);
        const newClass = {
            title: data?.title,
            description: data?.description,
            name: mUser?.userName,
            TClass,
            classPhoto: mUser?.userPhoto,
            email: mUser?.userEmail,
            role: mUser?.role,
            enroll: 0,
            status: "pending",
            postTime: new Date()
        }

        console.log(newClass);

        fetch(`http://localhost:3000/addClass`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newClass)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                refetch();
            })
        refetch();

    };




    const updateClass = classId => {
        console.log(classId);
        fetch(`http://localhost:3000/find-single-Class/${classId}`)
            .then(res => res.json())
            .then(data => setSingleClass(data))
        refetch();
        console.log(singleClass?.title);
        console.log("Modal clicked");
        window.my_modal_5.showModal();
    }




    const handleDeleteClass = ClassId => {
        console.log('clicked delete', ClassId);
        refetch()
        fetch(`http://localhost:3000/delete-Class/${ClassId}`, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(data => console.log(data))
            refetch()

    }







    useEffect(() => {

        fetch(`http://localhost:3000/user?email=${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setMUser(data);
            })


    }, [user, setMUser])




    return (
        <div>
            <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                <ClassModal currentClass={singleClass} refetch={refetch}></ClassModal>
            </dialog>
            <Tabs className={"shadow-xl shadow-sky-300 p-10 "}>
                <TabList >
                    <Tab>Classes</Tab>
                    <Tab>Add a Class</Tab>
                </TabList>

                <TabPanel>
                    <div className="overflow-x-auto">
                        <table className="table">
                            {/* head */}
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>Author</th>
                                    <th>Title</th>
                                    <th>Class</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>

                                {
                                    allClass.map((classes, index) => <tr key={classes._id} className="hover">
                                        <th>{index + 1}</th>
                                        <td>
                                            <div>{classes?.name}</div>
                                            <div>{classes?.email}</div>
                                            <div>{moment(classes?.postTime).format("MMMM Do YYYY")}</div>
                                        </td>
                                        <td>{classes?.title}</td>
                                        <td>{classes?.classes?.slice(0, 20)}...</td>
                                        <td className="space-x-2">
                                        <button onClick={() => updateClass(classes?._id)} className="btn btn-xs btn-primary">Update</button>
                                                <button onClick={() => handleDeleteClass(classes?._id)} className="btn btn-xs btn-primary">Delete</button>
                                        </td>
                                    </tr>)
                                }
                            </tbody>
                        </table>
                    </div>
                </TabPanel>

                <TabPanel>

                    <div className="flex justify-center">

                        <form className="w-[600px] mt-8" onSubmit={handleSubmit(onSubmit)}>

                            <div className="-mx-3 mb-6 flex gap-1">
                                <div className="w-full px-3">
                                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                        Class Photo
                                    </label>
                                    <Controller
                                        name="url"
                                        control={control}
                                        rules={{
                                            required: "Photo is required",
                                        }}
                                        render={({ field }) => <input {...field} className="appearance-none block w-full bg-white text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white" placeholder="Photo url" />}
                                    />
                                    {errors?.email && <span>{errors?.email.message}</span>}
                                </div>
                                <div className="w-full px-3 mb-6 md:mb-0">
                                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                        Class Type
                                    </label>
                                    <select
                                        name="classNumber"
                                        required
                                        className="select select-bordered w-full max-w-xs"
                                        {...register("classNumber")}
                                    >
                                        <option disabled value="ALL" selected>Select a Class</option>
                                        <option value="6">6</option>
                                        <option value="7">7</option>
                                        <option value="8">8</option>
                                        <option value="9">9</option>
                                        <option value="10">10</option>
                                    </select>
                                </div>
                            </div>

                            
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
                                        Description
                                    </label>
                                    <Controller
                                        name="description"
                                        control={control}
                                        rules={{ required: 'Class is required' }}
                                        render={({ field }) => (
                                            <textarea
                                                {...field}
                                                placeholder="Enter Class"
                                                className="appearance-none block w-full bg-white text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                                rows={4} // You can adjust the number of rows as needed
                                            />
                                        )}
                                    />
                                    {errors?.Class && (
                                        <p className="text-red-500 text-xs italic">{errors?.Class?.message}</p>
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

export default Resources;