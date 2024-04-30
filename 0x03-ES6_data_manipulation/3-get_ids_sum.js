export default function getStudentIdsSum(students) {
  if (students instanceof Array) {
    return students.reduce(
      (previous, current) => previous.id || previous + current.id,
      0,
    );
  }
  return 0;
}
