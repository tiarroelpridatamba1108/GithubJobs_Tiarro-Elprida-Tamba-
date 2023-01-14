import {Routes, Route, useLocation, useNavigate, useParams} from "react-router-dom";
import {HomePage} from "./pages";

function withRouter(Component) {
  function ComponentWithRouterProp(props) {
    const location = useLocation();
    const navigate = useNavigate();
    const params = useParams();
    return (
        <Component
            {...props}
            {...{location, navigate, params}}
        />
    );
  }

  return ComponentWithRouterProp;
}

const HomePageWithRouter = withRouter(HomePage);

function App() {
  return (
      <Routes>
        <Route path="/" element={<HomePageWithRouter/>}/>
      </Routes>
  );
}

export default App;
