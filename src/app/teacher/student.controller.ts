import { Controller, Get, Param, Put } from "@nestjs/common"

@Controller('teachers/:teacherId/students')
export class StudentTeacherController {

    @Get()
    getStudents(
        @Param('teacherId') teacherId: string
    ) {
        return `Get all students that belong to a teacher with id of ${teacherId}`;
    }

    @Put('/:studentId')
    updateStudentTeacher(
        @Param('teacherId') teacherId: string,
        @Param('studentId') studentId: string
    ) {
        return `Update Student with id ${studentId} to Teacher with id ${teacherId}`;
    }
}