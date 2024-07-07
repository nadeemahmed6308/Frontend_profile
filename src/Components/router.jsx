// React Router DOM se Route aur Routes import karna
import { Route, Routes } from "react-router-dom";

// NotFound404 page import karna
import { NotFound404 } from "./Page/404NotFound/404notFound";

// Authpage import karna
import { Authpage } from "./Page/loginpage/loginpage";

// SignupPage import karna
import { SignupPage } from "./Page/signup/signup";

// UserProfilePage import karna
import { UserProfilePage } from "./Page/user/userProfile";

// UserEditPage import karna
import { UserEditPage } from "./Page/userEdit/userEdit";

// Allroutes component define karna
export const Allroutes = () => {
  return (
    <Routes>
      {/* yeh route kisi bhi unknown path ke liye 404 page show karega */}
      <Route path="*" element={<NotFound404 />} />

      {/* yeh route root path ke liye Authpage show karega */}
      <Route path="/" element={<Authpage />} />

      {/* yeh route signup page ke liye SignupPage show karega */}
      <Route path="/signup" element={<SignupPage />} />

      {/* yeh route user profile page ke liye UserProfilePage show karega */}
      <Route path="/user" element={<UserProfilePage />} />

      {/* yeh route user edit page ke liye UserEditPage show karega */}
      <Route path="/user/edit" element={<UserEditPage />} />
    </Routes>
  );
};
