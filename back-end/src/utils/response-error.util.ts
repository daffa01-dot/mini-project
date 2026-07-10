export class ResponseError extends Error {
  getStatusCode(): number {
    throw new Error("Method not implemented.");
  }
  private statusCode: number;
  private isExpose: boolean = true;

  constructor(statusCode: number, message: string) {
    super(message);
    this.statusCode = statusCode;
  }
}
