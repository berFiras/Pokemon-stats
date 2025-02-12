import { useState } from "react";
import UseHttpResponse from "../../types/use-http-response/UseHttpResponse.type";

type ApiMethod<T, P extends unknown[]> = (...args: P) => Promise<T>;

export const useHttp = <T, P extends unknown[]>() => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const sendRequest = async (
    requester: ApiMethod<T, P>,
    ...args: P
  ): Promise<UseHttpResponse> => {
    setIsLoading(true);

    try {
      const result = await requester(...args);
      setIsLoading(false);
      return { response: result };
    } catch (err) {
      setIsLoading(false);
      return { error: err };
    } finally {
      setIsLoading(false);
    }
  };

  return { isLoading, sendRequest };
};
