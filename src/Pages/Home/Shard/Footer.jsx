import React from 'react';
import Container from '../../../Components/Container';
import Logo from '../../../Components/Logo/Logo';
import { FaFacebook, FaFacebookMessenger, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from 'react-icons/fa6';
import bkash from '../../../assets/pay-icon/bkashr.jpg'
import paypal from '../../../assets/pay-icon/paypal.webp'
import nagod from '../../../assets/pay-icon/nagod.png'
import QRcode from '../../../assets/pay-icon/QRcode.svg'
import app from '../../../assets/pay-icon/app.png'

const Footer = () => {
    return (
        
       <Container>       
        <footer className="footer py-0  bg-base-300 text-base-content grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
        <div className='col-span-2 md:col-span-3 p-4'>
            <Logo></Logo>
            <h2>
                E-TuitionBD is a platform where parents, students and tutors can easily connect with each other. We provide qualified Home/Online tutors to help your child with studies and helping them perform better in exams. We are a group of 2,50,000+ Tutors and 30,000+ satisfied parents/students in Dhaka, Chattagram, Rajshahi, Sylhet, Khulna, Barishal, Rangpur, Mymensingh cities for different academic and professional subjects.
            </h2>
            <div className='flex gap-4 p-2 text-2xl mx-auto'>
                <a className='hover:text-3xl text-blue-600' href="https://www.facebook.com/"><FaFacebook /></a>
                <a className='hover:text-3xl text-blue-600' href="https://www.facebook.com/"><FaFacebookMessenger /></a>
                <a className='hover:text-3xl text-[#e96e1c]' href="https://www.facebook.com/"><FaInstagram /></a>
                <a className='hover:text-3xl text-' href="https://www.facebook.com/"><FaXTwitter /></a>
                <a className='hover:text-3xl text-red-600' href="https://www.facebook.com/"><FaYoutube /></a>
                <a className='hover:border text-blue-600' href="https://www.facebook.com/"><FaLinkedin /></a>
            </div>
        </div>
        <div className='col-span-1 py-4 mx-auto'>
           
            <nav className='flex flex-col  items-center md:items-start pl-6 lg:p-0'>
                <h6 className="footer-title px-1 rounded-sm">Resources</h6>
                <a className="link link-hover">About us</a> 
                <a className="link link-hover">Our Team</a>
                <a className="link link-hover">Products</a>
                <a className="link link-hover">Contact</a>
                <a className="link link-hover text-blue-600">Sheba Uddokta</a>
            </nav>
        </div>
        <div className='col-span-1 p-4 md:py-4'>    
            <nav className='flex flex-col items-center md:items-start'>
                <h6 className="footer-title px-1 rounded-sm">Company</h6>
                <a className="link link-hover">Privacy</a>
                <a className="link link-hover">Help</a>
                <a className="link link-hover">Tems</a>
                <a className="link link-hover">FAQ</a>
                <a className="link link-hover text-blue-600">Pay NOW</a>               
                <div className='flex gap-4'>
                    <img className='h-10 w-10 rounded-full' src={paypal} alt="bkash" />
                    <img className='h-8 w-8 rounded-full' src={bkash} alt="bkash" />
                    <img className='h-8 w-8 not-[]:rounded-full' src={nagod} alt="bkash" />
                </div>
            </nav>         
  
        </div>
        <div className='col-span-2 md:col-span-1 py-4 mx-auto grid items-center justify-center'> 
            <nav>
                <h6 className="footer-title px-1 rounded-sm text-center">Download Our Mobile App</h6>
                <img className='h-37 w-40 rounded-2xl mx-auto' src={QRcode} alt="bkash" />                
                <h2 className='text-center'>Our Android App is available right now. Scan the QR Code or Click the Button to Download</h2>
                <img className='h-20 w-60 rounded-2xl p-2 mx-auto' src={app} alt="bkash" />
            </nav>
            
        </div> 
        </footer>
        <div className='bg-base-300 text-center p-4'>
            <p className=''>Copyright © {new Date().getFullYear()} - All right reserved by E-TuitionBD</p>
             <h2>Developed by —<span className='text-blue-600'><a href="https://github.com/arju-Hasan">Arju Hasan</a></span></h2>

        </div>
        
        
       </Container>
    );
};

export default Footer;