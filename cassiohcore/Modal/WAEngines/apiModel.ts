export interface API {
    client: any;
    session_status: SessionStatus;

    send_message: (to: string, message: string, options?: any) => Promise<boolean>;
    send_image: (to: string, image: string, caption: string, options?: any) => Promise<boolean>;
}

export enum SessionStatus {
    SESSION_NOT_STARTED,
    SESSION_NOT_LOGGED,
    SESSION_STARTED,
}