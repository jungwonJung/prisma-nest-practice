import { Controller, Get, Post } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { MovieDto } from './movies.dto';

@Controller('movies')
export class MoviesController {
    constructor(private readonly prismaService : PrismaService) {}

    @Get()
    findAll() : Promise<MovieDto[]> {
        return this.prismaService.movie.findMany()
    }


    @Post()
    create(@Body(body) body : MovieDto): Promise<MovieDto> {
        return this.prismaService.movie.findOnd(body)
    }


}
