import { Controller, Get, HttpStatus, Param, ParseUUIDPipe, Put } from "@nestjs/common"
import { FindStudentResponseDto, StudentResponseDto } from "../student/dto/student.dto";
import { StudentService } from "../student/student.service";

@Controller('teachers/:teacherId/students')
export class StudentTeacherController {

    constructor(private readonly studentService: StudentService) {

    }

    @Get()
    getStudents(
        @Param('teacherId', new ParseUUIDPipe({errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE})) teacherId: string
    ): FindStudentResponseDto[] {
        return this.studentService.getStudentsByTeacherId(teacherId);
    }

    @Put('/:studentId')
    updateStudentTeacher(
        @Param('teacherId', new ParseUUIDPipe({errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE})) teacherId: string,
        @Param('studentId', new ParseUUIDPipe({errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE})) studentId: string
    ): StudentResponseDto {
        return  this.studentService.updateStudentTeacher(teacherId, studentId);
    }
}