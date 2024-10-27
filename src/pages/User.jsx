import { useEffect, useState } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { onAuthStateChanged, auth } from '../fb'
import Navbar from './User/Navbar'
import Home from './User/Home'
import Login from './User/Login'
import Profile from './User/Profile'
import Reports from './User/Reports'
import Medicine from './User/Medicine'
import Appointment from './User/Appointment'

function User() {
	const [id, setId] = useState()
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		onAuthStateChanged(auth, (usr) => {
			setId(usr?.uid)
			setLoading(false)
		})
	}, [])

	return (
		<>
			<Navbar userId={id} />
			{loading ? (
				'Loading...'
			) : (
				<Routes>
					<Route path='login' element={<Login userId={id} />} />
					<Route path='profile' element={id ? <Profile userId={id} /> : <Navigate to='/user/login' />} />
					<Route path='appointment' element={id ? <Appointment userId={id} /> : <Navigate to='/user/login' />} />
					<Route path='reports' element={id ? <Reports userId={id} /> : <Navigate to='/user/login' />} />
					<Route path='medicine' element={id ? <Medicine userId={id} /> : <Navigate to='/user/login' />} />
					<Route path='*' element={<Home userId={id} />} />
				</Routes>
			)}
		</>
	)
}

export default User
