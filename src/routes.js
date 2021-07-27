import HomePageComponent from "./component/HomePageComponent";
import CategoryHome from "./component/category/CategoryHome";
import ProductDetail from "./component/product/ProductDetail";
import UpdateProduct from "./component/product/UpdateProduct";
const routes = [
     { path: "/trang-chu", component: HomePageComponent, exact: true },
   
     { path: "/", component: HomePageComponent, exact: true },
     { path: "/bo-suu-tap", component: CategoryHome, exact: true },
     { path: "/san-pham/:id", component: ProductDetail, exact: true },
     { path: "/san-pham/cap-nhat/:id", component: UpdateProduct, exact: true },
     
     // { path: "/case-study", component: CaseStudyIndex, exact: true }
     // {path:"/show-list", component: RouteA, exact: true}
];
export default routes


