
class ResumeService {

    constructor(resumeJson) {
        this.json = resumeJson;
    }

    description() {
        return this.json.basics.label;
    }
}

export default ResumeService;
