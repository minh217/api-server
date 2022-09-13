import { ResultResponse } from "./result/result.response";

export interface CRUD {
    list: (limit: number, page: number) => Promise<any>;
    create: (resource: any) => Promise<any>;
    putById: (resource: any) => Promise<any>;
    readById: (id: any) => Promise<any>;
    deleteById: (id: any) => Promise<any>;
    patchById: (id: any, resource: any) => Promise<any>;
}