interface IServerResponseOption {
  results?: any[];
  extra?: any[];
  perPage?: number;
  page?: number;
  total?: number;
}

class ServerResponse {
  public status!: boolean;

  public message!: string;

  public results!: any[];

  public extra!: any[];

  public perPage!: number;

  public page!: number;

  public total!: number;

  /**
   *
   * @param _status TRUE for success response else FALSE
   * @param _message MESSAGE
   * @param options The result of the response
   */
  constructor(
    _status?: boolean,
    _message?: string,
    options?: IServerResponseOption
  ) {
    if (_status) this.status = _status;
    if (_message) this.message = _message;
    if (options?.results) this.results = options.results;
    if (options?.extra) this.extra = options.extra;
    if (options?.perPage) this.perPage = options.perPage;
    if (options?.page) this.page = options.page;
    if (options?.total) this.total = options.total;
  }
}

export { IServerResponseOption };

export default ServerResponse;
