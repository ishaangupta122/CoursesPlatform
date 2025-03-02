import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import { BASE_URL } from '../config.js';

const CourseDetail = () => {
	const { id } = useParams();
	const [course, setCourse] = useState(null);
	const [user, setUser] = useState(null);

	useEffect(() => {
		const fetchCourseDetail = async () => {
			try {
				const response = await axios.get(
					`${BASE_URL}/api/courses/${id}`
				);
				setCourse(response.data);
				console.log('Course Detail: ', response.data);
			} catch (err) {
				console.error(err);
			}
		};
		fetchCourseDetail();
	}, [id]);

	useEffect(() => {
		const fetchUserData = async () => {
			try {
				const response = await axios.get(
					`${BASE_URL}/api/users/${localStorage.getItem('id')}`
				);
				setUser(response.data);
				console.log('User Data: ', response.data);
			} catch (err) {
				console.error(err);
			}
		};
		fetchUserData();
	}, []);

	if (!course) return <p>Loading...</p>;

	return (
		<>
			<div className='antialiased'>
				<div className='py-6'>
					<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6'>
						<div className='flex flex-col md:flex-row -mx-4'>
							<div className='md:flex-1 px-4'>
								<img
									src={course.image}
									alt={course.name}
									className='w-full h-64 md:h-80 rounded-lg object-cover'
								/>
							</div>
							<div className='md:flex-1 px-4'>
								<h2 className='mb-2 leading-tight tracking-tight font-bold text-gray-800 text-2xl md:text-3xl'>
									{course.name}
								</h2>

								<div className='flex items-center space-x-4 my-4'>
									<div>
										<div className='rounded-lg bg-gray-100 flex py-2 px-3'>
											<span className='text-indigo-400 mr-1 mt-1'>
												₹
											</span>
											<span className='font-bold text-indigo-600 text-3xl'>
												{course.price}
											</span>
										</div>
									</div>
								</div>

								<p className='text-gray-500'>
									{course.description}
								</p>

								{localStorage.getItem('token') &&
								user?.courses
									?.map((course) => course._id)
									?.includes(course?._id) ? (
									<div className={`flex py-4 space-x-4`}>
										<button
											type='button'
											className='h-14 px-6 py-2 font-semibold rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white'
										>
											Enrolled
										</button>
									</div>
								) : (
									<div className={`flex py-4 space-x-4`}>
										<Link
											to={`${
												localStorage.getItem('token')
													? `/purchase/${course._id}`
													: '/signin'
											}`}
										>
											<button
												type='button'
												className='h-14 px-6 py-2 font-semibold rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white'
											>
												{localStorage.getItem('token')
													? 'Enroll Now'
													: 'Login to Enroll'}
											</button>
										</Link>
									</div>
								)}
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default CourseDetail;
