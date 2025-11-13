import SubjectPerformanceForm from '../SubjectPerformanceForm';

export default function SubjectPerformanceFormExample() {
  const handleSubmit = (data: any) => {
    console.log('Subjects submitted:', data);
  };

  const handleBack = () => {
    console.log('Back clicked');
  };

  return (
    <div className="p-8 bg-background">
      <SubjectPerformanceForm onSubmit={handleSubmit} onBack={handleBack} />
    </div>
  );
}
