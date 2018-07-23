
class ResumeService {

    constructor(resumeJson) {
        this.json = resumeJson;
    }

    description() {
        return {
            description: this.json.basics.label
        }
    }
}

export default ResumeService;
