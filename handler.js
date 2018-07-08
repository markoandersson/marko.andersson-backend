import resumeJson from './resume';
import ResumeService from './src/resume-service';

const service = new ResumeService(resumeJson);

function returnResponse(callback, response) {
    const resp = {
        statusCode: 200,
        body: JSON.stringify(response)
    };

    callback(null, resp);
}

export const resume = async (event, context, callback) => {

    returnResponse(callback, resumeJson);
};

export const description = async (event, context, callback) => {

  returnResponse(callback, service.description());
};
