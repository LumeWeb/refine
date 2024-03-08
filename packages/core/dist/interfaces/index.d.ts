import { IResourceItem } from "./bindings/resource";
export * from "../contexts/data/IDataContext";
export * from "../contexts/live/ILiveContext";
export * from "../contexts/auth/IAuthContext";
export * from "../contexts/refine/IRefineContext";
export * from "../contexts/translation/ITranslationContext";
export * from "../contexts/undoableQueue/IUndoableQueueContext";
export * from "../contexts/resource/IResourceContext";
export * from "../contexts/unsavedWarn/IUnsavedWarnContext";
export * from "../contexts/legacy-router/IRouterContext";
export * from "../contexts/accessControl/IAccessControlContext";
export * from "../contexts/notification/INotificationContext";
export * from "../contexts/auditLog/IAuditLogContext";
export * from "../components/pages/login";
export * from "./actions";
export * from "./notification";
export * from "./mutationMode";
export * from "./errors";
export * from "./customComponents";
export * from "./resourceRouterParams";
export * from "./resourceErrorRouterParams";
export * from "./mapDataFn";
export * from "./successErrorNotification";
export * from "./metaData";
export * from "./queryKey";
export * from "./live";
export * from "./auditLog";
export type BaseKey = string | number;
export type BaseRecord = {
    id?: BaseKey;
    [key: string]: any;
};
export type BaseOption = {
    label: any;
    value: any;
};
/**
 * @deprecated Use `BaseOption` instead.
 */
export interface Option extends BaseOption {
}
export type ITreeMenu = IResourceItem & {
    key?: string;
    children: ITreeMenu[];
};
export type IMenuItem = IResourceItem & {
    key: string;
    route: string;
};
export * from "./form-url-params";
export * from "./auth";
export * from "./bindings";
export * from "./prettify";
export * from "./autoSave";
export * from "./textTransformers";
export * from "./optimistic-update-map";
//# sourceMappingURL=index.d.ts.map