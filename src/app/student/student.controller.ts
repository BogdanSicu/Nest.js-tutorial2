import { Body, Controller, Get, Param, Post, Put } from "@nestjs/common"
import { CreateStudentDto, FindStudentResponseDto, StudentResponseDto, UpdateStudentDto } from "./dto/student.dto";

@Controller('students')
export class StudentController {

    @Get()
    getStudents(): FindStudentResponseDto[] {
        return "All Students";
    }

    @Get('/:studentId')
    getStudentById(
        @Param('studentId') studentId: string
    ): FindStudentResponseDto {
        return "Get student by id:" + studentId;
    }

    @Post()
    createStudent(
        @Body() body: CreateStudentDto
    ): StudentResponseDto {
        return "Create Student";
    }

    @Put('/:studentId')
    updateStudent(
        @Param('studentId') studentId: string,
        @Body() body: UpdateStudentDto
    ): StudentResponseDto {
        return "Update Student by id";
    }

}