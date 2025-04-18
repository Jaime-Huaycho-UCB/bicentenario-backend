
export const generateCode = () => {
    const code = Math.floor(100000 + Math.random() * 900000);
    return code;
}

export const headerAuth = () => {
    return {
        name: 'Authorization',
        description: 'Token de acceso en formato Bearer',
        required: true
    };
}