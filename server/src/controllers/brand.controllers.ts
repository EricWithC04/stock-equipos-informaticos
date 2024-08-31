import { Request, Response } from "express";
import brandService from "../services/brand.service";
import { Brand } from "../interfaces/brand.interface";

class BrandController {

    constructor() {}

    public getBrands = async (req: Request, res: Response) => {
        const brands = await brandService.getBrands();

        if (!brands || !brands.length) {
            return res.status(404).json({ message: "No hay marcas registradas" });
        }

        res.status(200).json(brands);
    }

    public createBrand = async (req: Request, res: Response) => {
        const data: Brand = req.body;
        const brand = await brandService.createBrand(data);

        if (!brand) {
            return res.status(500).send({
                status: 500,
                message: 'No se ha podido crear la marca!'
            });
        }

        res.status(201).json(brand);
    }

    public updateBrand = async (req: Request, res: Response) => {
        const { id } = req.params;
        const data: Brand = req.body;
        const brand = await brandService.updateBrand(parseInt(id), data);

        if (!brand) {
            return res.status(500).send({
                status: 500,
                message: 'No se ha podido actualizar la marca!'
            });
        }

        res.status(201).json(brand);
    }

    public deleteBrand = async (req: Request, res: Response) => {
        const { id } = req.params;
        const brand = await brandService.deleteBrand(parseInt(id));

        if (!brand) {
            return res.status(500).json({ message: "No se ha podido eliminar la marca" });
        }

        res.status(200).json({ message: "La marca ha sido eliminada" });
    }
}

export default new BrandController()