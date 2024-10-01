export interface CreateStudentRequest {
    studentId: string;
    firstName: string;
    lastName: string;
    email: string;
    course: string;
}

export interface UpdateStudentInterface {

    firstName: string;
    lastName: string;
    email: string;
    course: string;
}
