import path from "path";
import fs from "fs";
import handlebars from "handlebars";

export class TemplateUtil {
  static compile(templateName: string, data: any) {
    // 🟢 KUNCI PERBAIKAN: Mengunci jalur absolut murni dari root ke folder modules/template Anda
    const templatePath = path.resolve(
      process.cwd(),
      "src",
      "modules",
      "template",
      `${templateName}.hbs`
    );
    
    console.log("🔍 NODE.JS PASTI MENCARI DI SINI ->", templatePath);

    if (!fs.existsSync(templatePath)) {
      throw new Error(`File template hbs tidak ditemukan di lokasi absolut: ${templatePath}`);
    }
    
    const templateSource = fs.readFileSync(templatePath, "utf-8");
    const compiledTemplate = handlebars.compile(templateSource);
    return compiledTemplate(data);
  }
}