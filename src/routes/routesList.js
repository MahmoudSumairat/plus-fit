import Accessories from "../pages/Accessories/Accessories";
import Hijabs from "../pages/Hijabs/Hijabs";
import Home from "../pages/Home/Home";
import Register from "../pages/Register/Register";
import Shirts from "../pages/Shirts/Shirts";
import Shoes from "../pages/Shoes/Shoes";
import Shorts from "../pages/Shorts/Shorts";
import Store from "../pages/Store/Store";

const routesList = [{
    name  : 'home',
    hideFromMenu : true,
    link : '/',
    component : Home 
},
{
    name  : 'store',
    link : '/store',
    component : Store
},
{
    name  : 'shoes',
    link : '/shoes',
    component : Shoes
},
{
    name  : 'shorts',
    link : '/shorts',
    component : Shorts
},
{
    name  : 'shirts',
    link : '/shirts',
    component : Shirts
},
{
    name  : 'hijabs',
    link : '/hijabs',
    component : Hijabs
},
{
    name  : 'accessories',
    link : '/accessories',
    component : Accessories
},
{
    name  : 'register',
    link : '/register',
    component : Register,
    hideFromMenu : true
},
]


export default routesList;