import { Controller, Get, Param, Put } from "@nestjs/common"
import { FindStudentResponseDto, StudentResponseDto } from "../student/dto/student.dto";

@Controller('teachers/:teacherId/students')
export class StudentTeacherController {

    @Get()
    getStudents(
        @Param('teacherId') teacherId: string
    ): FindStudentResponseDto[] {
        return `Get all students that belong to a teacher with id of ${teacherId}`;
    }

    @Put('/:studentId')
    updateStudentTeacher(
        @Param('teacherId') teacherId: string,
        @Param('studentId') studentId: string
    ): StudentResponseDto {
        return `Update Student with id ${studentId} to Teacher with id ${teacherId}`;
    }
}