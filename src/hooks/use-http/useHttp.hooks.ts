import { useState } from "react";
import UseHttpResponse from "../../types/use-http-response/UseHttpResponse.type";

export const useHttp = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const sendRequest = async (
    // eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
    requester: Function,
    ...args: unknown[]
  ): Promise<UseHttpResponse> => {
    setIsLoading(true);

    try {
      const result = await requester(...args);
      return { response: result };
    } catch (err) {
      return { error: err };
    } finally {
      setIsLoading(false);
    }
  };

  return { isLoading, sendRequest };
};
