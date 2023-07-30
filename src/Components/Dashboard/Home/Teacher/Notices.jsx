import { Controller, useForm } from "react-hook-form";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import 'react-tabs/style/react-tabs.css';
import './Teacher.css'


const Notices = () => {
    const { control, handleSubmit, errors } = useForm();

    // Submit function to handle form submission
    const onSubmit = (data) => {
        console.log(data); // You can handle form submission here
    };

    return (
        <div className="pb-20">
            <h2 className="text-7xl text-sky-500 font-serif text-center my-10">Manage Notices</h2>
            <Tabs className={"shadow-xl shadow-sky-300 py-10"}>
                <TabList >
                    <Tab>All Notice</Tab>
                    <Tab>Add a Notice</Tab>
                </TabList>

                <TabPanel>
                    <div className="">
                    <h2>Any content 1</h2>
                    <h2>Any content 1</h2>
                    </div>
                </TabPanel>

                <TabPanel>

                    <div className="flex justify-center addNotice">
                        <form className="w-full max-w-lg mt-8" onSubmit={handleSubmit(onSubmit)}>
                            <div className="flex flex-wrap -mx-3 mb-6">
                                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                        Name
                                    </label>
                                    <Controller
                                        name="name"
                                        control={control}
                                        rules={{ required: 'Name is required' }}
                                        render={({ field }) => (
                                            <input
                                                {...field}
                                                type="text"
                                                placeholder="Enter your name"
                                                className="appearance-none block w-full bg-white text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                            />
                                        )}
                                    />
                                </div>
                                <div className="w-full md:w-1/2 px-3">
                                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                        Email
                                    </label>
                                    <Controller
                                        name="email"
                                        control={control}
                                        rules={{
                                            required: 'Email is required',
                                            pattern: {
                                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                                                message: 'Invalid email address',
                                            },
                                        }}
                                        render={({ field }) => (
                                            <input
                                                {...field}
                                                type="text"
                                                placeholder="Enter your email"
                                                className="appearance-none block w-full bg-white text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                                            />
                                        )}
                                    />
       
                                </div>
                            </div>

                            <div className="flex flex-wrap -mx-3 mb-6">
                                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                        Role
                                    </label>
                                    <Controller
                                        name="role"
                                        control={control}
                                        rules={{ required: 'Role is required' }}
                                        render={({ field }) => (
                                            <input
                                                {...field}
                                                type="text"
                                                placeholder="Enter your role"
                                                className="appearance-none block w-full bg-white text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                            />
                                        )}
                                    />
                                </div>
                                <div className="w-full md:w-1/2 px-3">
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

                            <div className="flex flex-wrap -mx-3 mb-6">
                                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                        Notice
                                    </label>
                                    <Controller
                                        name="notice"
                                        control={control}
                                        rules={{ required: 'Notice is required' }}
                                        render={({ field }) => (
                                            <input
                                                {...field}
                                                type="text"
                                                placeholder="Enter notice"
                                                className="appearance-none block w-full bg-white text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                            />
                                        )}
                                    />
                                    {errors?.notice && (
                                        <p className="text-red-500 text-xs italic">{errors?.notice?.message}</p>
                                    )}
                                </div>
                                <div className="w-full md:w-1/2 px-3">
                                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                        Notice Time
                                    </label>
                                    <Controller
                                        name="noticeTime"
                                        control={control}
                                        rules={{ required: 'Notice Time is required' }}
                                        render={({ field }) => (
                                            <input
                                                {...field}
                                                type="text"
                                                placeholder="Enter notice time"
                                                className="appearance-none block w-full bg-white text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                                            />
                                        )}
                                    />
                                    {errors?.noticeTime && (
                                        <p className="text-red-500 text-xs italic">{errors?.noticeTime?.message}</p>
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