import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import { BASE_URL } from '../config.js';

const TrainingDetail = () => {
	const { id } = useParams();
	const [training, setTraining] = useState(null);

	useEffect(() => {
		const fetchTrainingDetail = async () => {
			try {
				const response = await axios.get(
					`${BASE_URL}/api/training/${id}`
				);
				setTraining(response.data);
				console.log('training Detail: ', response.data);
			} catch (err) {
				console.error(err);
			}
		};
		fetchTrainingDetail();
	}, [id]);

	if (!training) return <p>Loading...</p>;

	return (
		<>
			<div className='antialiased'>
				<div className='py-6'>
					<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6'>
						<div className='flex flex-col md:flex-row -mx-4'>
							<div className='md:flex-1 px-4'>
								<img
									src={training.image}
									alt={training.name}
									className='w-full h-64 md:h-80 rounded-lg object-cover'
								/>
							</div>
							<div className='md:flex-1 px-4'>
								<h2 className='mb-2 leading-tight tracking-tight font-bold text-gray-800 text-2xl md:text-3xl'>
									{training.name}
								</h2>

								<div className='flex items-center space-x-4 my-4'>
									<div>
										<div className='rounded-lg bg-gray-100 flex py-2 px-3'>
											<span className='text-indigo-400 mr-1 mt-1'>
												₹
											</span>
											<span className='font-bold text-indigo-600 text-3xl'>
												{training.price}
											</span>
										</div>
									</div>
								</div>

								<p className='text-gray-500'>
									{training.description}
								</p>

								{/* <div className='flex py-4 space-x-4'>
									<Link
										to={`${
											localStorage.getItem('token')
												? `/purchase/${training._id}`
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
								</div> */}
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default TrainingDetail;
