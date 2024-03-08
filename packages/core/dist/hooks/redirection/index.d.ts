import { BaseKey, IResourceItem, MetaDataQuery, RedirectAction } from "../../interfaces";
export type UseRedirectionAfterSubmissionType = () => (options: {
    redirect: RedirectAction;
    resource?: IResourceItem;
    id?: BaseKey;
    meta?: MetaDataQuery;
}) => void;
export declare const useRedirectionAfterSubmission: UseRedirectionAfterSubmissionType;
//# sourceMappingURL=index.d.ts.map