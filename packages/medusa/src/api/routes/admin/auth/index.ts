import { Router } from "express"
import { Department, User } from "../../../.."
import middlewares from "../../../middlewares"

const route = Router()

export default (app) => {
  app.use("/auth", route)

  route.get(
    "/",
    middlewares.authenticate(),
    middlewares.wrap(require("./get-session").default)
  )
  route.post("/", middlewares.wrap(require("./create-session").default))

  route.delete(
    "/",
    middlewares.authenticate(),
    middlewares.wrap(require("./delete-session").default)
  )

  return app
}

export type AdminWithDeparts = {
  user:Omit<User, "password_hash">,
  department:Department
}

/**
 * @schema AdminAuthRes
 * type: object
 * required:
 *   - user
 * properties:
 *   user:
 *     $ref: "#/components/schemas/User"
 */
export type AdminAuthRes = {
  user: Omit<User, "password_hash"> 
}

export * from "./create-session"
export * from "./delete-session"
export * from "./get-session"
