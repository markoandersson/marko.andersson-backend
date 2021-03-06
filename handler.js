import resumeJson from './resume';
import axios from 'axios'
import cheerio from 'cheerio'
import middy from 'middy';
import {cors} from 'middy/middlewares';

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

const fetchBooksFromGoodreads = async (event, context, callback) => {

    let rssResponse = await axios.get(
        'https://www.goodreads.com/review/list_rss/52801025?key=2JK8I5HzRi3P-g3CiMsjDuDjDw9IueytY418EctyGg6lVhR6&shelf=read'
    )

    const $ = cheerio.load(rssResponse.data, {xmlMode: true})

    const books = $('rss').find('item')

    const response = []

    books.each(function () {
        const title = $(this).find('title').text()
        const author = $(this).find('author_name').text()
        const image = $(this).find('book_large_image_url').text()

        const data = {
            author,
            title,
            image
        }
        response.push(data)
    })

    returnResponse(callback, response)
};

export const resume = middy(resumeFunction).use(cors());
export const books = middy(fetchBooksFromGoodreads).use(cors());
