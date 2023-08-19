import axios from 'axios';



// const host = process.env.REACT_APP_API_HOST

interface API {
    typeOfRequest: string;
}

const config = {
    headers: {
        'Content-Type': 'application/json',
    },
}

function errorHandler(error: any) {
    if (error.response) {
        const status = error.response.status;
        const statusText = error.response.statusText;

        return {
            error: true,
            status: status,
            message: statusText,
        };
    }
    else if (error.request) {
      return {
        error: true,
        message: 'Request failed, check your internet connection',
      };
    }else{
        return {
          message: 'Application failure.',
          error: true,
        };
    }
  }


class API {

    callAPI = async (
        api: string,
        endpoint: string,
        method: 'get' | 'post',
        data?: object,
        queryParam?: string,
        path? : string
        ): Promise<any> => {
        let url = `${api}/${endpoint}`;
        if (queryParam) {
            url = url.concat(`?${queryParam}`);
        }
        if (path) {
            url = url.concat(`?q=/${path}`);
        }
        console.log(queryParam)
        console.log(url)
        console.log(method)
        console.log(endpoint)
        console.log(data)
        console.log(path)
        try {
            if (method.toLocaleLowerCase() === 'get') {
                const response = await axios[method](url, config);
                console.log(response.data)
                return response.data;
            } else{
                return {
                    "message": "method not supported"
                }
            }

        } catch (error) {
            return errorHandler(error);
        }
    }
}

export default API;

