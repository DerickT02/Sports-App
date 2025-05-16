export declare function login(email: string, password: string): Promise<{
    data: any;
    id: string;
    email: string;
    role: import("../../../shared/types/auth").Role;
}>;
