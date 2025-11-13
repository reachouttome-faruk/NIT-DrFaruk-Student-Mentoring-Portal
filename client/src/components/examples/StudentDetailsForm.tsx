import StudentDetailsForm from '../StudentDetailsForm';

export default function StudentDetailsFormExample() {
  const handleSubmit = (data: any) => {
    console.log('Form submitted:', data);
  };

  return (
    <div className="p-8 bg-background max-w-4xl mx-auto">
      <StudentDetailsForm onSubmit={handleSubmit} />
    </div>
  );
}
