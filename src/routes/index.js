import HomePage from "~/pages/Home"
import Following from "~/pages/Following"
import NoPage from "~/pages/NoPage"
import Upload from "~/pages/Upload"
import { HeaderOnly } from "~/components/Layout"

// Public routes
const publicRoutes = [
    { path: "/", component: HomePage },
    { path: "/following", component: Following },
    { path: "/*", component: NoPage, layout: null },
    { path: "/upload", component: Upload, layout: HeaderOnly },
]

const privateRoutes = [{}]

export { publicRoutes, privateRoutes }
