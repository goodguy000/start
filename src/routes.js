import { routerActions } from 'react-router-redux';
import { connectedReduxRedirect } from 'redux-auth-wrapper/history4/redirect';
import { App, Home, NotFound } from 'containers';
import About from 'containers/About/Loadable';
import Login from 'containers/Login/Loadable';
import LoginSuccess from 'containers/LoginSuccess/Loadable';
import Register from 'containers/Register/Loadable';
import BrowseCompany from 'containers/BrowseCompany';
import BrowseJobs from 'containers/BrowseJobs';
import CreateResume from 'containers/CreateResume';
import CandidateProfile from 'containers/CandidateProfile';
import EmployerProfile from 'containers/EmployerProfile';
import ResumeDetail from 'containers/ResumeDetail';
import BrowseJobsGrid from 'containers/BrowseJobsGrid';
import SearchJob from 'containers/SearchJob';
import CreateJob from 'containers/CreateJob';
import CreateCompany from './containers/CreateCompany';
import BrowseResume from './containers/BrowseResume';
import JobDetail from './containers/JobDetail';
import Contact from './containers/Contact';
import FAQ from './containers/FAQ';
import CompanyDetail from './containers/CompanyDetail';

const isAuthenticated = connectedReduxRedirect({
  redirectPath: '/login',
  authenticatedSelector: state => state.auth.user !== null,
  redirectAction: routerActions.replace,
  wrapperDisplayName: 'UserIsAuthenticated'
});

const isNotAuthenticated = connectedReduxRedirect({
  redirectPath: '/',
  authenticatedSelector: state => state.auth.user === null,
  redirectAction: routerActions.replace,
  wrapperDisplayName: 'UserIsAuthenticated',
  allowRedirectBack: false
});

const routes = [
  {
    component: App,
    routes: [
      { path: '/', exact: true, component: Home },
      { path: '/about', component: About },
      { path: '/browse-company', component: BrowseCompany },
      { path: '/browse-jobs', component: BrowseJobs },
      { path: '/browse-resume', component: BrowseResume },
      { path: '/browse-jobs-grid', component: BrowseJobsGrid },
      { path: '/contact', component: Contact },
      { path: '/create-resume', component: CreateResume },
      { path: '/create-job', component: CreateJob },
      { path: '/create-company', component: CreateCompany },
      { path: '/company-detail', component: CompanyDetail },
      { path: '/candidate-profile', component: CandidateProfile },
      { path: '/login', component: Login },
      { path: '/faq', component: FAQ },
      { path: '/employer-profile', component: EmployerProfile },
      { path: '/login-success', component: isAuthenticated(LoginSuccess) },
      { path: '/search-job', component: SearchJob },
      { path: '/job-detail', component: JobDetail },
      { path: '/register', component: isNotAuthenticated(Register) },
      { path: '/resume-detail', component: ResumeDetail },
      { component: NotFound }
    ]
  }
];

export default routes;
