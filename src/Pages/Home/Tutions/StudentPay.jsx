import { useEffect, useState } from "react";
import axios from "axios";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useLocation, useParams } from "react-router";
import Loader from "../../../components/Loading/Loading";

const StudentPay = () => {
    const { email } = useParams();
    const { state } = useLocation();
    const [userInfo, setUserInfo] = useState(null);
    const AxiosSecure = useAxiosSecure();   
    const salary = state;
    console.log("salary", state?.salary);
    useEffect(() => {
        const fetchUser = async () => {
            try {
                const res = await AxiosSecure.get(`/users/${email}`);
                setUserInfo(res.data);
            } catch (err) {
                console.error(err);
            }
        };
        fetchUser();
    }, [email]);

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold">Teacher Payment Portal</h1>

            {userInfo ? (
                <div className="mt-4 p-4 bg-gray-100 rounded border">
                    <p><strong>Name:</strong> {userInfo.name}</p>
                    <p><strong>Email:</strong> {userInfo.email}</p>
                    <p><strong>Role:</strong> {userInfo.role}</p>
                    <p><strong>Salary:</strong> {salary.salary} ৳</p>
                    
                    

                    {/* এখানেই payment করা যাবে */}
                </div>
            ) : (
                <Loader />
            )}
        </div>
    );
};

export default StudentPay;
