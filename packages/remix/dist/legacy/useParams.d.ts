import { IRouterProvider, ResourceRouterParams } from "@refinedev/core";
export declare const isAction: (param: string) => boolean;
export declare const lastActionIndex: (params: string[]) => number;
export declare const composeParams: (params: string[]) => ResourceRouterParams;
export declare const handleRefineParams: (refineSplat?: string) => ResourceRouterParams | Record<string, string>;
export declare const useParams: IRouterProvider["useParams"];
//# sourceMappingURL=useParams.d.ts.map