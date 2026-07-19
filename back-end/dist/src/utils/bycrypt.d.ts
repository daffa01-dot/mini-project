export declare class BcryptUtil {
    static hashPassword(password: string, saltRounds?: number): Promise<string>;
    static comparePassword(plainPassword: string, passwordHashed: string): Promise<boolean>;
}
//# sourceMappingURL=bycrypt.d.ts.map