import { Injectable, NotFoundException } from '@nestjs/common';
import { Board, BoardStatus } from './boards.model';
import { CreateBoardDto } from './dto/create-board-dto';

@Injectable()
export class BoardsService {

    private boards: Board[] = [];

    getAllBoards(): Board[] {
        return this.boards;
    }

    createBoard(createBoardDto: CreateBoardDto): Board {
        const { title, description } = createBoardDto;

        const board: Board = {
            id: this.boards.length + 1,
            title,
            description,
            status: BoardStatus.PUBLIC
        }

        this.boards.push(board);
        return board;
    }

    deleteBoard(id: number): void {
        this.boards = this.boards.filter((board) => board.id != id);
    }

    updateBoardStatus(id: number, status: BoardStatus): Board {
        const board = this.boards.find((board) => board.id == id);
        if (!board) {
            throw new NotFoundException(`Can't find Board with id ${id}`);
        }
        board.status = status;
        return board;
    }
    
}
