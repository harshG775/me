import { lazy, Suspense } from "react";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router";

import ErrorBoundary from "./components/appRouter/ErrorBoundary";
import Loading from "./routes/loading";
import RootLayout from "./routes/layout";
// routes
const NotFoundRoute = lazy(() => import("./routes/not-found"));
import RootRoute from "./routes";
import ProjectsRoute from "./routes/projects/route";
import TestRoute from "./routes/test/route";

const router = createBrowserRouter([
    {
        path: "/",
        element: (
            <RootLayout>
                <ErrorBoundary>
                    <Suspense fallback={<Loading />}>
                        <Outlet />
                    </Suspense>
                </ErrorBoundary>
            </RootLayout>
        ),
        children: [
            {
                index: true,
                element: <TestRoute />,
            },
            {
                path: "projects",
                element: <ProjectsRoute />,
            },
            {
                path: "test",
                element: <TestRoute />,
            },
            {
                path: "*",
                element: <NotFoundRoute />,
            },
        ],
    },
]);

export default function AppRouter() {
    return <RouterProvider router={router} />;
}
