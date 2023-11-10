import React, { useEffect, useState } from "react";
import {
  faCar,
  faCheckCircle,
  faGasPump,
  faTachometerAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useParams } from "react-router";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { apiEndpoint } from "../../../hooks/apiEndpoint/apiEndpoint";
// import { set } from "core-js/core/dict";

const SingleManageProduct = () => {
  const { id } = useParams();
  const [car, setCar] = useState({});
  const {
    name,
    description,
    price,
    features,
    equipment,
    pic,
    brand,
    rating,
    status,
    madeyear,
    mileage,
    fuel,
    engine,
    horsepower,
    peopleRating,
    economy,
    transmission,
    color,
    door,
  } = car;

  const [update, setupdate] = useState(car);
  const [feature, setFeature] = useState([]);
  const [equipments, setEquipment] = useState([]);
  const navigate= useNavigate()

  // const featureOnChange = (e) => {
  //   const field = e.target.name;
  //   const value = e.target.value;
  //   let newField = { ...feature };
  //   newField[field] = value;
  //   setFeature(newField);
  //   console.log(newField);
  // };
  // const equipmentOnChange = (e) => {
  //   const field = e.target.name;
  //   const value = e.target.value;
  //   let newField = { ...equipments };
  //   newField[field] = value;
  //   setEquipment(newField);
  //   console.log(newField);
  // };

  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    let newData = { ...update };
    console.log(newData);
    newData[field] = value;

    // const newField = [];
    // for (const i in feature) {
    //   if (i.indexOf("list") > -1) {
    //     newField.push(feature[i]);
    //   }
    // }

    // const newEquipment = [];
    // for (const i in equipments) {
    //   if (i.indexOf("equipmentList") > -1) {
    //     newEquipment.push(equipments[i]);
    //   }
    // }

    
    // newData["features"] = newField;
    // newData["equipment"] = newEquipment;
    console.log(newData);
    setupdate(newData);
  };

  useEffect(() => {
    const getCars = async () => {
      const url = `${apiEndpoint}/cars/${id}`;
      await fetch(url)
        .then((res) => res.json())
        .then((data) => setCar(data));
    };
    getCars();
  }, [id]);

  const updateProduct = async () => {
    await fetch(`${apiEndpoint}/cars/update/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(update),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          toast("Product Successfully Updated!");
          navigate(`/car/${id}`)
        }
      });
  };
  const carFont = <FontAwesomeIcon icon={faCar}></FontAwesomeIcon>;
  const speedFont = <FontAwesomeIcon icon={faTachometerAlt}></FontAwesomeIcon>;
  const engineFont = <FontAwesomeIcon icon={faGasPump}></FontAwesomeIcon>;
  const checkFont = <FontAwesomeIcon icon={faCheckCircle}></FontAwesomeIcon>;

  return (
    <div className="bg-white">
      <ToastContainer />
      <div className="lg:flex  gap-4 lg:p-10 ">
        {/* tour package section  */}
        <div className="lg:w-3/4 bg-gray-50 p-4 rounded-lg">
          <div className="w-full">
            <img src={pic} alt="" className="w-full rounded-md mb-2 " />
            <input
              type="text"
              className="border-2 border-gray-600 p-2 bg-blue-200 w-full rounded-sm"
              name="pic"
              defaultValue={pic}
              onChange={handleOnBlur}
            />
          </div>
          <div className="lg:flex justify-between p-4">
            <div className="text-left">
              <span className="text-3xl">Name </span>
              <input
                defaultValue={name}
                onChange={handleOnBlur}
                name="name"
                className="border-2 bg-blue-200 border-gray-600 p-2 mb-2 text-3xl font-bold"
              />{" "}
              <br />
              Made:
              <input
                className="text-gray-500 border-2 bg-blue-200 border-gray-600 p-2"
                defaultValue={madeyear}
                name="madeyear"
                onChange={handleOnBlur}
              />
            </div>
            <div className="lg:text-right text-left">
              Rating:{" "}
              <input
                className="text-gray-500 border-2 bg-blue-200 border-gray-600 p-2"
                defaultValue={rating}
                name="rating"
                onChange={handleOnBlur}
              />
              <div>
                People
                <input
                  className="text-gray-500 border-2 bg-blue-200 border-gray-600 p-2"
                  defaultValue={peopleRating}
                  name="peopleRating"
                  onChange={handleOnBlur}
                />{" "}
              </div>{" "}
            </div>
          </div>
          <div className=" grid grid-cols-1 lg:grid-cols-3 space-y-4 lg:space-y-0  border-t-2 border-b-2 border-gray-500 p-4">
            <div className="flex lg:justify-center lg:border-r-2 border-gray-400 items-center gap-4">
              <span className="text-4xl text-red-500"> {speedFont}</span>
              <div>
                <small className="text-blue-900 flex gap-2 font-bold text-md items-center font-medium">
                  <input
                    defaultValue={economy}
                    onChange={handleOnBlur}
                    name="economy"
                    className="border-2 bg-blue-200 border-gray-600 p-1  font-bold"
                  />
                  KMPL
                </small>
              </div>
            </div>
            <div className="flex lg:justify-center lg:border-r-2 border-gray-400 items-center gap-4">
              <span className="text-4xl text-red-500"> {engineFont}</span>
              <div>
                <small className="text-blue-900 flex gap-2 font-bold text-md items-center font-medium">
                  <input
                    defaultValue={fuel}
                    onChange={handleOnBlur}
                    name="fuel"
                    className="border-2 bg-blue-200 border-gray-600 p-1  font-bold"
                  />
                </small>
              </div>
            </div>
            <div className="flex lg:justify-center items-center gap-4">
              <span className="text-4xl text-red-500"> {carFont}</span>
              <div>
                <small className="text-blue-900 flex gap-2 font-bold text-md items-center font-medium">
                  <input
                    defaultValue={mileage}
                    onChange={handleOnBlur}
                    name="mileage"
                    className="border-2 bg-blue-200 border-gray-600 p-1  font-bold"
                  />{" "}
                </small>
              </div>
            </div>
          </div>
          {/* infor mation section  */}
          <div className=" space-y-4">
            <div className="space-y-4 mt-4 text-justify">
              <h2 className="text-left text-3xl font-bold">OverView</h2>

              <textarea
                rows="10"
                cols="40"
                defaultValue={description}
                onChange={handleOnBlur}
                name="description"
                className="border-2 bg-blue-200 border-gray-600 p-1 font-bold"
              ></textarea>
            </div>
            <div className="space-y-4 text-justify">
              <h2 className="text-left text-3xl font-bold">Features</h2>
              <div className="lg:flex gap-4 justify-between text-lg">
              <input
                    defaultValue={features}
                    onChange={handleOnBlur}
                    name='features'
                    className="border-2 bg-blue-200 border-gray-600 p-1  font-bold"
                  />
                {/* <ul className="space-y-3 text-gray-700">
               
                  {features
                    ?.map((list,index) => (
                      <li key={list}>
                        <span className="text-green-600">{checkFont}</span>{" "}
                        <input
                    defaultValue={list}
                    onChange={featureOnChange}
                    name={`list${index}`}
                    className="border-2 bg-blue-200 border-gray-600 p-1  font-bold"
                  />
                        
                      </li>
                    ))
                    .slice(0, 6)}
                </ul>
                <ul className="space-y-3 text-gray-700">
                  {features
                    ?.map((list,index) => (
                      <li key={list}>
                        <span className="text-green-600">{checkFont}</span>{" "}
                        <input
                    defaultValue={list}
                    onChange={featureOnChange}
                    name={`list${index}`}
                    className="border-2 bg-blue-200 border-gray-600 p-1  font-bold"
                  />
                      </li>
                    ))
                    .slice(6, 12)}
                </ul> */}
              </div>
            </div>
          </div>
          {/* comment section  */}

          <div></div>
        </div>
        {/* booking section  */}
        <div className="lg:w-1/4 bg-gray-50 py-4 rounded-lg">
          <div className="text-center ">
            <p className="text-2xl text-white font-bold p-5 flex items-center bg-red-600">
              $
              <input
                    defaultValue={price}
                    onChange={handleOnBlur}
                    name="price"
                    className="border-2 bg-blue-200 border-gray-600 p-1  font-bold"
                  />
            </p>

          </div>
          <table className="w-full text-left rounded-xl border-2 uppercase font-bold ">
            <tbody>
              <tr className="border-2">
                <td className="border-2 font-medium text-indigo-900 p-4">
                  Brand
                </td>
                <td className="border-2 p-4"> <input
                    defaultValue={brand}
                    onChange={handleOnBlur}
                    name="brand"
                    className="border-2 bg-blue-200 border-gray-600 p-1  font-bold"
                  /></td>
              </tr>
              <tr className="border-2">
                <td className="border-2 font-medium text-indigo-900 p-4">
                  Stock Status
                </td>
                <td className="border-2 p-4"> <input
                    defaultValue={status}
                    onChange={handleOnBlur}
                    name="status"
                    className="border-2 bg-blue-200 border-gray-600 p-1  font-bold"
                  /></td>
              </tr>
              <tr className="border-2">
                <td className="border-2 font-medium text-indigo-900 p-4">
                  Build Year
                </td>
                <td className="border-2 p-4"><input
                    defaultValue={madeyear}
                    onChange={handleOnBlur}
                    name="madeyear"
                    className="border-2 bg-blue-200 border-gray-600 p-1  font-bold"
                  /></td>
              </tr>
              <tr className="border-2">
                <td className="border-2 font-medium text-indigo-900 p-4">
                  Mileage
                </td>
                <td className="border-2 p-4"><input
                    defaultValue={mileage}
                    onChange={handleOnBlur}
                    name="mileage"
                    className="border-2 bg-blue-200 border-gray-600 p-1  font-bold"
                  /></td>
              </tr>
              <tr className="border-2">
                <td className="border-2 font-medium text-indigo-900 p-4">
                  Fuel
                </td>
                <td className="border-2 p-4"><input
                    defaultValue={fuel}
                    onChange={handleOnBlur}
                    name="fuel"
                    className="border-2 bg-blue-200 border-gray-600 p-1  font-bold"
                  /></td>
              </tr>
              <tr className="border-2">
                <td className="border-2 font-medium text-indigo-900 p-4">
                  Engine
                </td>
                <td className="border-2 p-4"><input
                    defaultValue={engine}
                    onChange={handleOnBlur}
                    name="engine"
                    className="border-2 bg-blue-200 border-gray-600 p-1  font-bold"
                  /> cc</td>
              </tr>
              <tr className="border-2">
                <td className="border-2 font-medium text-indigo-900 p-4">
                  Transmission
                </td>
                <td className="border-2 p-4"><input
                    defaultValue={transmission}
                    onChange={handleOnBlur}
                    name="transmission"
                    className="border-2 bg-blue-200 border-gray-600 p-1  font-bold"
                  /></td>
              </tr>
              <tr className="border-2">
                <td className="border-2 font-medium text-indigo-900 p-4">
                  Horsepower
                </td>
                <td className="border-2 p-4 flex gap-2 items-center"><input
                    defaultValue={horsepower}
                    onChange={handleOnBlur}
                    name="horsepower"
                    className="border-2 bg-blue-200 border-gray-600 p-1  font-bold"
                  /> hp</td>
              </tr>
              <tr className="border-2">
                <td className="border-2 font-medium text-indigo-900 p-4">
                  Color
                </td>
                <td className="border-2 p-4"><input
                    defaultValue={color}
                    onChange={handleOnBlur}
                    name="color"
                    className="border-2 bg-blue-200 border-gray-600 p-1  font-bold"
                  /></td>
              </tr>
              <tr className="border-2">
                <td className="border-2 font-medium text-indigo-900 p-4">
                  Door
                </td>
                <td className="border-2 p-4"><input
                    defaultValue={door}
                    onChange={handleOnBlur}
                    name="door"
                    className="border-2 bg-blue-200 border-gray-600 p-1  font-bold"
                  /></td>
              </tr>
              <tr className="border-2">
                <td className="border-2 font-medium text-indigo-900 p-4">
                  Equipment
                </td>
                <td className=" border-2 p-4">
                  <ul className=" space-y-2">
                  <input
                    defaultValue={equipment}
                    onChange={handleOnBlur}
                    name='equipment'
                    className="border-2 bg-blue-200 border-gray-600 p-1  font-bold"
                  />
                    {/* {equipment?.map((list,index) => (
                      <li key={list}>
                        
                        <span className="text-green-600">{checkFont} </span>
                       
                        <input
                    defaultValue={list}
                    onChange={equipmentOnChange}
                    name={`equipmentList${index}`}
                    className="border-2 bg-blue-200 border-gray-600 p-1  font-bold"
                  />
                      </li>
                    ))} */}
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
          {/* purchase modal  */}

          <div></div>
        </div>
      </div>
      <button
        onClick={updateProduct}
        className="text-white w-3/4 my-4 bg-blue-600 font-bold py-3 px-5 "
      >
        Update
      </button>
    </div>
  );
};

export default SingleManageProduct;
