export class Mascota {
    constructor(_id = "", name = "", url = "", tipo = "", sector = "", contacto="", description="") {
      this._id = _id;
      this.name = name;
      this.url = url;
      this.tipo = tipo;
      this.sector = sector;
      this.contacto = contacto; 
      this.description = description;
    }
  
    _id: string;
    name: string;
    url: string;    
    tipo: string;
    sector: string;
    contacto: string;
    description: string;
  }