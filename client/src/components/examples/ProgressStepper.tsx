import ProgressStepper from '../ProgressStepper';

export default function ProgressStepperExample() {
  const steps = [
    { label: "Student Details", step: 1 },
    { label: "Subject Performance", step: 2 },
    { label: "Other Parameters", step: 3 },
    { label: "Review", step: 4 },
  ];

  return (
    <div className="p-8 bg-background">
      <ProgressStepper currentStep={2} steps={steps} />
    </div>
  );
}
