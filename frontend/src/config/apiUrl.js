const apiBaseUrl = process.env.REACT_APP_API_BASE_URL;
if (!apiBaseUrl) {
    console.error(
        'No API URL found. This application will not function correctly'
    );
}
export const API_BASE_URL = apiBaseUrl;
