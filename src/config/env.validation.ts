import * as Joi from 'joi';

export const envValidationSchema = Joi.object({
    PORT: Joi.number().default(3000),
    LOGS: Joi.boolean().default(false),

    DB_HOST: Joi.string().required(),
    DB_PORT: Joi.number().required(),
    DB_USER: Joi.string().required(),
    DB_PASSWORD: Joi.string().required(),
    DB_NAME: Joi.string().required(),

    USER_EMAIL: Joi.string().email().required(),
    PASS_AUTH: Joi.string().required(),

    JWT_SECRET: Joi.string().required(),
    JWT_TIME_EXPIRE: Joi.string().required(),

    FILE_SYSTEM_HOST: Joi.string().uri().required(),
    PDF_SERVICE_URL: Joi.string().uri().required(),

    GOOGLE_CLIENT_ID: Joi.string().required(),
    GOOGLE_CLIENT_SECRET: Joi.string().required(),
});