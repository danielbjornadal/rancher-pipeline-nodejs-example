import * as express from "express";
import {Request, Response, NextFunction} from "express";

const app = express();

let books = [
    {
        id: 1,
        name: "The Lion",
        category: "Action",
        author: "Chuck Norris"
    },{
        id: 2,
        name: "Doom",
        category: "Horror",
        author: "Cane Hugh"
    }
]

app.get("/", (req: Request, res: Response) => res.status(200).json({message: "OK"}));

app.get("/book", (req: Request, res: Response) => {
    res.status(200).json(books);
});

app.route("/book/:bookId")
    .get((req: Request, res: Response) => {
        let book = books.filter(x => x.id == req.params.bookId);
        let statusCode = book.length > 0 ? 200 : 204;
        res.status(statusCode).json(book);
    });

app.route('*')
    .get((req: Request, res: Response) => {
        res.status(404).json({error: "API route not found"})
    })

module.exports = app.listen(80, () => console.log("Application stated on port 80"));