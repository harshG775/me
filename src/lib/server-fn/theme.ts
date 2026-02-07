import { createServerFn } from "@tanstack/react-start"
import { getCookie, setCookie } from "@tanstack/react-start/server"
import * as z from "zod"

const postThemeValidator = z.union([z.literal("light"), z.literal("dark"), z.undefined()])
export type Theme = z.infer<typeof postThemeValidator>
const storageKey = "_preferred-theme"

export const getThemeServerFn = createServerFn().handler(() => getCookie(storageKey) as Theme)

export const setThemeServerFn = createServerFn({ method: "POST" })
    .inputValidator(postThemeValidator)
    .handler(({ data }) => data && setCookie(storageKey, data))
