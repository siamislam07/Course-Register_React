/* eslint-disable react/jsx-no-undef */
import { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import Swal from "sweetalert2";
import { FiDollarSign } from 'react-icons/fi';
import { GoBook } from 'react-icons/go'

const Card = () => {
    const [allCourse, setAllCourse] = useState([])
    const [selectedCourse, setSelectedCourse] = useState([])
    const [totalCost, setTotalCost] = useState(0)
    const [totalCredit, setTotalCredit] = useState(0)
    const [remaining, setRemaining] = useState(20)

    useEffect(() => {
        fetch("./data.json")
            .then(res => res.json())
            .then(data => setAllCourse(data));
    }, [])

    const handleSelectCourse = (course) => {
        const isExist = selectedCourse.find(item => item.id == course.id)
        let count = course.price
        let credit = course.credit

        if (isExist) {
            Swal.fire({
                icon: 'error',
                title: 'Already Selected',
                text: 'Select AnotherOne',
                
            })
        }
        else {
            selectedCourse.forEach((item) => {
                count += item.price
                credit += item.credit
            })
            
            if (credit > 20) {
                return Swal.fire({
                    icon: 'warning',
                    title: 'Insufficient Credit',
                    text: 'Buy Credit',
                    
                })
            }
        
            setTotalCost(count)

            setTotalCredit(credit)

            const remaining = 20 - credit

            setRemaining(remaining)
            setSelectedCourse([...selectedCourse, course])
        }

    }


    return (
        <div className="container">
            <div className="card-cart-container flex">
                <div className=" flex flex-col md:flex-row ">
                <div className="card-container max-w-[1048px] mx-auto flex flex-wrap gap-5 mb-5 justify-center items-center flex-col md:flex-row">
                    {
                        allCourse.map(course => (
                            <div key={course.id} className="card w-[300px] h-[440px] border rounded-lg bg-white">
                                <div className="card-img">
                                    <img src={course.img} className="mt-5 mx-auto" alt="" />

                                </div>
                                <div className="items-center ml-2">
                                <h2 className="text-[19px] mt-4 font-semibold text-start">{course.title}</h2>
                                <p className="mt-3 text-left  ">{course.description}</p>
                                </div>
                                <div className="flex justify-evenly mt-4 mb-5">
                                    <div className="flex items-center">
                                        <span className="text-xl"><FiDollarSign></FiDollarSign></span>
                                        <span className="font-medium text-lg">Price: {course.price}</span>
                                    </div>
                                    <div className="flex items-center">
                                        <GoBook className="text-xl"></GoBook>
                                        <p className="font-medium text-lg"> Credit: {course.credit} hr</p>
                                    </div>
                                </div>
                                <button onClick={() => handleSelectCourse(course)} className="hover:bg-blue-600">Select</button>

                            </div>
                        ))
                    }
                </div>

                <div className="cart">
                    <Cart selectedCourse={selectedCourse} totalCost={totalCost} totalCredit={totalCredit} remaining={remaining}></Cart>
                </div>
                </div>
            </div>
        </div>
    );
};

export default Card;