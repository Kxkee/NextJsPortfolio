import {useState} from "react";
import axios from "axios";
import {toast, ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export default function Contact() {

    const [name, setName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [message, setMessage] = useState<string>("");

    const handleSubmit = async(e: any) => {
        e.preventDefault();
        if(name && email && message) {
            try {
                const response = await axios.post("https://eo3uxmpgx4u9mcd.m.pipedream.net", {
                    name,
                    email,
                    message,
                }, {headers: {
                        'Content-Type': 'application/json'
                    }})
                toast.success('Successfully sent!', {
                    position: "bottom-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                });
                setName("");
                setMessage("");
                setEmail("");
            }catch(err) {
                toast.error('Oops there was a problem.. maybe try to contact me on Linkedin.', {
                    position: "bottom-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                });
                console.log(err);
            }
        } else {
            toast.error('Please complete all fields before submitting the form.', {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
        }
    }

    return (
        <section className="min-h-[700px] w-full md:w-[800px] flex justify-center x-[10px] md:mx-[100px] lg:mx-[200px] py-10 md:p-10" id="Contact">
            <div className="w-full">
                <div className="h-[200px] flex items-end pb-10">
                    <h2 className="name font-bold section-title text-third-light-purple-light-purple">
                        <span className="mono number-title font-extralight text-elem-purple">04. </span>
                        Contact Me
                    </h2>
                </div>
                <div className="h-[calc(100%-200px]">
                    <div className='w-full space-y-7 text-1xl text-third-light-purple flex justify-center'>
                        <div className="w-full md:w-[500px] h-full">
                            <form className="space-y-10 ">
                                <div className="flex flex-col gap-3">
                                    <label className="mono text-[18px] ">Full Name</label>
                                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="bg-bg-light-purple p-4 text-[16px] rounded shadow-lg shadow-black outline-none hover:bg-[#262230] duration-300 focus:bg-[#262230]" />
                                </div>
                                <div className="flex flex-col gap-3">
                                    <label className="mono text-[18px] ">Email</label>
                                    <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} className="bg-bg-light-purple p-4 text-[16px] rounded shadow-lg shadow-black outline-none hover:bg-[#262230] duration-300 focus:bg-[#262230]" />
                                </div>
                                <div className="flex flex-col gap-3">
                                    <label className="mono text-[18px] ">Message</label>
                                    <textarea value={message} onChange={(e) => setMessage(e.target.value)} className="bg-bg-light-purple p-4 text-[16px] rounded shadow-lg shadow-black outline-none resize-none h-[250px] hover:bg-[#262230] duration-300 focus:bg-[#262230]"></textarea>
                                </div>
                                <button
                                    className="w-full p-5 name text-[18px] font-bold bg-featured-project-hover rounded-lg duration-150 hover:bg-featured-project-SM active:shadow-lg" onClick={handleSubmit}
                                >
                                    Button
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer
                position="bottom-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored"
            />
        </section>
    )
}