import React, { useState, useEffect } from "react";
// import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { apiEndpoint } from "../../../hooks/apiEndpoint/apiEndpoint";

const MakeAdmin = () => {
  const [userData, setUserData] = useState([]);
  //   const [singleUserData,setSingleUserData]=useState({})
  // const navigate = useNavigate();
  // const {pathname}= useLocation();
  // console.log();
  const getInitialState = () => {
    const value = "Admin";
    return value;
  };
  const [value, setValue] = useState(getInitialState);
  const roleChangeRef = (e) => {
    setValue(e.target.value);
  };
  // console.table(value,navigate,pathname);
  useEffect(() => {
    fetch(`${apiEndpoint}/user_data`)
      .then((res) => res.json())
      .then((data) => setUserData(data));
  }, []);
  const handleEdit = async (id) => {
    const role = { role: value };
    await fetch(`${apiEndpoint}/user_admin/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(role),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {

          // setStatus("Approved")
          toast("Order Has been Update Successfully!");
          // navigate(pathname);
          // <Navigate to='/' replace={true} />
          window.location.reload()

        }
        console.log(data);
      });
  };

  return (
    <div>
      <ToastContainer />

      <div className="flex flex-col">
        <div className=" overflow-x-auto ">
          <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
              <table className="min-w-full text-center divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Name
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3  text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Title
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3  text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Status
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3  text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Role
                    </th>
                    <th scope="col" className="relative px-6 py-3">
                      <span className="sr-only">Edit</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {userData.map((person) => (
                    <tr key={person._id}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="flex-shrink-0 h-10 w-10">
                            <img
                              className="h-10 w-10 rounded-full"
                              src={person.pic}
                              alt=""
                            />
                          </div>
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900">
                              {person.name}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">
                          {person.email}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                          Active
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {person.role}
                      </td>
                      <td className="px-6 flex gap-4 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <select onChange={roleChangeRef} name="" id="">
                          <option value="Admin">Admin</option>
                          <option value="Moderator">Moderator</option>
                          <option value="Member">Member</option>
                        </select>
                        <button
                          className="bg-pink-600 p-1 text-white rounded-sm"
                          onClick={() => handleEdit(person._id)}
                        >
                          Change
                        </button>

                        {/* modal for edit  */}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MakeAdmin;
