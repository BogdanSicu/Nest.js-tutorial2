import { Injectable } from '@nestjs/common';
import { students } from 'src/db';
import { CreateStudentDto, FindStudentResponseDto, StudentResponseDto, UpdateStudentDto } from './dto/student.dto';
import { v4 as uuid } from "uuid";

@Injectable()
export class StudentService {
    private students = students;

    getStudents(): FindStudentResponseDto[] {
        return this.students;
    }

    getStudentById(studentId: string): FindStudentResponseDto {
        return this.students.find(student => {
            return student.id === studentId;
        })
    }

    createStudent(payload: CreateStudentDto): StudentResponseDto {
        let newStudent = {
            id: uuid(),
            ...payload
        }

        this.students.push(newStudent);
        return newStudent;
    }

    updateStudent(payload: UpdateStudentDto, studentId: string): StudentResponseDto {
        let updateStudent = new StudentResponseDto;

        const updatedStudentList = this.students.map(student => {
            if(student.id === studentId) {
                return updateStudent = {
                    id: studentId,
                    ...payload
                }
            } else return student;
        });

        this.students = updatedStudentList;

        return updateStudent;
    }

    getStudentsByTeacherId(teacherId: string):FindStudentResponseDto[] {
        return this.students.filter(student => student.teacher == teacherId)
    }

    updateStudentTeacher(teacherId: string, studentId: string): StudentResponseDto {
        let updateStudent = new StudentResponseDto;

        const updatedStudentList = this.students.map(student => {
            if(student.id === studentId) {
                return updateStudent = {
                    ...student,
                    teacher: teacherId
                }
            } else return student;
        });

        this.students = updatedStudentList;

        return updateStudent;
    }

}