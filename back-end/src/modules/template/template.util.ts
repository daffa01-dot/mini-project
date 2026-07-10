import fs from "fs";
import path from "path";
import handlebars from "handlebars";

export class TemplateUtil {
  /**
   * Mengompilasi template Handlebars (.hbs) menjadi string HTML utuh
   * @param templateName Nama file hbs (tanpa ekstensi)
   * @param data Objek berisi variabel yang akan dimasukkan ke dalam email
   */
  static getHtmlTemplate(templateName: string, data: Record<string, any>): string {
    // 1. Tentukan path absolut menuju file .hbs secara akurat
    const templatePath = path.join(__dirname, `${templateName}.hbs`);
    
    // 2. Baca isi file .hbs tersebut sebagai string teks
    const templateSource = fs.readFileSync(templatePath, "utf-8");
    
    // 3. Kompilasi string tersebut menggunakan Handlebars
    const compiledTemplate = handlebars.compile(templateSource);
    
    // 4. Suntikkan data objek (nama, nominal, dll) ke dalam template dan kembalikan sebagai string HTML
    return compiledTemplate(data);
  }
}