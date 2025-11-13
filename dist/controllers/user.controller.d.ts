import type { Request, Response } from "express";
export declare const getUserData: (req: Request, res: Response) => void;
export declare const getUserDataFromId: (req: Request, res: Response) => Response<any, Record<string, any>> | undefined;
export declare const getUserOnDiseases: (req: Request, res: Response) => Response<any, Record<string, any>> | undefined;
export declare const CreatePatient: (req: Request, res: Response) => Response<any, Record<string, any>> | undefined;
//# sourceMappingURL=user.controller.d.ts.map