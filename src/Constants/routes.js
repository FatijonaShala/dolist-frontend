import Home from '../Pages/Home/';
import CreateList from '../Pages/CreateList';
import MyCollections from '../Pages/MyCollections';
import Analytics from '../Pages/Analytics';
import Profile from '../Pages/Profile/';
import About from '../Pages/About';
import Login from '../Pages/Login';

const routes = [
    { path: "/", Component: < Home /> , private: false },
    { path: "/login", Component: < Login /> , private: false },
    { path: "/newList", Component: < CreateList /> , private: false },
    { path: "/myCollections", Component: < MyCollections /> , private: false },
    { path: "/analytics", Component: < Analytics /> , private: false },
    { path: "/profile", Component: < Profile /> , private: false },
    { path: "/about", Component: < About /> , private: false }
];


export default routes;