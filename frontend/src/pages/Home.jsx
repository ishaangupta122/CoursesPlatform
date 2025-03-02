import { Link } from "react-router-dom";
import TypewriterEffect from "../components/TypewriterEffect";

const Home = () => {
  return (
    <>
      <div className="">
        <section className="px-2 py-32 bg-white md:px-0">
          <div className="container items-center max-w-6xl px-8 mx-auto xl:px-5">
            <div className="flex flex-wrap items-center sm:-mx-3">
              <div className="w-full md:w-1/2 md:px-3">
                <div className="w-full pb-6 space-y-6 sm:max-w-md lg:max-w-lg md:space-y-4 lg:space-y-8 xl:space-y-9 sm:pr-5 lg:pr-0 md:pb-0">
                  <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-4xl lg:text-5xl xl:text-6xl">
                    <span className="block xl:inline">
                      Transform Ideas into Code. {""}
                    </span>
                    <span className="block text-indigo-600 xl:inline">
                      <TypewriterEffect text="Start Learning Now" />
                    </span>
                  </h1>
                  <p className="mx-auto text-base text-gray-500 sm:max-w-md lg:text-xl md:max-w-3xl">
                    Transform your passion into practical coding expertise.
                  </p>
                  <div className="relative flex flex-col sm:flex-row sm:space-x-4">
                    <Link
                      to="/courses"
                      className="flex items-center w-full px-6 py-3 mb-3 text-lg text-white bg-indigo-600 rounded-md sm:mb-0 hover:bg-indigo-700 sm:w-auto"
                    >
                      Checkout our courses
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-4 h-4 mt-[2px] ml-3 "
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <line x1="1" y1="12" x2="19" y2="12"></line>
                        <polyline points="12 5 19 12 12 19"></polyline>
                      </svg>
                    </Link>
                    <Link
                      to="/hiringPartners"
                      className="flex items-center px-6 py-3 text-gray-600 bg-gray-200 rounded-md hover:bg-gray-300 hover:text-gray-600"
                    >
                      Hiring Partners
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-4 h-4 mt-[2px] ml-3"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <line x1="1" y1="12" x2="19" y2="12"></line>
                        <polyline points="12 5 19 12 12 19"></polyline>
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/2">
                <div className="w-full h-auto overflow-hidden rounded-md shadow-xl sm:rounded-xl">
                  <img src="https://images.unsplash.com/photo-1498049860654-af1a5c566876?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full bg-white pt-7 pb-7 md:pt-20 md:pb-24">
          <div className="box-border flex flex-col items-center content-center px-8 mx-auto leading-6 text-black border-0 border-gray-300 border-solid md:flex-row max-w-7xl lg:px-16">
            <div className="box-border relative w-full max-w-md px-4 mt-5 mb-4 -ml-5 text-center bg-no-repeat bg-contain border-solid md:ml-0 md:mt-0 md:max-w-none lg:mb-0 md:w-1/2 xl:pl-10">
              <img
                src="https://cdn.devdojo.com/images/december2020/productivity.png"
                className="p-2 pl-6 pr-5 xl:pl-16 xl:pr-20"
              />
            </div>

            <div className="box-border order-first w-full text-black border-solid md:w-1/2 md:pl-10 md:order-none">
              <h2 className="m-0 text-xl font-semibold leading-tight border-0 border-gray-300 lg:text-3xl md:text-2xl">
                Boost Productivity
              </h2>
              <p className="pt-4 pb-8 m-0 leading-7 text-gray-700 border-0 border-gray-300 sm:pr-12 xl:pr-32 lg:text-lg">
                Build an atmosphere that creates productivity in your
                organization and your company culture.
              </p>
              <ul className="p-0 m-0 leading-6 border-0 border-gray-300">
                <li className="box-border relative py-1 pl-0 text-left text-gray-500 border-solid">
                  <span className="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-yellow-300 rounded-full">
                    <span className="text-sm font-bold">✓</span>
                  </span>{" "}
                  AI-Assisted Doubt Portal
                </li>
                <li className="box-border relative py-1 pl-0 text-left text-gray-500 border-solid">
                  <span className="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-yellow-300 rounded-full">
                    <span className="text-sm font-bold">✓</span>
                  </span>{" "}
                  Code Review
                </li>
                <li className="box-border relative py-1 pl-0 text-left text-gray-500 border-solid">
                  <span className="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-yellow-300 rounded-full">
                    <span className="text-sm font-bold">✓</span>
                  </span>{" "}
                  Learn from top educators
                </li>
              </ul>
            </div>
          </div>
          <div className="box-border flex flex-col items-center content-center px-8 mx-auto mt-2 leading-6 text-black border-0 border-gray-300 border-solid md:mt-20 xl:mt-0 md:flex-row max-w-7xl lg:px-16">
            <div className="box-border w-full text-black border-solid md:w-1/2 md:pl-6 xl:pl-32">
              <h2 className="m-0 text-xl font-semibold leading-tight border-0 border-gray-300 lg:text-3xl md:text-2xl">
                What we offer
              </h2>
              <p className="pt-4 pb-8 m-0 leading-7 text-gray-700 border-0 border-gray-300 sm:pr-10 lg:text-lg">
                Save time and money with our revolutionary services. We are the
                leaders in the industry.
              </p>
              <ul className="p-0 m-0 leading-6 border-0 border-gray-300">
                <li className="box-border relative py-1 pl-0 text-left text-gray-500 border-solid">
                  <span className="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-yellow-300 rounded-full">
                    <span className="text-sm font-bold">✓</span>
                  </span>{" "}
                  Lifetime Validity
                </li>
                <li className="box-border relative py-1 pl-0 text-left text-gray-500 border-solid">
                  <span className="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-yellow-300 rounded-full">
                    <span className="text-sm font-bold">✓</span>
                  </span>{" "}
                  Hands-On Projects
                </li>
                <li className="box-border relative py-1 pl-0 text-left text-gray-500 border-solid">
                  <span className="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-yellow-300 rounded-full">
                    <span className="text-sm font-bold">✓</span>
                  </span>{" "}
                  Certification of Completion
                </li>
              </ul>
            </div>

            <div className="box-border relative w-full max-w-md px-4 mt-10 mb-4 text-center bg-no-repeat bg-contain border-solid md:mt-0 md:max-w-none lg:mb-0 md:w-1/2">
              <img
                src="https://cdn.devdojo.com/images/december2020/settings.png"
                className="pl-4 sm:pr-10 xl:pl-10 lg:pr-32"
              />
            </div>
          </div>
        </section>

        <section className="py-20 bg-gray-50">
          <div className="container items-center max-w-6xl px-10 mx-auto sm:px-20 md:px-32 lg:px-16">
            <div className="flex flex-wrap items-center -mx-3">
              <div className="order-1 w-full px-3 lg:w-1/2 lg:order-0">
                <div className="w-full lg:max-w-md">
                  <h2 className="mb-4 text-3xl font-bold leading-tight tracking-tight sm:text-4xl font-heading">
                    Jam-packed with all the tools you need to succeed!
                  </h2>
                  <p className="mb-4 font-medium tracking-tight text-gray-400 xl:mb-6">
                    It's never been easier to get a job. Our tools will help you
                    with the following:
                  </p>
                  <ul>
                    <li className="flex items-center py-2 space-x-4 xl:py-3">
                      <svg
                        className="w-8 h-8 text-pink-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
                        ></path>
                      </svg>
                      <span className="font-medium text-gray-500">
                        Resume Generator
                      </span>
                    </li>
                    <li className="flex items-center py-2 space-x-4 xl:py-3">
                      <svg
                        className="w-8 h-8 text-yellow-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                        ></path>
                      </svg>
                      <span className="font-medium text-gray-500">
                        AI Video Summariser
                      </span>
                    </li>
                    <li className="flex items-center py-2 space-x-4 xl:py-3">
                      <svg
                        className="w-8 h-8 text-green-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                        ></path>
                      </svg>
                      <span className="font-medium text-gray-500">
                        Doubt Portal
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="w-full px-3 mb-12 lg:w-1/2 order-0 lg:order-1 lg:mb-0">
                <img
                  className="mx-auto sm:max-w-sm lg:max-w-full"
                  src="https://cdn.devdojo.com/images/november2020/feature-graphic.png"
                  alt="feature image"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="flex items-center justify-center py-20 bg-white min-w-screen">
          <div className="px-16 bg-white">
            <div className="container flex flex-col items-start mx-auto lg:items-center">
              <p className="relative flex items-start justify-start w-full text-lg font-bold tracking-wider text-purple-500 uppercase lg:justify-center lg:items-center">
                Don't just take our word for it
              </p>

              <h2 className="relative flex items-start justify-start w-full max-w-3xl text-5xl font-bold lg:justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className="absolute right-0 hidden w-12 h-12 -mt-2 -mr-16 text-gray-200 lg:inline-block"
                  viewBox="0 0 975.036 975.036"
                >
                  <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                </svg>
                See what others are saying
              </h2>
              <div className="block w-full h-0.5 max-w-lg mt-6 bg-purple-100 rounded-full"></div>

              <div className="items-center justify-center w-full mt-12 mb-4 lg:flex">
                <div className="flex flex-col items-start justify-start w-full h-auto mb-12 lg:w-1/3 lg:mb-0">
                  <div className="flex items-center justify-center">
                    <div className="w-16 h-16 mr-4 overflow-hidden bg-gray-200 rounded-full">
                      <img
                        src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1700&amp;q=80"
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <div className="flex flex-col items-start justify-center">
                      <h4 className="font-bold text-gray-800">
                        Harman Batheja
                      </h4>
                      <p className="text-gray-600">SDE at Google</p>
                    </div>
                  </div>
                  <blockquote className="mt-8 text-lg text-gray-500">
                    "The course was practical and engaging; I now feel confident
                    in my job."
                  </blockquote>
                </div>
                <div className="flex flex-col items-start justify-start w-full h-auto px-0 mx-0 mb-12 border-l border-r border-transparent lg:w-1/3 lg:mb-0 lg:px-8 lg:mx-8 lg:border-gray-200">
                  <div className="flex items-center justify-center">
                    <div className="w-16 h-16 mr-4 overflow-hidden bg-gray-200 rounded-full">
                      <img
                        src="https://plus.unsplash.com/premium_photo-1671656349322-41de944d259b?q=80&w=3578&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&fit=crop&amp;w=1256&amp;q=80"
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <div className="flex flex-col items-start justify-center">
                      <h4 className="font-bold text-gray-800">Ishaan Gupta</h4>
                      <p className="text-gray-600">UI/UX Designer</p>
                    </div>
                  </div>
                  <blockquote className="mt-8 text-lg text-gray-500">
                    "Interactive projects and great support made learning
                    effective."
                  </blockquote>
                </div>
                <div className="flex flex-col items-start justify-start w-full h-auto lg:w-1/3">
                  <div className="flex items-center justify-center">
                    <div className="w-16 h-16 mr-4 overflow-hidden bg-gray-200 rounded-full">
                      <img
                        src="https://images.unsplash.com/photo-1545167622-3a6ac756afa4?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1256&amp;q=80"
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <div className="flex flex-col items-start justify-center">
                      <h4 className="font-bold text-gray-800">Karman Singh</h4>
                      <p className="text-gray-600">Software Engineer</p>
                    </div>
                  </div>
                  <blockquote className="mt-8 text-lg text-gray-500">
                    "Flexible learning with great guidance; a valuable
                    investment in my career."
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
