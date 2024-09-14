function Home() {
	return (
		<div style={{ backgroundColor: '#95a8f3', color: '#03071f' }} className='pt-5'>
			<div className='container'>
				<div className='row align-items-center'>
					<div className='col-md-6 text-center text-md-start mb-4 mb-md-0'>
						<img src='/images/DoctorAndPatient.svg' alt='Logo' className='img-fluid' />
					</div>
					<div className='col-md-6 text-center text-md-start'>
						<h1 className='custom-header' style={{ fontFamily: "Nunito', sans-serif", fontWeight: 500 }}>
							Book your appointments here
						</h1>
						<a
							href='/user/appointment'
							className='btn custom-btn mt-4'
							style={{
								borderRadius: '20px',
								fontSize: '30px',
								width: '200px',
								fontFamily: "'Nunito', sans-serif",
								fontWeight: 800,
								backgroundColor: '#03071f',
								color: '#5970ee'
							}}
						>
							Get Started
						</a>
					</div>
				</div>
			</div>

			<br />
			<div className='blogs container p-5' style={{ backgroundColor: '#081722', borderRadius: '20px' }}>
				<div className='row row-cols-1 row-cols-md-3 g-5'>
					<div className='col'>
						<div
							className='blog-card p-3'
							style={{ backgroundColor: 'rgba(2, 7, 17, 0.9)', borderRadius: '12px', textAlign: 'left', boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)' }}
						>
							<div className='mt-3' style={{ backgroundColor: '#7589fc', width: '100%', borderRadius: '12px' }}>
								<img style={{ margin: '10px', width: '90%', height: '90%' }} src='/images/health-check.png' alt='Blog 1' />
							</div>
							<div className='blog-content'>
								<h3 className='mt-3' style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#b0bec5' }}>
									Reports
								</h3>
								<p style={{ fontSize: '1rem', color: '#b0bec5', lineHeight: '1.5', marginBottom: '1.5rem' }}>
									Securely store and access all your medical documents in one place.
								</p>
								<a href='/user/reports'>
									<button
										className='btn btn-primary'
										style={{
											borderRadius: '20px',
											fontSize: '20px',
											width: '100px',
											fontFamily: "'Nunito', sans-serif",
											fontWeight: 700,
											backgroundColor: '#95a8f3',
											color: '#03071f'
										}}
									>
										View
									</button>
								</a>
							</div>
						</div>
					</div>
					<div className='col'>
						<div
							className='blog-card p-3'
							style={{ backgroundColor: 'rgba(2, 7, 17, 0.9)', borderRadius: '12px', textAlign: 'left', boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)' }}
						>
							<div className='mt-3' style={{ backgroundColor: '#7589fc', width: '100%', borderRadius: '12px' }}>
								<img style={{ margin: '10px', width: '90%', height: '90%' }} src='/images/syringe.png' alt='Blog 2' />
							</div>
							<div className='blog-content'>
								<h3 className='mt-3' style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#b0bec5' }}>
									Medicines
								</h3>
								<p style={{ fontSize: '1rem', color: '#b0bec5', lineHeight: '1.5', marginBottom: '1.5rem' }}>
									Keep track of all your medications in one place.
								</p>
								<a href='/user/medicine'>
									<button
										className='btn btn-primary'
										style={{
											borderRadius: '20px',
											fontSize: '20px',
											width: '100px',
											fontFamily: "'Nunito', sans-serif",
											fontWeight: 700,
											backgroundColor: '#95a8f3',
											color: '#03071f'
										}}
									>
										View
									</button>
								</a>
							</div>
						</div>
					</div>
					<div className='col'>
						<div
							className='blog-card p-3'
							style={{ backgroundColor: 'rgba(2, 7, 17, 0.9)', borderRadius: '12px', textAlign: 'left', boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)' }}
						>
							<div className='mt-3' style={{ backgroundColor: '#7589fc', width: '100%', borderRadius: '12px' }}>
								<img style={{ margin: '10px', width: '90%', height: '90%' }} src='/images/schedule.png' alt='Blog 3' />
							</div>
							<div className='blog-content'>
								<h3 className='mt-3' style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#b0bec5' }}>
									Appointment
								</h3>
								<p style={{ fontSize: '1rem', color: '#b0bec5', lineHeight: '1.5', marginBottom: '1.5rem' }}>
									Easily book appointments with the industry levels doctors.
								</p>
								<a href='/user/appointment'>
									<button
										className='btn btn-primary'
										style={{
											borderRadius: '20px',
											fontSize: '20px',
											width: '100px',
											fontFamily: "'Nunito', sans-serif",
											fontWeight: 700,
											backgroundColor: '#95a8f3',
											color: '#03071f'
										}}
									>
										View
									</button>
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>

			<br />
			<footer style={{ padding: 0, margin: 0, backgroundColor: 'rgba(2, 7, 17, 0.9)', maxWidth: '100%', height: '70px' }}>
				<p style={{ color: '#7589fc', textAlign: 'center', marginTop: '20px' }}>© 2023 All Rights Reserved. MediCare</p>
			</footer>
		</div>
	)
}

export default Home
