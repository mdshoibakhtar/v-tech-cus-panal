import React from 'react'
import { Navigate } from 'react-router-dom'
import DashbordCustomer from '../../pages/dashbord/Index'
function Protected({ isSignedIn, children }) {
    if (!isSignedIn) {
        return <Navigate to="/loginPage" replace />
    }
    return <DashbordCustomer />
}
export default Protected