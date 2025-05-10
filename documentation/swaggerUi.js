import swaggerJsdoc from 'swagger-jsdoc';

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'URL Shortener API',
      version: '1.0.0',
      description: 'Shorten your URL and generate a QRCode with ease. By John Emori.',
    },
    components: {
      securitySchemes: {
        bearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT',
        }
      },
    },
    servers: [
      {
        url: 'http://localhost:4005/urlApi', // adjust to your API URL
      },
    ],
  },
  apis: ['./routes/*.js'], // adjust to your routes file location
};

const swaggerSpec = swaggerJsdoc(options);

export default swaggerSpec;