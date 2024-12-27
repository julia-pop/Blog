import './App.module.scss';
import { Routes, Route } from 'react-router-dom';

import NotFoundPage from '../NotFoundPage/NotFoundPage';
import SignUp from '../SignUp/SignUp';
import SignIn from '../SignIn/SignIn';
import Article from '../Article/Article';
import Layout from '../Layout/Layout';
import EditProfile from '../EditProfile/EditProfile';
import EditProfileForm from '../Forms/EditProfileForm/EditProfileForm';
import SignInForm from '../Forms/SignInForm/SignInForm';
import SignUpForm from '../Forms/SignUpForm/SignUpForm';
import ArticlesList from '../ArticlesList/ArticlesList';
import CreateArticle from '../CreateArticle/CreateArticle';
import EditArticle from '../EditArticle/EditArticle';
import RequireAuth from '../../hoc/RequireAuth';

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<ArticlesList />} />
          <Route path="/articles" element={<ArticlesList />} />
          <Route path="/articles/:slug" element={<Article />} />
          <Route
            path="/articles/:slug/edit"
            element={
              <RequireAuth>
                <EditArticle />
              </RequireAuth>
            }
          />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/profile" element={<EditProfile />} />
          <Route
            path="/new-article"
            element={
              <RequireAuth>
                <CreateArticle />
              </RequireAuth>
            }
          />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </div>
  );
}
