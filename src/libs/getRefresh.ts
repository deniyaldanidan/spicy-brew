

export default async function getRefresh() {
    const res = await fetch(`/api/refresh`, {method: "GET", credentials: "same-origin", next: {tags: ["auth-refresh"], revalidate: 60*60*6}});

    if (res.ok){
        return res.json()
    }

    return {auth:false}
}