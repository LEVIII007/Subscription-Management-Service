
// import { ExpressAuth } from "@auth/express"
// import Google from "@auth/express/providers/google"
// import express from "express"
 
// const app = express()
 
// // If app is served through a proxy, trust the proxy to allow HTTPS protocol to be detected
// app.set('trust proxy', true)
// app.use("/auth/*", ExpressAuth({ providers: [ Google ] }))



import { ExpressAuth } from "@auth/express"
import Google from "@auth/express/providers/google"
import express from "express"

const router = express.Router()

// If app is served through a proxy, trust the proxy to allow HTTPS protocol to be detected
router.set('trust proxy', true)
router.use("/auth/*", ExpressAuth({ providers: [ Google ] }))

export default router