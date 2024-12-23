import { NextFunction, Request, Response } from "express";

import { countryService } from "../services/country.service";

class CountryController {
  public async findAll(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<any> {
    try {
      const countries = await countryService.findAll();

      return res.json({ countries: [...countries.data] });
    } catch (e) {
      next(e);
    }
  }

  public async findCountryInfo(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<any> {
    try {
      const countryId = req.params.GetCountryInfo;
      const country = await countryService.findById(countryId);
      console.log(country);
      return res.json(country);
    } catch (e) {
      next(e);
    }
  }
}

export const countryController = new CountryController();
