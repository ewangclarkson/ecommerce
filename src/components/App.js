import React from "react";
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import ProtectedLayoutView from "./resources/Views/protected/layouts/layout.view";
import LoginComponent from "./Controllers/Auth/LoginComponent";
import ProtectedHomeView from "./resources/Views/protected/home.view";
import ErrorComponent from "./resources/Views/errors/error.view";
import LogoutComponent from "./Controllers/Auth/LogoutComponent";
import {AuthCheck} from "./Providers/Auth/Auth";
import {AuthProvider} from "./Providers/Auth/AuthProvider";
import LayoutView from "./resources/Views/public/layouts/layout.view";
import HomeView from "./resources/Views/public/home.view";
import ShopView from "./resources/Views/public/shop/shop.view";
import ShopCartView from "./resources/Views/public/shop/shop_cart.view";
import ShopSingleView from "./resources/Views/public/shop/shop_single.view";
import FAQSView from "./resources/Views/public/faqs.view";
import ContactUsView from "./resources/Views/public/contactus.view";
import AboutUsView from "./resources/Views/public/aboutus";
import OurServices from "./resources/Views/public/ourservices.view";
import OurTeam from "./resources/Views/public/ourteam.view";
import Category_listView from "./resources/Views/protected/category/category_list.view";
import {useTranslation} from "react-i18next";
import './resources/lang/i18n';
import SubCategoryListView from "./resources/Views/protected/subcategory/subcategory_list.view";
import ProductListView from "./resources/Views/protected/product/product.view";
import AddProductView from "./resources/Views/protected/product/new_product.view";
import EditProductView from "./resources/Views/protected/product/edit_product.view";
import ShopLayoutView from "./resources/Views/public/shop/layouts/main.view";
import ShopProductView from "./resources/Views/public/shop/shop_product.view";
import UserListView from "./resources/Views/protected/users/user_list.view";
import AddUserView from "./resources/Views/protected/users/new_user.view";
import EditUserView from "./resources/Views/protected/users/edit_user.view";
import SettingsView from "./resources/Views/protected/settings.view";
import CheckoutView from "./resources/Views/public/payment/checkout.view";
import PaymentRequestView from "./resources/Views/protected/payment/payment_request.view";
import ProductDeliveryView from "./resources/Views/protected/payment/product_delivery.view";
import CollectedProductsView from "./resources/Views/protected/payment/collected_products.view";
import ValidatePaymentRequestView from "./resources/Views/protected/payment/validate_payment.view";


const App = () => {
    let {t} = useTranslation();
    return (
        <BrowserRouter>
            <AuthProvider>
                <Routes>
                    <Route exact path={t('logoutUrl')} element={<AuthCheck><LogoutComponent/>
                    </AuthCheck>}/>
                    <Route exact path={t('protectedUrl')} element={<ProtectedLayoutView/>}>
                        <Route index element={<ProtectedHomeView/>}/>
                        <Route path={t('protectedUrl') + t('homeUrl')} element={<ProtectedHomeView/>}/>
                        <Route path={t('protectedUrl') + t('clientCategoryUrl')} element={<Category_listView/>}/>
                        <Route path={t('protectedUrl') + t('clientSubCategoryUrl')} element={<SubCategoryListView/>}/>
                        <Route path={t('protectedUrl') + t('clientProductUrl')} element={<ProductListView/>}/>
                        <Route path={t('protectedUrl') + t('clientAddProductUrl')} element={<AddProductView/>}/>
                        <Route path={t('protectedUrl') + t('clientProductUrl') + '/:pId'} element={<EditProductView/>}/>
                        <Route path={t('protectedUrl') + t('clientUserUrl')} element={<UserListView/>}/>
                        <Route path={t('protectedUrl') + t('clientUserUrl') + '/:uId'} element={<EditUserView/>}/>
                        <Route path={t('protectedUrl') + t('clientAddUserUrl')} element={<AddUserView/>}/>
                        <Route path={t('protectedUrl') + t('clientSettingsUrl')} element={<SettingsView/>}/>
                        <Route path={t('protectedUrl') + t('clientPaymentRequestUrl')} element={<PaymentRequestView/>}/>
                        <Route path={t('protectedUrl') + t('clientProductDeliveryUrl')} element={<ProductDeliveryView/>}/>
                        <Route path={t('protectedUrl') + t('clientProductCollectionUrl')} element={<CollectedProductsView/>}/>
                        <Route path={t('protectedUrl') + t('clientPaymentRequestUrl') + '/:pId' } element={<ValidatePaymentRequestView/>}/>
                    </Route>
                    <Route exact path="/" element={<LayoutView/>}>
                        <Route exact path={t('loginUrl')} element={<LoginComponent/>}/>
                        <Route index element={<HomeView/>}/>
                        <Route path={t('clientCheckoutUrl')} element={<CheckoutView/>}/>
                        <Route path={t('homeUrl')} element={<HomeView/>}/>
                        <Route exact path={t('shopUrl')} element={<ShopLayoutView/>}>
                            <Route index element={<ShopView/>}/>
                            <Route path={':id'} element={<ShopProductView/>}/>
                            <Route path={t('shopUrl') + t('shopSingleUrl') + '/:id'} element={<ShopSingleView/>}/>
                        </Route>
                        <Route path={t('shopCartUrl')} element={<ShopCartView/>}/>
                        <Route path={t('faqsUrl')} element={<FAQSView/>}/>
                        <Route path={t('contactUsUrl')} element={<ContactUsView/>}/>
                        <Route path={t('aboutUsUrl')} element={<AboutUsView/>}/>
                        <Route path={t('ourServicesUrl')} element={<OurServices/>}/>
                        <Route path={t('ourTeamUrl')} element={<OurTeam/>}/>
                    </Route>
                    <Route exact path="*" element={<ErrorComponent/>}/>
                </Routes>
            </AuthProvider>
        </BrowserRouter>
    );
}
export default App;

