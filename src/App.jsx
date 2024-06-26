import { RouterProvider, createBrowserRouter } from "react-router-dom";
import routes from "@routes/routes";

const App = () => {

	const router = createBrowserRouter(routes);

	return (
		<RouterProvider router={router} />
	);
};

export default App;