import Country from "../entities/country.entity";
import { Repository } from "typeorm";
import datasource from "../db";

export default class CountryService {
  db: Repository<Country>;
  constructor() {
    this.db = datasource.getRepository(Country);
  }

  async listCountry() {
    return this.db.find();
  }

  async findCountryNameByCode(code: string) {
    const country = await this.db.findOneBy({code});
    if (country) {
        return country.name;
    } else {
        return null;
    }
  }

  async createCountry({ code, name, emoji}: { code: string, name: string, emoji: string }) {
    const newCountry = this.db.create({ code, name, emoji });
    return await this.db.save(newCountry);
  }

  async findCountryById(id: string ){
    return await this.db.findOneBy({id});
  }
  async deleteCountry(id: string) {
    const country = (await this.findCountryById(id)) as Country;
    await this.db.delete(country);
    return { ...country, id };
  }

  // pour récuperer tous les pays d'un continent
  async getCountriesByContinent(continentCode: string) {
    return await this.db.findOneBy({ continentCode });
     }

}