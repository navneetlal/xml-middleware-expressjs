/**
 * @interface IServerResponseOptions
 */
interface IServerResponseOption {
  /**
   * @description Result of the query
   */  
  results?: any[];

  /**
   * @description Extra parameters apart from results
   */
  extra?: any[];

  /**
   * @description Current page number for the response in case of large data
   */  
  perPage?: number;

  /**
   * @description Current page number for the response in case of large data
   */
  page?: number;

  /**
   * @description Total count of requested result
   */
  total?: number;
}

/**
 * @class ServerResponse
 */

class ServerResponse {
  
  /**
   * @description True or False depending on success or failure response
   */
  public status!: boolean;

  /**
   * @description Message to respond the user with
   * @example Internal Server Error
   * @example Created new post
   */
  public message!: string;

  /**
   * @description Result of the query
   */
  public results!: any[];

  /**
   * @description Extra parameters apart from results
   */
  public extra!: any[];

  /**
   * @description Result per page in case of large data
   */
  public perPage!: number;

  /**
   * @description Current page number for the response in case of large data
   */
  public page!: number;

  /**
   * @description Total count of requested result
   */
  public total!: number;

  /**
   * @constructs ServerResponse
   * @param {boolean} _status TRUE for success response else FALSE
   * @param {string} _message MESSAGE
   * @param {IServerResponseOption} options The result of the response
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
