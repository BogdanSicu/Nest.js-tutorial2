import { Controller, Get, Post, Put } from "@nestjs/common"

@Controller('students')
export class StudentController {

    @Get()
    getStudents() {
        return "All Students";
    }

    @Get('/:studentId')
    getStudentById() {
        return "Get student by id";
    }

    @Post()
    createStudent() {
        return "Create Student";
    }

    @Put('/:studentId')
    updateStudent() {
        return "Update Student by id";
    }

}