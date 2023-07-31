import React, { useContext } from 'react';
import { AuthContext } from '../Firebase/AuthProvider/AuthProvider';

const StudentMenu = () => {
    const { user, signOutUser } = useContext(AuthContext);
    // console.log(user);
    const logOutBtn = () => {
        signOutUser().then((result) => { });
    };
    return (
        <div>
            <ul>
                <li className='text-xl text-white'>Student Menu</li>
                <li>
                    <button onClick={logOutBtn} className="btn btn-sm bg-red-600 z-10">
                        LogOut
                    </button>
                </li>
            </ul>
        </div>
    );
};

export default StudentMenu;