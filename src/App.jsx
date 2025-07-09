import {
  ErrorBoundary,
  lazy,
  LocationProvider,
  Route,
  Router,
} from "preact-iso";

const routes = [];

(import.meta.pages || []).map((d) => {
  const component = lazy(() => import(`./pages/${d.path}`));
  const routePath = d.withoutExt.replace(/index$/, "/").toLowerCase().split("/")
    .filter((d) => d).join("/");
  routes.push(
    <Route path={"/" + routePath} component={component} />,
  );
});

export const App = ({ url = "" }) => {
  return (
    <ErrorBoundary>
      <LocationProvider url={url}>
        <Router>{routes}</Router>
      </LocationProvider>
    </ErrorBoundary>
  );
};
