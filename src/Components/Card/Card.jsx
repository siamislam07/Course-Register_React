/* eslint-disable react/jsx-no-undef */
import Cart from "../Cart/Cart";


const Card = () => {
    return (



        

        <div className="container">
            <div className="card-container">
                <div className="w-[300px] h-[440px] border rounded-lg bg-white">
                    <div className="card-img">
                        <img src="https://i.ibb.co/S6Vys9G/Rectangle-2-2.png" className="mt-5 mx-auto" alt="" />

                    </div>
                    <h2 className="text-[19px] mt-4 font-semibold">Introduction to C Programming</h2>
                    <p className="mt-3 text-left ml-2 ;">Explore the basics of C programming, learn syntax, data types,and more.Start your journey into the world of programming.</p>
                    <div className="flex justify-evenly mt-4 mb-5">
                        <p className="font-medium text-lg">Price: 1500</p>
                        <p className="font-medium text-lg">Credit: 1 hr</p>
                    </div>
                    <button >Select</button>

                </div>

                <Cart></Cart>
            </div>
        </div>
    );
};

export default Card;