export const api = "http://localhost:8080";

export const apiCall = async (method: string, url: string, path: string, data?: any) => {
    const res = await fetch(`${url}/${path}`, {
        method,
        headers: {
          'Content-Type': 'application/json'
        },

        body: JSON.stringify(data)
    })
    return res.json()
}