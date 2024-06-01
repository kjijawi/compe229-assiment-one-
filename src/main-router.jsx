import {Route, Routes} from 'react-router-dom';
import AboutPage from './components/about.jsx';
import HomePage from './components/home.jsx';
import ProjectsPage from './components/projects.jsx';
import ServicesPage from './components/services.jsx';
import ContactPage from './components/contact.jsx';
import Layout from './components/layout.jsx';

const MainRouter = () => {
    return (
        <div>
            <Layout />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/projects" element={<ProjectsPage />} />
                <Route path="/services" element={<ServicesPage />} />
                <Route path="/contact" element={<ContactPage />} />
            </Routes>
        </div>
    )
}

export default MainRouter;