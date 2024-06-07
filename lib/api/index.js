function createFetchFunction(method) {
    return async (url, params) => {   
        const _params = {
            method,
            headers: {
                "content-type": "application/json"
            },
            ...params
        }

        if (_params.body !== null) {
            _params.body = JSON.stringify(_params.body) 
        }

        if (_params.token !== undefined) {
            _params.headers["Authorization"] = `Bearer ${_params.token}`
        }


        const response = await fetch(url, _params)

        if (!response.ok) {
            const error = new Error("Request failed with status " + response.status)
            error.response = response
            throw error
        }

        const data = await response.json()
        return data
    }
}

export const getJSON = createFetchFunction("GET")
export const postJSON = createFetchFunction("POST")
export const putJSON = createFetchFunction("PUT")
export const deleteJSON = createFetchFunction("DELETE")
export const BASE_URL = "http://localhost:3001"
