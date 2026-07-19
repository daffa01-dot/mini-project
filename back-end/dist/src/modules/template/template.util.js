"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TemplateUtil = void 0;
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const handlebars_1 = __importDefault(require("handlebars"));
class TemplateUtil {
    /**
     * Mengompilasi template Handlebars (.hbs) menjadi string HTML utuh
     * @param templateName Nama file hbs (tanpa ekstensi)
     * @param data Objek berisi variabel yang akan dimasukkan ke dalam email
     */
    static getHtmlTemplate(templateName, data) {
        // 1. Tentukan path absolut menuju file .hbs secara akurat
        const templatePath = path_1.default.join(__dirname, `${templateName}.hbs`);
        // 2. Baca isi file .hbs tersebut sebagai string teks
        const templateSource = fs_1.default.readFileSync(templatePath, "utf-8");
        // 3. Kompilasi string tersebut menggunakan Handlebars
        const compiledTemplate = handlebars_1.default.compile(templateSource);
        // 4. Suntikkan data objek (nama, nominal, dll) ke dalam template dan kembalikan sebagai string HTML
        return compiledTemplate(data);
    }
}
exports.TemplateUtil = TemplateUtil;
//# sourceMappingURL=template.util.js.map