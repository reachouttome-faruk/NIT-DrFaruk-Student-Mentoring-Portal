import ReportPreview from '../ReportPreview';
import type { MentoringReport } from '@shared/schema';

export default function ReportPreviewExample() {
  const mockData: MentoringReport = {
    studentDetails: {
      studentName: "Rajesh Kumar",
      class: "B.Tech CSE",
      section: "A",
      mentorName: "Dr. Priya Sharma",
      mentorDesignation: "Assistant Professor",
      mentorDepartment: "Computer Science & Engineering",
    },
    subjectPerformance: [
      {
        id: "1",
        subjectName: "Data Structures",
        subjectCode: "CS301",
        teachingFaculty: "Prof. Anand Kumar",
        weaknesses: "Needs improvement in tree traversal algorithms",
        classworkMarks: "18/20",
        internalMarks: "42/50",
        expectedOutcome: "Score above 45 in next internal",
        mentorRemarks: "Practice more coding problems on trees. Attend doubt clearing sessions.",
        currentStatus: "Improved to 45/50 in latest test",
      },
      {
        id: "2",
        subjectName: "Database Management",
        subjectCode: "CS302",
        teachingFaculty: "Dr. Meera Nair",
        weaknesses: "Query optimization concepts unclear",
        classworkMarks: "19/20",
        internalMarks: "38/50",
        expectedOutcome: "Better understanding of indexing",
        mentorRemarks: "Additional study material provided. Weekly assessment planned.",
        currentStatus: "Showing progress, scored 42/50",
      },
    ],
    otherParameters: {
      academicTrack: "Sem 1: 8.2, Sem 2: 8.5, Sem 3: 8.7",
      attendance: "88% - One alert issued for low attendance in October",
      technicalSkills: "Good in Java, C++. Average in Python",
      aptitudeSkills: "Logical Reasoning: Good, Quantitative: Average, Verbal: Good",
      programmingSkills: "Currently learning React.js and Node.js for web development",
      coCurricularActivities: "Attended AI/ML workshop by IEEE, Guest lecture on Cloud Computing",
      extraCurricularActivities: "NSS volunteer, Member of college cricket team",
      ranksAwards: "2nd Prize in departmental coding competition",
      disciplinaryIssues: "None",
      healthGraph: "Good health, no concerns",
      parentVisits: "Parents visited 2 times - Sept 15 and Nov 10",
      otherIssues: "Had difficulty managing time between sports and academics. Issue addressed through counseling session.",
    },
  };

  const handleDownload = () => {
    console.log('Download PDF clicked');
  };

  const handleEdit = () => {
    console.log('Edit clicked');
  };

  const handleNewEntry = () => {
    console.log('New entry clicked');
  };

  return (
    <div className="p-8 bg-background">
      <ReportPreview 
        data={mockData} 
        onDownload={handleDownload}
        onEdit={handleEdit}
        onNewEntry={handleNewEntry}
      />
    </div>
  );
}
