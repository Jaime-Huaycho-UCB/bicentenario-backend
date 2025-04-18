import { Response } from "express";

export const responseError = (error,res: Response) => {
    try {
        return res.status(error.getStatus()).json({
            code: error.getStatus(),
            message: ((process.env.LOGS || 'false').includes('true') ? error.getResponse() : ((error.getStatus()>=500 && error.getStatus()<600) ? 'Error desconocido' : error.getResponse()))
        })
    } catch (error1) {
        return res.status(500).json({
            code: 500,
            message: (process.env.LOGS || 'false').includes('true') ? error.message : 'Error desconocido'
        });
    }
}

export const printConsole = (mensaje,show = true) => {
    const logs = process.env.LOGS || 'false';
    if (logs.includes('true') && show){
        console.log('===================== START LOG ======================');
        console.log(mensaje);
        console.log('====================== END LOG =======================');
    }
}