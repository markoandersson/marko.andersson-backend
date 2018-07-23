import ResumeService from './resume-service';

describe('Test Resume service', () => {

    const testResume = {
        basics: {
            label: 'test description'
        }
    };

    const service = new ResumeService(testResume);

    test('should return description', () => {

        expect(service.description().description).toEqual('test description');
    });
});
