import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Loading from './Shared/Loading/Loading';

const Users = () => {
    const { data: users, isLoading, refetch } = useQuery(['users'], () => fetch('http://localhost:5000/user', {
        method: 'GET',
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <h2 className='text-3xl' > All Users: {users.length} </h2>
        </div>
    );
};

export default Users;