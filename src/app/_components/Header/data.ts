import { shop_categories } from "@/custTypes";
import URL_LIST from "@/url";

export const shopOpts = [ { path: URL_LIST.shop.path, label: "All" }, ...shop_categories.map(t => ({ label: t.replaceAll("_", " "), path: URL_LIST.shop.filter(t) })) ]

export const menus:Array<{label: string, path?: string, children?: Array<{label: string, path: string}>}> = [
    URL_LIST.home,
    {label: "Shop", children: shopOpts},
    URL_LIST.subscribe,
    URL_LIST.cafes,
    {label: URL_LIST.howTos.label, children: Object.values(URL_LIST.howTos.path_children)},
    URL_LIST.about,
    URL_LIST.contact
]