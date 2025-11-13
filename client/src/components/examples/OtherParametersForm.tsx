import OtherParametersForm from '../OtherParametersForm';

export default function OtherParametersFormExample() {
  const handleSubmit = (data: any) => {
    console.log('Other parameters submitted:', data);
  };

  const handleBack = () => {
    console.log('Back clicked');
  };

  return (
    <div className="p-8 bg-background max-w-4xl mx-auto">
      <OtherParametersForm onSubmit={handleSubmit} onBack={handleBack} />
    </div>
  );
}
