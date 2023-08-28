//importacion del middleware
import  { validationResult } from 'express-validator';

//configuracion del middleware
//express-validator ayuda a que desde el backend no ingresen datos no deseados, y no es posible penetrar esta medida como en el frontend, que se puede falsificar facilmente con la herramienta 'inspeccionar'
export const validateSchema = (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(400).json({errors: errors.array()})
    }

    next()
}