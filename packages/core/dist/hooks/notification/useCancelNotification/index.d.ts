import { IUndoableQueue } from "../../../interfaces";
export type UseCancelNotificationType = () => {
    notifications: IUndoableQueue[];
    notificationDispatch: React.Dispatch<any>;
};
export declare const useCancelNotification: UseCancelNotificationType;
//# sourceMappingURL=index.d.ts.map