declare module "html5-qrcode" {
  export const Html5QrcodeSupportedFormats: {
    QR_CODE: number;
    AZTEC: number;
    CODABAR: number;
    CODE_39: number;
    CODE_93: number;
    CODE_128: number;
    DATA_MATRIX: number;
    MAXICODE: number;
    ITF: number;
    EAN_13: number;
    EAN_8: number;
    PDF_417: number;
    RSS_14: number;
    RSS_EXPANDED: number;
    UPC_A: number;
    UPC_E: number;
    UPC_EAN_EXTENSION: number;
  };

  export class Html5Qrcode {
    constructor(elementId: string);
    start(
      cameraConfig: { facingMode?: string } | string,
      config: {
        fps?: number;
        qrbox?:
          | number
          | {
              width: number;
              height: number;
            };
        aspectRatio?: number;
      },
      qrCodeSuccessCallback: (
        decodedText: string,
        decodedResult?: unknown
      ) => void,
      qrCodeErrorCallback?: (
        errorMessage: string,
        error?: unknown
      ) => void
    ): Promise<unknown>;
    stop(): Promise<void>;
    clear(): Promise<void>;
    getState?(): number;
  }
}
