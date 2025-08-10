'use client'

import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'

const ContactPage = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        mobile: '',
        service: '',
        company: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus('idle');

        try {
            // Simulate form submission (you can add your actual submission logic here)
            await new Promise(resolve => setTimeout(resolve, 1000));
            
            // Show success message
            setSubmitStatus('success');
            
            // Reset form
            setFormData({
                fullName: '',
                email: '',
                mobile: '',
                service: '',
                company: '',
                message: ''
            });

        } catch (error) {
            console.error('Form submission failed:', error);
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className=' min-h-screen bg-white'>

            <div
                className="absolute bottom-[30%] left-0 w-full h-[100vh] bg-cover bg-center z-0"
                style={{ backgroundImage: "url('/contact-hero-image.png')" }}
            ></div>

            <div className="relative z-10">
                <Navbar />
            </div>

            <div className="relative z-10 flex items-center justify-between px-30 pt-20">
                <div className="max-w-xl">
                    <h1 className="text-2xl font-extrabold text-[#3A2E2B]">
                        Got a theory? Let's test it.
                    </h1>
                    <p className="mt-4 text-lg text-[#3A2E2B]/80 leading-relaxed">
                        Collab ideas, curious queries, or hypotheses about how we can work together — type away, genius.
                    </p>
                </div>

                <div>
                    <Image
                        src={'/contact-header.png'}
                        alt="vector"
                        width={200}
                        height={200}
                        className="object-contain absolute right-10"
                    />
                </div>
            </div>

            <div className="min-h-[50vh] w-[70%] text-black mt-[25%] mx-auto relative z-20">
                
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                    <h1 className="text-xl font-black border-2 border-black text-[#54453E] font-lilita tracking-wider leading-tight">
                        Here's what to expect
                    </h1>
                    <p className="text-[#54453E] font-montserrat font-light max-w-lg mt-2 lg:mt-0">
                        Once your form lands in our inbox, we'll circle back within 24–48 hours with brainpower locked and loaded.
                    </p>
                </div>

                <hr className="border-t border-[#ccc] mb-8" />

                {/* Status Messages - Normal positioning */}
                {submitStatus === 'success' && (
                    <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-md">
                        Thank you! Your message has been submitted successfully. We'll get back to you within 24-48 hours.
                    </div>
                )}
                
                {submitStatus === 'error' && (
                    <div className="mb-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded-md">
                        Oops! Something went wrong. Please try again.
                    </div>
                )}

                <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        placeholder="Full Name*"
                        className="border rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-[#00c2ff]"
                        required
                    />
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="Email Address*"
                        className="border rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-[#00c2ff]"
                        required
                    />
                    <input
                        type="tel"
                        name="mobile"
                        value={formData.mobile}
                        onChange={handleInputChange}
                        placeholder="Mobile Number*"
                        className="border rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-[#00c2ff]"
                        required
                    />
                    <label className="md:col-span-1 flex items-center text-[#3A2E2B]">
                        What do you need help with?*
                    </label>
                    <select
                        name="service"
                        value={formData.service}
                        onChange={handleInputChange}
                        className="border rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-[#00c2ff]"
                        required
                    >
                        <option value="">Select One</option>
                        <option value="SEO">SEO</option>
                        <option value="Paid Marketing">Paid Marketing</option>
                        <option value="Web Development">Web Development</option>
                        <option value="Other">Other</option>
                    </select>
                    <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        placeholder="Company / Brand Name"
                        className="border rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-[#00c2ff]"
                    />
                    <div className="md:col-span-3">
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleInputChange}
                            placeholder="Tell us more about your project or inquiry..."
                            rows={4}
                            className="w-full border rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-[#00c2ff]"
                            required
                        />
                    </div>
                    <div className="md:col-span-3 flex justify-center mt-4">
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="mt-4 px-6 py-2 bg-[#00c2ff] text-white font-semibold rounded-lg hover:bg-[#00aadd] disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {isSubmitting ? 'Submitting...' : 'Submit'}
                        </button>
                    </div>
                </form>
            </div>

            <Footer />
        </div>
    )
}

export default ContactPage