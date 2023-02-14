import {BrowserRouter,Routes,Route} from 'react-router-dom'
import { Login } from './pages/admin/login'
// import { Dashboard } from './pages/admin/Dashboard'
import { Course } from './pages/admin/Course'
import { Applications } from './pages/admin/Applications'
import { Clients } from './pages/admin/Clients'
import { RestoreCourse } from './pages/admin/RestoreCourse'
import { Signup } from './pages/client/Signup'
import { LoginClient } from './pages/client/Login'
import { Classes } from './pages/admin/Classes'
import { Dashboard } from './pages/client/Dashboard'

export const Router = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/admin' element={<Login />} />
                {/* <Route path='/admin/dashboard' element={<Dashboard />} /> */}
                <Route path='/admin/course' element={<Course />}/>
                <Route path='/admin/applications' element={<Applications />} />
                <Route path='/admin/clients' element={<Clients />} />
                <Route path='/admin/restoreCourse' element={<RestoreCourse />} />
                <Route path='/admin/class' element={<Classes />} />

                
                {/* client routes */}
                <Route path='/' element={<Signup />}/>
                <Route path='/login' element={<LoginClient />} />
                <Route path='/dashboard' element={<Dashboard />} />
            </Routes>
        </BrowserRouter>
    )
}