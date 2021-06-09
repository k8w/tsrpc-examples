export interface ReqUpload {
    fileName: string,
    fileData: Uint8Array
}

export interface ResUpload {
    url: string;
}