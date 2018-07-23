import resumeJson from './resume';
import ResumeService from './src/resume-service';
import middy from 'middy';
import {cors} from 'middy/middlewares';

const service = new ResumeService(resumeJson);

function returnResponse(callback, response) {
    const resp = {
        statusCode: 200,
        body: JSON.stringify(response)
    };

    callback(null, resp);
}

const resumeFunction = async (event, context, callback) => {

    returnResponse(callback, resumeJson);
};

const descriptionFunction = async (event, context, callback) => {

  returnResponse(callback, service.description());
};

export const resume = middy(resumeFunction).use(cors());
export const description = middy(descriptionFunction).use(cors());
