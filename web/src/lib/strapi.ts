interface Props {
  endpoint: string;
  query?: Record<string, string>;
  wrappedByKey?: string;
  wrappedByList?: boolean;
}

/**
 * Fetches data from the Strapi API
 * @param endpoint - The endpoint to fetch from
 * @param query - The query parameters to add to the url
 * @param wrappedByKey - The key to unwrap the response from
 * @param wrappedByList - If the response is a list, unwrap it
 * @returns
 */
export default async function fetchApi<T>({
  endpoint,
  query,
  wrappedByKey,
  wrappedByList,
}: Props): Promise<T> {
  const strapiUrl = import.meta.env.STRAPI_URL;
  console.log('STRAPI_URL:', strapiUrl);

  if (endpoint.startsWith("/")) {
    endpoint = endpoint.slice(1);
  }

  const apiUrl = `${strapiUrl}/api/${endpoint}`;
  console.log('API URL:', apiUrl);

  const url = new URL(apiUrl);

  if (query) {
    Object.entries(query).forEach(([key, value]) => {
      url.searchParams.append(key, value);
    });
  }

  console.log('Final URL:', url.toString());

  try {
    const res = await fetch(url.toString(), {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }

    let data = await res.json();

    if (wrappedByKey) {
      data = data[wrappedByKey];
    }

    if (wrappedByList) {
      data = data[0];
    }

    return data as T;
  } catch (error) {
    console.error('Fetch error:', error);
    throw error;
  }
}