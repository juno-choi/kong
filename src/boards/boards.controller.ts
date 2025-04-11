import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { Board, BoardStatus } from './boards.model';
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

    @Delete("/:id")
    deleteBoard(@Param('id') id: number): void {
        this.boardsService.deleteBoard(id);
    }

    @Patch("/:id/status")
    updateBoardStatus(@Param('id') id: number, @Body('status') status: BoardStatus): Board {
        return this.boardsService.updateBoardStatus(id, status);
    }
}
