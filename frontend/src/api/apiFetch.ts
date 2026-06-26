const API_URL = import.meta.env.VITE_API_URL;

export const HttpMethod = {
    GET: 'GET',
    POST: 'POST',
    PUT: 'PUT',
    PATCH: 'PATCH',
    DELETE: 'DELETE',
} as const;

export type HttpMethod = typeof HttpMethod[keyof typeof HttpMethod];

interface ApiOptions {
    method?: HttpMethod;
    data?: any;
    params?: Record<string, any>;
    headers?: Record<string, string>;
}

export async function apiFetch<T>(
    endpoint: string,
    options?: ApiOptions
): Promise<T> {
    const {
        method = HttpMethod.GET,
        data,
        params,
        headers,
    } = options || {};

    const isFormData = data instanceof FormData;

    // Build query string
    let url = `${API_URL}${endpoint}`;

    if (params) {
        const searchParams = new URLSearchParams();

        Object.entries(params).forEach(([key, value]) => {
            if (value !== undefined && value !== null) {
                searchParams.append(key, String(value));
            }
        });

        const queryString = searchParams.toString();

        if (queryString) {
            url += `?${queryString}`;
        }
    }

    const response = await fetch(url, {
        method,
        headers: {
        ...(isFormData ? {} : { 'Content-Type': 'application/json' }),
        ...(headers || {}),
        },
        body:
        method === HttpMethod.GET || data === undefined
            ? undefined
            : isFormData
            ? data
            : JSON.stringify(data),
    });

    return await response.json();
}