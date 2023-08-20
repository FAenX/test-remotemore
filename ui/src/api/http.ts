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
        url: string ,
        hook: string,
        path? : string,
        queryString?: string
        ): Promise<any> => {
        
        try {
            console.log(url)
            console.log(hook)
            console.log(path)
            console.log(queryString)
            if (hook === "search" && queryString){
                url = url + "?hook=search&queryString=" + queryString
                console.log(queryString)
                console.log(url)

            }
            else if (hook === "tracks" && path){
                url = url + "?hook=tracks&path=" + path
                console.log(path)
                console.log(url)


            }
            else if (hook === "artist" && path){
                url = url + "?hook=artist&path=" + path
                console.log(path)
                console.log(url)
            }

            else if (hook === "album" && path){
                url = url + "?hook=album&path=" + path
                console.log(path)
                console.log(url)
            }
            else{
                return {
                    error: true,
                    message: 'Application failure.',
                    };
            }
            const response = await axios.get(url , config);
            // console.log(response.data)
            return response.data;
        
        } catch (error) {
            return errorHandler(error);
        }
    }
}

export default API;

