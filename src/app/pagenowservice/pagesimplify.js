import React from 'react'

const FeaturesSection = () => {
    return (
        <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                {/* Header */}
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Our modern features</h2>
                <p className="text-gray-500 mb-12">
                    Using technology to make finance simpler, smarter and more rewarding.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Left Features */}
                    <div className="flex flex-col justify-center items-center space-y-12 ">
                        <div className="flex items-center space-x-4">
                            <div class="bg-pink-50 rounded-full flex justify-center items-center w-20 h-20 mx-auto cursor-pointer transition-all duration-500 group-hover:bg-pink-600">
                                <svg class="stroke-pink-600 transition-all duration-500 group-hover:stroke-white" width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M2.5 7.5C2.5 4.73858 4.73858 2.5 7.5 2.5C10.2614 2.5 12.5 4.73858 12.5 7.5C12.5 10.2614 10.2614 12.5 7.5 12.5C4.73858 12.5 2.5 10.2614 2.5 7.5Z"
                                        stroke="" stroke-width="2"></path>
                                    <path
                                        d="M2.5 22.5C2.5 20.143 2.5 18.9645 3.23223 18.2322C3.96447 17.5 5.14298 17.5 7.5 17.5C9.85702 17.5 11.0355 17.5 11.7678 18.2322C12.5 18.9645 12.5 20.143 12.5 22.5C12.5 24.857 12.5 26.0355 11.7678 26.7678C11.0355 27.5 9.85702 27.5 7.5 27.5C5.14298 27.5 3.96447 27.5 3.23223 26.7678C2.5 26.0355 2.5 24.857 2.5 22.5Z"
                                        stroke="" stroke-width="2"></path>
                                    <path
                                        d="M17.5 7.5C17.5 5.14298 17.5 3.96447 18.2322 3.23223C18.9645 2.5 20.143 2.5 22.5 2.5C24.857 2.5 26.0355 2.5 26.7678 3.23223C27.5 3.96447 27.5 5.14298 27.5 7.5C27.5 9.85702 27.5 11.0355 26.7678 11.7678C26.0355 12.5 24.857 12.5 22.5 12.5C20.143 12.5 18.9645 12.5 18.2322 11.7678C17.5 11.0355 17.5 9.85702 17.5 7.5Z"
                                        stroke="" stroke-width="2"></path>
                                    <path
                                        d="M17.5 22.5C17.5 19.7386 19.7386 17.5 22.5 17.5C25.2614 17.5 27.5 19.7386 27.5 22.5C27.5 25.2614 25.2614 27.5 22.5 27.5C19.7386 27.5 17.5 25.2614 17.5 22.5Z"
                                        stroke="" stroke-width="2"></path>
                                </svg>
                            </div>
                            <div>
                                <h4 className="text-lg font-semibold text-gray-900">Result</h4>
                                <p className="text-gray-500 text-sm">
                                    Experience the value of our platform's performance & results.
                                </p>
                            </div>
                        </div>
                        <div className="flex items-center space-x-4">
                            <div class="bg-pink-50 rounded-full flex justify-center items-center w-20 h-20 mx-auto cursor-pointer transition-all duration-500 group-hover:bg-pink-600">
                                <svg class="stroke-pink-600 transition-all duration-500 group-hover:stroke-white" width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M2.5 7.5C2.5 4.73858 4.73858 2.5 7.5 2.5C10.2614 2.5 12.5 4.73858 12.5 7.5C12.5 10.2614 10.2614 12.5 7.5 12.5C4.73858 12.5 2.5 10.2614 2.5 7.5Z"
                                        stroke="" stroke-width="2"></path>
                                    <path
                                        d="M2.5 22.5C2.5 20.143 2.5 18.9645 3.23223 18.2322C3.96447 17.5 5.14298 17.5 7.5 17.5C9.85702 17.5 11.0355 17.5 11.7678 18.2322C12.5 18.9645 12.5 20.143 12.5 22.5C12.5 24.857 12.5 26.0355 11.7678 26.7678C11.0355 27.5 9.85702 27.5 7.5 27.5C5.14298 27.5 3.96447 27.5 3.23223 26.7678C2.5 26.0355 2.5 24.857 2.5 22.5Z"
                                        stroke="" stroke-width="2"></path>
                                    <path
                                        d="M17.5 7.5C17.5 5.14298 17.5 3.96447 18.2322 3.23223C18.9645 2.5 20.143 2.5 22.5 2.5C24.857 2.5 26.0355 2.5 26.7678 3.23223C27.5 3.96447 27.5 5.14298 27.5 7.5C27.5 9.85702 27.5 11.0355 26.7678 11.7678C26.0355 12.5 24.857 12.5 22.5 12.5C20.143 12.5 18.9645 12.5 18.2322 11.7678C17.5 11.0355 17.5 9.85702 17.5 7.5Z"
                                        stroke="" stroke-width="2"></path>
                                    <path
                                        d="M17.5 22.5C17.5 19.7386 19.7386 17.5 22.5 17.5C25.2614 17.5 27.5 19.7386 27.5 22.5C27.5 25.2614 25.2614 27.5 22.5 27.5C19.7386 27.5 17.5 25.2614 17.5 22.5Z"
                                        stroke="" stroke-width="2"></path>
                                </svg>
                            </div>
                            <div>
                                <h4 className="text-lg font-semibold text-gray-900">Event</h4>
                                <p className="text-gray-500 text-sm">
                                    Organized to provide you with the resources & connections you need.
                                </p>
                            </div>
                        </div>
                        <div className="flex items-center space-x-4">
                            <div class="bg-pink-50 rounded-full flex justify-center items-center w-20 h-20 mx-auto cursor-pointer transition-all duration-500 group-hover:bg-pink-600">
                                <svg class="stroke-pink-600 transition-all duration-500 group-hover:stroke-white" width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M2.5 7.5C2.5 4.73858 4.73858 2.5 7.5 2.5C10.2614 2.5 12.5 4.73858 12.5 7.5C12.5 10.2614 10.2614 12.5 7.5 12.5C4.73858 12.5 2.5 10.2614 2.5 7.5Z"
                                        stroke="" stroke-width="2"></path>
                                    <path
                                        d="M2.5 22.5C2.5 20.143 2.5 18.9645 3.23223 18.2322C3.96447 17.5 5.14298 17.5 7.5 17.5C9.85702 17.5 11.0355 17.5 11.7678 18.2322C12.5 18.9645 12.5 20.143 12.5 22.5C12.5 24.857 12.5 26.0355 11.7678 26.7678C11.0355 27.5 9.85702 27.5 7.5 27.5C5.14298 27.5 3.96447 27.5 3.23223 26.7678C2.5 26.0355 2.5 24.857 2.5 22.5Z"
                                        stroke="" stroke-width="2"></path>
                                    <path
                                        d="M17.5 7.5C17.5 5.14298 17.5 3.96447 18.2322 3.23223C18.9645 2.5 20.143 2.5 22.5 2.5C24.857 2.5 26.0355 2.5 26.7678 3.23223C27.5 3.96447 27.5 5.14298 27.5 7.5C27.5 9.85702 27.5 11.0355 26.7678 11.7678C26.0355 12.5 24.857 12.5 22.5 12.5C20.143 12.5 18.9645 12.5 18.2322 11.7678C17.5 11.0355 17.5 9.85702 17.5 7.5Z"
                                        stroke="" stroke-width="2"></path>
                                    <path
                                        d="M17.5 22.5C17.5 19.7386 19.7386 17.5 22.5 17.5C25.2614 17.5 27.5 19.7386 27.5 22.5C27.5 25.2614 25.2614 27.5 22.5 27.5C19.7386 27.5 17.5 25.2614 17.5 22.5Z"
                                        stroke="" stroke-width="2"></path>
                                </svg>
                            </div>
                            <div>
                                <h4 className="text-lg font-semibold text-gray-900">App Integrations</h4>
                                <p className="text-gray-500 text-sm">
                                    Bring all your tools & data together & join with other apps.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Mobile Image */}
                    <div className="flex justify-center items-center mx-2">
                        <img
                            src="https://www.karobarapp.com/_nuxt/img/1.bc374fb.png"
                            alt="Mobile Dashboard"
                            className="rounded-xl shadow-md w-[250px]"
                        />
                    </div>

                    {/* Right Features */}
                    <div className="flex flex-col items-center justify-center space-y-12">
                        <div className="flex items-center space-x-4">
                            <div class="bg-pink-50 rounded-full flex justify-center items-center w-20 h-20 mx-auto cursor-pointer transition-all duration-500 group-hover:bg-pink-600">
                                <svg class="stroke-pink-600 transition-all duration-500 group-hover:stroke-white" width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M2.5 7.5C2.5 4.73858 4.73858 2.5 7.5 2.5C10.2614 2.5 12.5 4.73858 12.5 7.5C12.5 10.2614 10.2614 12.5 7.5 12.5C4.73858 12.5 2.5 10.2614 2.5 7.5Z"
                                        stroke="" stroke-width="2"></path>
                                    <path
                                        d="M2.5 22.5C2.5 20.143 2.5 18.9645 3.23223 18.2322C3.96447 17.5 5.14298 17.5 7.5 17.5C9.85702 17.5 11.0355 17.5 11.7678 18.2322C12.5 18.9645 12.5 20.143 12.5 22.5C12.5 24.857 12.5 26.0355 11.7678 26.7678C11.0355 27.5 9.85702 27.5 7.5 27.5C5.14298 27.5 3.96447 27.5 3.23223 26.7678C2.5 26.0355 2.5 24.857 2.5 22.5Z"
                                        stroke="" stroke-width="2"></path>
                                    <path
                                        d="M17.5 7.5C17.5 5.14298 17.5 3.96447 18.2322 3.23223C18.9645 2.5 20.143 2.5 22.5 2.5C24.857 2.5 26.0355 2.5 26.7678 3.23223C27.5 3.96447 27.5 5.14298 27.5 7.5C27.5 9.85702 27.5 11.0355 26.7678 11.7678C26.0355 12.5 24.857 12.5 22.5 12.5C20.143 12.5 18.9645 12.5 18.2322 11.7678C17.5 11.0355 17.5 9.85702 17.5 7.5Z"
                                        stroke="" stroke-width="2"></path>
                                    <path
                                        d="M17.5 22.5C17.5 19.7386 19.7386 17.5 22.5 17.5C25.2614 17.5 27.5 19.7386 27.5 22.5C27.5 25.2614 25.2614 27.5 22.5 27.5C19.7386 27.5 17.5 25.2614 17.5 22.5Z"
                                        stroke="" stroke-width="2"></path>
                                </svg>
                            </div>
                            <div>
                                <h4 className="text-lg font-semibold text-gray-900">Special Guide</h4>
                                <p className="text-gray-500 text-sm">
                                    One guide for all our features to get more from our platform.
                                </p>
                            </div>
                        </div>
                        <div className="flex items-center space-x-4">
                            <div class="bg-pink-50 rounded-full flex justify-center items-center w-20 h-20 mx-auto cursor-pointer transition-all duration-500 group-hover:bg-pink-600">
                                <svg class="stroke-pink-600 transition-all duration-500 group-hover:stroke-white" width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M2.5 7.5C2.5 4.73858 4.73858 2.5 7.5 2.5C10.2614 2.5 12.5 4.73858 12.5 7.5C12.5 10.2614 10.2614 12.5 7.5 12.5C4.73858 12.5 2.5 10.2614 2.5 7.5Z"
                                        stroke="" stroke-width="2"></path>
                                    <path
                                        d="M2.5 22.5C2.5 20.143 2.5 18.9645 3.23223 18.2322C3.96447 17.5 5.14298 17.5 7.5 17.5C9.85702 17.5 11.0355 17.5 11.7678 18.2322C12.5 18.9645 12.5 20.143 12.5 22.5C12.5 24.857 12.5 26.0355 11.7678 26.7678C11.0355 27.5 9.85702 27.5 7.5 27.5C5.14298 27.5 3.96447 27.5 3.23223 26.7678C2.5 26.0355 2.5 24.857 2.5 22.5Z"
                                        stroke="" stroke-width="2"></path>
                                    <path
                                        d="M17.5 7.5C17.5 5.14298 17.5 3.96447 18.2322 3.23223C18.9645 2.5 20.143 2.5 22.5 2.5C24.857 2.5 26.0355 2.5 26.7678 3.23223C27.5 3.96447 27.5 5.14298 27.5 7.5C27.5 9.85702 27.5 11.0355 26.7678 11.7678C26.0355 12.5 24.857 12.5 22.5 12.5C20.143 12.5 18.9645 12.5 18.2322 11.7678C17.5 11.0355 17.5 9.85702 17.5 7.5Z"
                                        stroke="" stroke-width="2"></path>
                                    <path
                                        d="M17.5 22.5C17.5 19.7386 19.7386 17.5 22.5 17.5C25.2614 17.5 27.5 19.7386 27.5 22.5C27.5 25.2614 25.2614 27.5 22.5 27.5C19.7386 27.5 17.5 25.2614 17.5 22.5Z"
                                        stroke="" stroke-width="2"></path>
                                </svg>
                            </div>
                            <div>
                                <h4 className="text-lg font-semibold text-gray-900">Data Reporting</h4>
                                <p className="text-gray-500 text-sm">
                                    Get real-time insight into progress & allow teams to track their work.
                                </p>
                            </div>
                        </div>
                        <div className="flex items-center space-x-4">
                            <div class="bg-pink-50 rounded-full flex justify-center items-center w-20 h-20 mx-auto cursor-pointer transition-all duration-500 group-hover:bg-pink-600">
                                <svg class="stroke-pink-600 transition-all duration-500 group-hover:stroke-white" width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M2.5 7.5C2.5 4.73858 4.73858 2.5 7.5 2.5C10.2614 2.5 12.5 4.73858 12.5 7.5C12.5 10.2614 10.2614 12.5 7.5 12.5C4.73858 12.5 2.5 10.2614 2.5 7.5Z"
                                        stroke="" stroke-width="2"></path>
                                    <path
                                        d="M2.5 22.5C2.5 20.143 2.5 18.9645 3.23223 18.2322C3.96447 17.5 5.14298 17.5 7.5 17.5C9.85702 17.5 11.0355 17.5 11.7678 18.2322C12.5 18.9645 12.5 20.143 12.5 22.5C12.5 24.857 12.5 26.0355 11.7678 26.7678C11.0355 27.5 9.85702 27.5 7.5 27.5C5.14298 27.5 3.96447 27.5 3.23223 26.7678C2.5 26.0355 2.5 24.857 2.5 22.5Z"
                                        stroke="" stroke-width="2"></path>
                                    <path
                                        d="M17.5 7.5C17.5 5.14298 17.5 3.96447 18.2322 3.23223C18.9645 2.5 20.143 2.5 22.5 2.5C24.857 2.5 26.0355 2.5 26.7678 3.23223C27.5 3.96447 27.5 5.14298 27.5 7.5C27.5 9.85702 27.5 11.0355 26.7678 11.7678C26.0355 12.5 24.857 12.5 22.5 12.5C20.143 12.5 18.9645 12.5 18.2322 11.7678C17.5 11.0355 17.5 9.85702 17.5 7.5Z"
                                        stroke="" stroke-width="2"></path>
                                    <path
                                        d="M17.5 22.5C17.5 19.7386 19.7386 17.5 22.5 17.5C25.2614 17.5 27.5 19.7386 27.5 22.5C27.5 25.2614 25.2614 27.5 22.5 27.5C19.7386 27.5 17.5 25.2614 17.5 22.5Z"
                                        stroke="" stroke-width="2"></path>
                                </svg>
                            </div>
                            <div>
                                <h4 className="text-lg font-semibold text-gray-900">Presentation</h4>
                                <p className="text-gray-500 text-sm">
                                    Plan and structure work how you want. Quickly organizing tasks.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FeaturesSection;
