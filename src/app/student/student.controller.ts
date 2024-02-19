import { Body, Controller, Get, Param, Post, Put } from "@nestjs/common"

@Controller('students')
export class StudentController {

    @Get()
    getStudents() {
        return "All Students";
    }

    @Get('/:studentId')
    getStudentById(
        @Param('studentId') studentId: string
    ) {
        return "Get student by id:" + studentId;
    }

    @Post()
    createStudent(
        @Body() body
    ) {
        return "Create Student";
    }

    @Put('/:studentId')
    updateStudent(
        @Param('studentId') studentId: string,
        @Body() body
    ) {
        return "Update Student by id";
    }

}