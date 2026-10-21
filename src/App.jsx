
import courses from './data/courses';
import './styles.css';

function CourseCard({ course }) {
  return (
    <article className="card">
      <h2>{course.title}</h2>
      <p>Lecturer: {course.lecturer}</p>
      <p>Progress: {course.progress}%</p>
      <strong>
        {course.completed ? 'Completed' : 'In progress'}
      </strong>
    </article>
  );
}

export default function App() {
  return (
    <main>
      <h1>My Course Dashboard</h1>

      {courses.length === 0 ? (
        <p>No courses available yet. Please check back later.</p>
      ) : (
        <section className="grid">
          {courses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </section>
      )}
    </main>
  );
}
