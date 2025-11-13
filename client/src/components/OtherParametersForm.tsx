import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { otherParametersSchema, type OtherParameters } from "@shared/schema";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage, FormDescription } from "@/components/ui/form";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface OtherParametersFormProps {
  defaultValues?: OtherParameters;
  onSubmit: (data: OtherParameters) => void;
  onBack: () => void;
}

export default function OtherParametersForm({ defaultValues, onSubmit, onBack }: OtherParametersFormProps) {
  const form = useForm<OtherParameters>({
    resolver: zodResolver(otherParametersSchema),
    defaultValues: defaultValues || {
      academicTrack: "",
      attendance: "",
      technicalSkills: "",
      aptitudeSkills: "",
      programmingSkills: "",
      coCurricularActivities: "",
      extraCurricularActivities: "",
      ranksAwards: "",
      disciplinaryIssues: "",
      healthGraph: "",
      parentVisits: "",
      otherIssues: "",
    },
  });

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>Academic Performance</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <FormField
              control={form.control}
              name="academicTrack"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Academic Track (SGPA - Semester-wise)</FormLabel>
                  <FormDescription>Enter semester-wise SGPA, e.g., "Sem 1: 8.5, Sem 2: 8.8"</FormDescription>
                  <FormControl>
                    <Textarea placeholder="Sem 1: 8.5, Sem 2: 8.8..." data-testid="input-academic-track" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="attendance"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Attendance and Alerts</FormLabel>
                  <FormDescription>Mention attendance percentage and any alerts given to students/parents</FormDescription>
                  <FormControl>
                    <Textarea placeholder="85% attendance, Alert issued on..." data-testid="input-attendance" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Skills Assessment</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <FormField
              control={form.control}
              name="technicalSkills"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Technical Skills</FormLabel>
                  <FormDescription>Based on assessment tests</FormDescription>
                  <FormControl>
                    <Textarea placeholder="Proficient in Java, C++..." data-testid="input-technical-skills" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="aptitudeSkills"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Aptitude Skills</FormLabel>
                  <FormDescription>Based on assessment tests</FormDescription>
                  <FormControl>
                    <Textarea placeholder="Logical reasoning: Good, Quantitative: Average..." data-testid="input-aptitude-skills" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="programmingSkills"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Currently Learning Programming Skills</FormLabel>
                  <FormControl>
                    <Textarea placeholder="Python, Machine Learning..." data-testid="input-programming-skills" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Activities & Achievements</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <FormField
              control={form.control}
              name="coCurricularActivities"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Co-Curricular Activities</FormLabel>
                  <FormDescription>Workshop, seminar, guest lectures, etc.</FormDescription>
                  <FormControl>
                    <Textarea placeholder="Attended AI workshop, Guest lecture on..." data-testid="input-cocurricular" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="extraCurricularActivities"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Extra-Curricular Activities</FormLabel>
                  <FormDescription>Sports, cultural, NSS, etc.</FormDescription>
                  <FormControl>
                    <Textarea placeholder="NSS volunteer, Cricket team member..." data-testid="input-extracurricular" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="ranksAwards"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Ranks/Awards/Rewards</FormLabel>
                  <FormDescription>Received at college/university level</FormDescription>
                  <FormControl>
                    <Textarea placeholder="1st Prize in Hackathon..." data-testid="input-awards" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Other Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <FormField
              control={form.control}
              name="disciplinaryIssues"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Disciplinary Activities</FormLabel>
                  <FormDescription>Any involvement in disciplinary activities</FormDescription>
                  <FormControl>
                    <Textarea placeholder="None / Details of any issues..." data-testid="input-disciplinary" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="healthGraph"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Health Graph</FormLabel>
                  <FormDescription>Latest health status</FormDescription>
                  <FormControl>
                    <Textarea placeholder="Good health / Any health concerns..." data-testid="input-health" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="parentVisits"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Parent Visits</FormLabel>
                  <FormDescription>Number of times parents visited college and department</FormDescription>
                  <FormControl>
                    <Textarea placeholder="3 times - on dates..." data-testid="input-parent-visits" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="otherIssues"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Other Issues</FormLabel>
                  <FormDescription>Academic/Non-academic related issues identified & rectified</FormDescription>
                  <FormControl>
                    <Textarea placeholder="Issue identified and resolved..." data-testid="input-other-issues" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </CardContent>
        </Card>

        <div className="flex justify-between">
          <Button variant="outline" onClick={onBack} type="button" data-testid="button-back">
            Back
          </Button>
          <Button type="submit" data-testid="button-generate-report">
            Generate Report
          </Button>
        </div>
      </form>
    </Form>
  );
}
