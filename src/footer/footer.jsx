import React from 'react';
import { BsFacebook, BsInstagram, BsTwitter } from 'react-icons/bs'

const Footer = () => {

    const social = [<BsFacebook size={20} />, <BsInstagram size={20} />, <BsTwitter size={20} />]

    const services = ['Plumbing', 'Electricity work', 'Cleaning', 'Painting'];



    return (
        <footer className='bg-neutral-800  md:grid md:grid-cols-4 text-white'>
            <div className='block min-h-full md:col-span-2'>
                <iframe src="https://maps.google.com/maps?q=Alexandria,+Alexandria+manshia&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=&amp;output=embed" title='companyMap' className='min-h-full w-full' ></iframe>
            </div>


            <div className='md:col-span-1 py-12 px-8'>
                <div>
                    <p className='uppercase'>
                        <span className="text-lg py-4">
                            Call us
                        </span>
                        <br />
                        <span class="text-xl">
                            0123456789
                        </span>
                    </p>
                </div>
                <ul className="mt-8 space-y-1 text-sm">
                    <li>Monday to Friday: 9am - 5pm</li>
                    <li>Saturday & sunday</li>
                </ul>

                <ul className='flex gap-6 mt-6'>
                    {social.map((item) => (
                        <li className='cursor-pointer hover:text-orange-400'>
                            {item}
                        </li>
                    ))}
                </ul>

            </div>


            <div className='md:col-span-1 py-12 px-8 md:py-12'>
                <div>
                    <h2 className='text-lg'>Our Services</h2>
                    <ul className='flex flex-col justify-between pt-4'>
                        {services.map((el) => (
                            <li className='py-1 cursor-pointer hover:text-orange-400'>
                                <h5>
                                    {el}
                                </h5>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            <div className="border-t p-4   border-gray-100 md:col-start-1 md:col-end-5 ">
                <div className="flex items-center justify-between">
                    <ul className="flex flex-wrap gap-2 text-xs">
                        <li>
                            Terms & Conditions
                        </li>
                        <li>
                            Privacy Policy
                        </li>
                        <li>
                            Cookies
                        </li>
                    </ul>
                    <p className="sm:mt-0">
                        &copy; 2022. Company Name. All rights reserved.
                    </p>
                </div>
            </div>

        </footer >
    );
}

export default Footer;