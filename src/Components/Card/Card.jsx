/* eslint-disable react/jsx-no-undef */
import { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import Swal from "sweetalert2";

const Card = () => {
    const [allCourse, setAllCourse] = useState([])
    const [selectedCourse, setSelectedCourse] = useState([])


    useEffect(() => {
        fetch("./data.json")
            .then(res => res.json())
            .then(data => setAllCourse(data));
    }, [])

    const handleSelectCourse = (course) => {
        const isExist = selectedCourse.find(item => item.id == course.id)
        if (isExist) {
            Swal.fire({
                icon: 'error',
                title: 'Already Selected',
                text: 'Select AnotherOne',
                // footer: '<a href="">Why do I have this issue?</a>'
            })
        } else {
            setSelectedCourse([...selectedCourse, course])

        }

    }


    return (
        <div className="container">
            <div className="card-cart-container flex">
                <div className="card-container w-[1048px] flex  flex-wrap gap-5 mb-5 ">
                    {
                        allCourse.map(course => (
                            <div key={course.id} className="card w-[300px] h-[440px] border rounded-lg bg-white">
                                <div className="card-img">
                                    <img src={course.img} className="mt-5 mx-auto" alt="" />

                                </div>
                                <h2 className="text-[19px] mt-4 font-semibold">{course.title}</h2>
                                <p className="mt-3 text-left ml-2 pl-4 pr-4 ;">{course.description}</p>
                                <div className="flex justify-evenly mt-4 mb-5">
                                    <p className="font-medium text-lg">Price: {course.price}</p>
                                    <p className="font-medium text-lg">Credit: {course.credit} hr</p>
                                </div>
                                <button onClick={() => handleSelectCourse(course)} className="hover:bg-blue-600">Select</button>

                            </div>
                        ))
                    }
                </div>


                <div className="cart">
                    <Cart selectedCourse={selectedCourse}></Cart>
                </div>
            </div>
        </div>
    );
};

export default Card;