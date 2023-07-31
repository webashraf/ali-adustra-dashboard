import React, { useContext } from 'react';
import { AuthContext } from '../../../Firebase/AuthProvider/AuthProvider';

const StudentDashboard = () => {
    const { user, signOutUser } = useContext(AuthContext);

    return (
        <div>
            <div className="flex justify-center flex-col items-center mt-20">
                <div className="avatar">
                    <div className="w-24 mask mask-squircle">
                        {user && <img src={user?.photoURL} />}
                    </div>
                </div>
                <h1 className="text-7xl text-center font-serif">
                    Student Dashboard <span className="text-sky-600">{user.displayName}</span>
                </h1>
            </div>
        </div>
    );
};

export default StudentDashboard;