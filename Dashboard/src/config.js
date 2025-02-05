const config = {
    API_URL: process.env.REACT_APP_API_URL || window.location.origin + '/api',
    isDevelopment: process.env.NODE_ENV === 'development'
};

export default config;
