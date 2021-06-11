
import './App.css';

import CourseHeader from './components/CourseHeader/CourseHeader';
import Courses from './components/Courses/Courses';
import Header from './components/Header/Header';
import NextSteps from './components/NextSteps/NextSteps';

function App() {
  return (
    <div style={{ backgroundColor: '#F8F8F8' }}>
      <div className="container">
        <Header></Header>
        
        <CourseHeader title="Introduction" description="Put your logic to the test with these warmups!"></CourseHeader>
        <Courses courseTitle="Warmup Puzzles" courseImage="https://ds055uzetaobb.cloudfront.net/brioche/chapter/Warmup_Puzzles-T6zgwD-6TgfYy.png?width=280" courseDescription="Get started with logic warmups"></Courses>

        <CourseHeader title="The Rational Detective" description="Put your logic to the test with these warmups!"></CourseHeader>
        <Courses courseTitle="Warmup Puzzles" courseImage="https://ds055uzetaobb.cloudfront.net/brioche/chapter/Warmup_Puzzles-T6zgwD-6TgfYy.png?width=280" courseDescription="Get started with logic warmups"></Courses>

        <CourseHeader title="Puzzles and Riddles" description="Put your logic to the test with these warmups!"></CourseHeader>
        <Courses courseTitle="Warmup Puzzles" courseImage="https://ds055uzetaobb.cloudfront.net/brioche/chapter/Warmup_Puzzles-T6zgwD-6TgfYy.png?width=280" courseDescription="Get started with logic warmups"></Courses>

        <CourseHeader title="Multi-Level Thinking" description="Put your logic to the test with these warmups!"></CourseHeader>
        <Courses courseTitle="Warmup Puzzles" courseImage="https://ds055uzetaobb.cloudfront.net/brioche/chapter/Warmup_Puzzles-T6zgwD-6TgfYy.png?width=280" courseDescription="Get started with logic warmups"></Courses>

        <CourseHeader title="Competitive Games" description="Put your logic to the test with these warmups!"></CourseHeader>
        <Courses courseTitle="Warmup Puzzles" courseImage="https://ds055uzetaobb.cloudfront.net/brioche/chapter/Warmup_Puzzles-T6zgwD-6TgfYy.png?width=280" courseDescription="Get started with logic warmups"></Courses>

        <CourseHeader title="Logic Machines" description="Put your logic to the test with these warmups!"></CourseHeader>
        <Courses courseTitle="Warmup Puzzles" courseImage="https://ds055uzetaobb.cloudfront.net/brioche/chapter/Warmup_Puzzles-T6zgwD-6TgfYy.png?width=280" courseDescription="Get started with logic warmups"></Courses>

        <CourseHeader title="Advanced Knights and Knaves" description="Put your logic to the test with these warmups!"></CourseHeader>
        <Courses courseTitle="Warmup Puzzles" courseImage="https://ds055uzetaobb.cloudfront.net/brioche/chapter/Warmup_Puzzles-T6zgwD-6TgfYy.png?width=280" courseDescription="Get started with logic warmups"></Courses>

        <CourseHeader title="Next Steps" description=""></CourseHeader>
        <div className="row">
          <NextSteps title="Mathematical Fundamentals" description="Essential tools for mastering algebra" image="https://ds055uzetaobb.cloudfront.net/brioche/chapter/math_fundamentals-KD5NF3.png"></NextSteps>
          <NextSteps title="Computer Science Fundamentals" description="Essential tools for mastering computer" image="https://ds055uzetaobb.cloudfront.net/brioche/chapter/cs_fundamentals-B2P79W.png"></NextSteps>
        </div>

      </div>

    </div>


  );
}

export default App;
