const apiBaseUrl = process.env.REACT_APP_BASE_API_URL;
if (!apiBaseUrl) {
    console.error(
        'No API URL found. This application will not function correctly'
    );
}
export const BASE_API_URL = apiBaseUrl;
