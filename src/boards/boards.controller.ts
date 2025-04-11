import { Body, Controller, Get, Post } from '@nestjs/common';
import { Board } from './boards.model';
import { BoardsService } from './boards.service';
import { CreateBoardDto } from './dto/create-board-dto';

@Controller('boards')
export class BoardsController {

    constructor(private boardsService: BoardsService) {}

    @Get("/")
    getAllBoards(): Board[] {
        return this.boardsService.getAllBoards();
    }

    @Post("/")
    createBoard(@Body() createBoardDto: CreateBoardDto): Board {
        return this.boardsService.createBoard(createBoardDto);
    }
}
