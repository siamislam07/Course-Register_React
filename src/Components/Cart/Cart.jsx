/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */


const Cart = ({ selectedCourse, }) => {
    console.log(selectedCourse);
    return (
        <div className="mt-5 h-auto bg-white rounded-xl p-3 pl-8">
            <h1 className="text-3xl text-[#2F80ED;] mb-5 font-bold">Credit Hour Remaining 20 hr</h1>
            <hr className="w-80 mx-auto mb-5" />
            <h3 className="text-2xl text-start font-bold">Course Name :</h3>
            <div className="mt-5 space-y-2">
                {
                    selectedCourse.map(course => (

                        <li key={course.id} className="list-decimal text-start text-xl">{course.title}</li>

                    ))
                }
            </div>
            <hr className="w-80 mx-auto mb-5 mt-5" />
            <p className="text-start mb-5 text-xl">Total Credit Hour : 13</p>
            <hr className="w-80 mx-auto mb-5" />
            <p className="text-start mb-5 text-xl">Total Price: 2222222 USD</p>

        </div>
    );
};

export default Cart;