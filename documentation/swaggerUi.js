import swaggerJsdoc from 'swagger-jsdoc';

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'URL Shortener API',
      version: '1.0.0',
      description: 'Shorten your URL and generate a QRCode with ease. By John Emori.',
    },
    tags: [
      {
        name: "Users",
        description: "Endpoints related to user creation and role management",
      },
      {
        name: "URLs",
        description: "Endpoints for creating, customizing and other URL related functionalities",
      },
      {
        name: "QRCode",
        description: "Endpoint for generating QRCode",
      },
  ],
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
      url: 'https://url-scissor-api-7.onrender.com/urlApi',
      },
      {
      url: 'http://localhost:4005/urlApi',
      }
    ],
  },
  apis: ['./routes/*.js'],
};

const swaggerSpec = swaggerJsdoc(options);


export default swaggerSpec;
