import React from 'react';



const ContactUs = () => {
    return (
        <section className='solutions  h-auto my-4  bg-orange-400'>
            <h1 className='text-3xl leading-6 text-black text-center py-6 uppercase'>Contact us</h1>

            <form action="#" method="post" className='mx-auto mt-4 max-w-xl sm:mt-10'>
                <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">

                    <div>
                        <label htmlFor="first-name" className="labelText">First name</label>
                        <div className="mt-2.5">
                            <input type="text" name="first-name" id="first-name" autoComplete="first-name" className="inputText" />
                        </div>
                    </div>

                    <div>
                        <label htmlFor="last-name" className="labelText">Last name</label>
                        <div className="mt-2.5">
                            <input type="text" name="last-name" id="last-name" autoComplete="family-name" className="inputText" />
                        </div>
                    </div>

                    <div className="sm:col-span-2">
                        <label htmlFor="company" className="labelText">Company</label>
                        <div className="mt-2.5">
                            <input type="text" name="company" id="company" autoComplete="organization" className="inputText" />
                        </div>
                    </div>
                    <div className="sm:col-span-2">
                        <label htmlFor="email" className="labelText">Email</label>
                        <div className="mt-2.5">
                            <input type="email" name="email" id="email" autoComplete="email" className="inputText" />
                        </div>
                    </div>

                    <div className="sm:col-span-2">
                        <label htmlFor="message" className="labelText">Message</label>
                        <div className="mt-2.5">
                            <textarea name="message" id="message" rows={4} className="inputText" defaultValue={""} />
                        </div>
                    </div>


                    <div className="my-10">
                        <button type="submit" className="block w-2/4 mx-auto md:w-full  md:mx-0 rounded-md bg-gray-900 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Let's talk</button>
                    </div>


                </div>


            </form>

        </section >
    );
}

export default ContactUs;